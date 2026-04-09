#!/bin/bash
# GEO 项目审核脚本 - 部署前必须通过
# 太子执行完构建部署后，调度此脚本进行质量审核

SITE_URL="${1:-https://ditui-merchant-v2.vercel.app}"
VERCEL_TOKEN="${VERCEL_TOKEN:-}"
PROJECT_DIR="/Users/rosabriggs/clawd/geo-project/ditui-site-nextjs"
FAILED=0

echo "=========================================="
echo "🔍 GEO项目部署前质量审核"
echo "=========================================="
echo "审核站点: $SITE_URL"
echo ""

# 1. 检查本地构建是否成功
echo "【1/6】检查本地构建..."
cd "$PROJECT_DIR"
if [ -d ".next" ]; then
  echo "✅ .next 目录存在，构建产物正常"
else
  echo "❌ .next 目录不存在，请先运行 npm run build"
  FAILED=1
fi

# 2. 检查 git 状态 - 确保没有未提交的重要文件
echo ""
echo "【2/6】检查 git 状态..."
git_status=$(git status --porcelain)
if [ -n "$git_status" ]; then
  uncommitted=$(echo "$git_status" | grep -v "^??" | wc -l | tr -d ' ')
  if [ "$uncommitted" -gt 0 ]; then
    echo "⚠️  有 $uncommitted 个文件未提交:"
    echo "$git_status" | head -5
    echo "❌ 重要文件未提交，可能导致部署版本不一致"
    FAILED=1
  else
    echo "✅ 新文件未跟踪（正常）"
  fi
else
  echo "✅ 工作区干净"
fi

# 3. 检查关键页面文件是否存在
echo ""
echo "【3/6】检查关键页面..."
for page in "page.tsx" "services/page.tsx" "cases/page.tsx" "contact/page.tsx" "about/page.tsx" "sitemap/page.tsx" "solutions/[industry]/page.tsx"; do
  if [ -f "src/app/$page" ]; then
    echo "  ✅ /$page 存在"
  else
    echo "  ❌ src/app/$page 缺失"
    FAILED=1
  fi
done

# 4. 检查 layout.tsx 是否正确（不含旧 Header/Footer 组件）
echo ""
echo "【4/6】检查 layout.tsx 配置..."
layout_content=$(cat "$PROJECT_DIR/src/app/layout.tsx" 2>/dev/null)
if echo "$layout_content" | grep -q "from.*header\|from.*footer"; then
  echo "❌ layout.tsx 仍然引用了 Header/Footer 组件，会导致双 header/footer"
  FAILED=1
else
  echo "✅ layout.tsx 配置正确（无重复组件）"
fi

# 5. curl 检查站点可访问性
echo ""
echo "【5/6】检查站点可访问性..."
http_code=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 "$SITE_URL/" 2>/dev/null)
if [ "$http_code" = "200" ]; then
  echo "✅ 首页返回 200"
else
  echo "❌ 首页返回 $http_code"
  FAILED=1
fi

# 6. 检查关键页面
for path in "/services" "/cases" "/contact" "/sitemap"; do
  code=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 "${SITE_URL}${path}" 2>/dev/null)
  if [ "$code" = "200" ]; then
    echo "  ✅ $path 返回 200"
  else
    echo "  ❌ $path 返回 $code"
    FAILED=1
  fi
done

# 7. 检查页面内容是否包含旧品牌名
echo ""
echo "【6/6】检查品牌名一致性..."
homepage_html=$(curl -s --max-time 10 "$SITE_URL/" 2>/dev/null)
if echo "$homepage_html" | grep -q "DiTuiMaster"; then
  echo "❌ 首页仍包含旧品牌名 'DiTuiMaster'"
  FAILED=1
elif echo "$homepage_html" | grep -q "DiTuiService"; then
  echo "✅ 品牌名为 DiTuiService"
else
  echo "⚠️  无法确认品牌名"
fi

# 检查是否有双 header
header_count=$(echo "$homepage_html" | grep -c '<header' 2>/dev/null || echo "0")
if [ "$header_count" -gt 1 ]; then
  echo "❌ 发现 $header_count 个 <header> 标签（重复）"
  FAILED=1
else
  echo "✅ header 标签数量正常"
fi

echo ""
echo "=========================================="
if [ "$FAILED" -eq 0 ]; then
  echo "✅ 审核通过！可以执行部署。"
  exit 0
else
  echo "❌ 审核失败！请修复上述问题后再部署。"
  exit 1
fi
