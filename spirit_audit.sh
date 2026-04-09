#!/bin/bash
# Spirit Audit - 主观能动性审计
# 审计子Agent是否发挥了120%主动性，而不只是"完成任务"
#
# 评估维度（5维度，每项20分，满分100）：
#   1. 主动性   - 是否主动发现并解决问题，而非等待指令
#   2. 预判性   - 是否提前预判后续步骤并准备
#   3. 全面性   - 是否尽力覆盖所有角落，还是只做表面
#   4. 超越性   - 是否超越基本要求，做了额外价值
#   5. 闭环性   - 是否主动汇报、确认、不上交问题
#
# 输出：分数 + 具体行为证据 + 改进建议

AGENT_NAME="${1:-未知Agent}"
TASK_DESC="${2:-}"
AUDIT_CONTEXT="${3:-}"

echo "=========================================="
echo "🔥 主观能动性审计"
echo "=========================================="
echo "被审计Agent: $AGENT_NAME"
echo "任务描述: $TASK_DESC"
echo ""

# 默认分数
SCORE主动性=0
SCORE预判性=0
SCORE全面性=0
SCORE超越性=0
SCORE闭环性=0

REPORT=""

# ===== 审计问询 =====
echo "【主观能动性问询】"
echo ""
echo "请回答以下问题（yes/no/partial）："
echo ""

# 1. 主动性
echo "1. 该Agent是否主动发现了问题（如配置错误、双渲染等），而非等待指出？"
read -r ans1
if [ "$ans1" = "yes" ]; then
  SCORE主动性=20
  REPORT+="  ✅ 主动发现并修复了问题\n"
elif [ "$ans1" = "partial" ]; then
  SCORE主动性=10
  REPORT+="  ⚠️ 部分问题需提醒才发现\n"
else
  SCORE主动性=0
  REPORT+="  ❌ 等指令才动，未主动发现问题\n"
fi

# 2. 预判性
echo "2. 该Agent是否提前预判了后续步骤并主动准备（如审核脚本、CI规则）？"
read -r ans2
if [ "$ans2" = "yes" ]; then
  SCORE预判性=20
  REPORT+="  ✅ 主动建立了审核流程和规则\n"
elif [ "$ans2" = "partial" ]; then
  SCORE预判性=10
  REPORT+="  ⚠️ 预判部分步骤\n"
else
  SCORE预判性=0
  REPORT+="  ❌ 只做当前指令，未预判\n"
fi

# 3. 全面性
echo "3. 该Agent是否覆盖了所有相关文件（layout/components/pages），还是只改了一处？"
read -r ans3
if [ "$ans3" = "yes" ]; then
  SCORE全面性=20
  REPORT+="  ✅ 系统性检查，覆盖全面\n"
elif [ "$ans3" = "partial" ]; then
  SCORE全面性=10
  REPORT+="  ⚠️ 部分覆盖\n"
else
  SCORE全面性=0
  REPORT+="  ❌ 只改一处，忽略其他\n"
fi

# 4. 超越性
echo "4. 该Agent是否超越了基本要求，提供了额外价值（如建立规则、主动提交git）？"
read -r ans4
if [ "$ans4" = "yes" ]; then
  SCORE超越性=20
  REPORT+="  ✅ 超越预期，主动建立workflow\n"
elif [ "$ans4" = "partial" ]; then
  SCORE超越性=10
  REPORT+="  ⚠️ 做了一些额外工作\n"
else
  SCORE超越性=0
  REPORT+="  ❌ 只做最低限度\n"
fi

# 5. 闭环性
echo "5. 该Agent是否主动汇报进展、验证结果、不把问题上交？"
read -r ans5
if [ "$ans5" = "yes" ]; then
  SCORE闭环性=20
  REPORT+="  ✅ 主动验证并汇报，闭环意识强\n"
elif [ "$ans5" = "partial" ]; then
  SCORE闭环性=10
  REPORT+="  ⚠️ 部分汇报\n"
else
  SCORE闭环性=0
  REPORT+="  ❌ 问题上交或无汇报\n"
fi

# ===== 计算总分 =====
总分=$((SCORE主动性 + SCORE预判性 + SCORE全面性 + SCORE超越性 + SCORE闭环性))

echo ""
echo "=========================================="
echo "📊 主观能动性审计报告"
echo "=========================================="
echo ""
printf "$REPORT"
echo ""
echo "维度得分："
echo "  主动性 20分: $SCORE主动性/20"
echo "  预判性 20分: $SCORE预判性/20"
echo "  全面性 20分: $SCORE全面性/20"
echo "  超越性 20分: $SCORE超越性/20"
echo "  闭环性 20分: $SCORE闭环性/20"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🔥 总分: $总分/100"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# ===== 评级 =====
if [ $总分 -ge 90 ]; then
  echo "🌟 评级：卓越 - 发挥了120%主观能动性"
  echo "★ ★ ★ ★ ★"
elif [ $总分 -ge 70 ]; then
  echo "✓ 评级：优秀 - 主动性强"
  echo "★ ★ ★ ★ ☆"
elif [ $总分 -ge 50 ]; then
  echo "⚠ 评级：合格 - 基本完成任务"
  echo "★ ★ ★ ☆ ☆"
elif [ $总分 -ge 30 ]; then
  echo "⚠ 评级：不足 - 主动性欠缺"
  echo "★ ★ ☆ ☆ ☆"
else
  echo "❌ 评级：不合格 - 缺乏主动性"
  echo "★ ☆ ☆ ☆ ☆"
fi

echo ""
echo "审计时间: $(date '+%Y-%m-%d %H:%M:%S')"

# ===== 改进建议 =====
echo ""
echo "【改进建议】"
if [ $SCORE主动性 -lt 20 ]; then
  echo "→ 主动性：下次先检查相关配置再开始编码"
fi
if [ $SCORE预判性 -lt 20 ]; then
  echo "→ 预判性：思考下一步需要什么，提前准备"
fi
if [ $SCORE全面性 -lt 20 ]; then
  echo "→ 全面性：检查相关文件是否需要同步修改"
fi
if [ $SCORE超越性 -lt 20 ]; then
  echo "→ 超越性：想一下还能提供什么额外价值"
fi
if [ $SCORE闭环性 -lt 20 ]; then
  echo "→ 闭环性：完成后主动验证并汇报"
fi

echo ""
echo "=========================================="

# 返回码：90+ = 通过，<90 = 需改进
if [ $总分 -ge 90 ]; then
  exit 0
else
  exit 1
fi
