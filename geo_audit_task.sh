#!/bin/bash
# GEO 项目审核Agent任务 - 通过 sessions_send 回奏太子
# 用法: bash geo_audit_task.sh

AUDIT_URL="${1:-https://ditui-merchant-v2.vercel.app}"
PROJECT_DIR="/Users/rosabriggs/clawd/geo-project/ditui-site-nextjs"
VERCEL_TOKEN="${VERCEL_TOKEN:-}"
ISSUES=""

echo "🔍 GEO审核Agent启动..."
echo "审核站点: $AUDIT_URL"

# 1. 检查本地构建
cd "$PROJECT_DIR" || exit 1
[ -d ".next" ] || ISSUES+="❌ .next构建目录缺失; "

# 2. git状态
git_status=$(git status --porcelain | grep -v "^??" | wc -l | tr -d ' ')
[ "$git_status" -gt 0 ] && ISSUES+="⚠️ $git_status个文件未提交; "

# 3. 关键页面
for page in "src/app/page.tsx" "src/app/services/page.tsx" "src/app/cases/page.tsx" "src/app/contact/page.tsx" "src/app/about/page.tsx" "src/app/sitemap/page.tsx" "src/app/solutions/[industry]/page.tsx"; do
  [ ! -f "$page" ] && ISSUES+="❌ $page 缺失; "
done

# 4. layout检查
layout=$(cat src/app/layout.tsx 2>/dev/null)
echo "$layout" | grep -q "from.*header\|from.*footer" && ISSUES+="❌ layout.tsx引用了旧Header/Footer组件; "

# 5. 站点访问
homepage_html=$(curl -s --max-time 10 "$AUDIT_URL/" 2>/dev/null)
http_code=$(echo "$homepage_html" | head -c 0) # just check curl worked
if [ -z "$homepage_html" ]; then
  ISSUES+="❌ 首页无法访问; "
fi

# 6. 双header检查
header_count=$(echo "$homepage_html" | grep -c '<header' 2>/dev/null || echo "0")
[ "$header_count" -gt 1 ] && ISSUES+="❌ 发现${header_count}个header标签（重复渲染）; "

# 7. 旧品牌名检查
echo "$homepage_html" | grep -q "DiTuiMaster" && ISSUES+="❌ 首页仍含旧品牌名DiTuiMaster; "

# 8. 各页面检查
for path in "/services" "/cases" "/contact" "/sitemap"; do
  code=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 "${AUDIT_URL}${path}" 2>/dev/null)
  [ "$code" != "200" ] && ISSUES+="❌ $path 返回$code; "
done

echo ""
echo "=========================================="
echo "📋 审核结果:"
echo "=========================================="

if [ -z "$ISSUES" ]; then
  echo "✅ 全部通过"
  echo ""
  echo "审核项:"
  echo "  ✅ 本地构建正常"
  echo "  ✅ git已提交"
  echo "  ✅ 关键页面齐全"
  echo "  ✅ layout.tsx配置正确"
  echo "  ✅ 首页可访问"
  echo "  ✅ 无重复header"
  echo "  ✅ 品牌名正确(DituiService)"
  echo "  ✅ 各页面返回200"
  AUDIT_RESULT="✅ 审核通过"
else
  echo "❌ 发现问题:"
  echo "$ISSUES" | tr ';' '\n'
  AUDIT_RESULT="❌ 审核失败: $ISSUES"
fi

echo ""
echo "审核时间: $(date '+%Y-%m-%d %H:%M:%S')"
echo "审核URL: $AUDIT_URL"

# 输出最终状态供脚本捕获
if [ -z "$ISSUES" ]; then
  exit 0
else
  exit 1
fi
