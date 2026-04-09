#!/bin/bash
# Spirit Audit - 主观能动性审计
# 审计子Agent是否发挥了120%主动性，而不只是"完成任务"
#
# 评估维度（5维度，每项20分，满分100）：
#   1. proactivity   - 是否主动发现并解决问题，而非等待指令
#   2. foresight      - 是否提前预判后续步骤并准备
#   3. thoroughness   - 是否尽力覆盖所有角落，还是只做表面
#   4. exceed         - 是否超越基本要求，做了额外价值
#   5. closure        - 是否主动汇报、确认、不上交问题
#
# 用法：
#   bash spirit_audit.sh "<Agent名字>" "<任务描述>" <ans1> <ans2> <ans3> <ans4> <ans5>
#   参数为 yes/partial/no

AGENT_NAME="${1:-未知Agent}"
TASK_DESC="${2:-}"
ans1="${3:-}"
ans2="${4:-}"
ans3="${5:-}"
ans4="${6:-}"
ans5="${7:-}"

echo "=========================================="
echo "🔥 主观能动性审计"
echo "=========================================="
echo "被审计Agent: $AGENT_NAME"
echo "任务描述: $TASK_DESC"
echo ""

# 分数初始值
score_pro=0
score_fore=0
score_thor=0
score_exce=0
score_clos=0

REPORT=""

# ===== 审计评分 =====
echo "【主观能动性评估】"
echo ""

# 1. 主动性
if [ "$ans1" = "yes" ]; then
  score_pro=20
  REPORT+="  ✅ 主动发现并修复了问题\n"
elif [ "$ans1" = "partial" ]; then
  score_pro=10
  REPORT+="  ⚠️ 部分问题需提醒才发现\n"
else
  score_pro=0
  REPORT+="  ❌ 等指令才动，未主动发现问题\n"
fi

# 2. 预判性
if [ "$ans2" = "yes" ]; then
  score_fore=20
  REPORT+="  ✅ 主动建立了审核流程和规则\n"
elif [ "$ans2" = "partial" ]; then
  score_fore=10
  REPORT+="  ⚠️ 预判部分步骤\n"
else
  score_fore=0
  REPORT+="  ❌ 只做当前指令，未预判\n"
fi

# 3. 全面性
if [ "$ans3" = "yes" ]; then
  score_thor=20
  REPORT+="  ✅ 系统性检查，覆盖全面\n"
elif [ "$ans3" = "partial" ]; then
  score_thor=10
  REPORT+="  ⚠️ 部分覆盖\n"
else
  score_thor=0
  REPORT+="  ❌ 只改一处，忽略其他\n"
fi

# 4. 超越性
if [ "$ans4" = "yes" ]; then
  score_exce=20
  REPORT+="  ✅ 超越预期，主动建立workflow\n"
elif [ "$ans4" = "partial" ]; then
  score_exce=10
  REPORT+="  ⚠️ 做了一些额外工作\n"
else
  score_exce=0
  REPORT+="  ❌ 只做最低限度\n"
fi

# 5. 闭环性
if [ "$ans5" = "yes" ]; then
  score_clos=20
  REPORT+="  ✅ 主动验证并汇报，闭环意识强\n"
elif [ "$ans5" = "partial" ]; then
  score_clos=10
  REPORT+="  ⚠️ 部分汇报\n"
else
  score_clos=0
  REPORT+="  ❌ 问题上交或无汇报\n"
fi

# ===== 计算总分 =====
total=$((score_pro + score_fore + score_thor + score_exce + score_clos))

echo "=========================================="
echo "📊 主观能动性审计报告"
echo "=========================================="
echo ""
echo -e "$REPORT"
echo ""
echo "维度得分："
echo "  主动性 20分: $score_pro/20"
echo "  预判性 20分: $score_fore/20"
echo "  全面性 20分: $score_thor/20"
echo "  超越性 20分: $score_exce/20"
echo "  闭环性 20分: $score_clos/20"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🔥 总分: $total/100"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# ===== 评级 =====
if [ $total -ge 90 ]; then
  echo "🌟 评级：卓越 - 发挥了120%主观能动性"
  echo "★ ★ ★ ★ ★"
elif [ $total -ge 70 ]; then
  echo "✓ 评级：优秀 - 主动性强"
  echo "★ ★ ★ ★ ☆"
elif [ $total -ge 50 ]; then
  echo "⚠ 评级：合格 - 基本完成任务"
  echo "★ ★ ★ ☆ ☆"
elif [ $total -ge 30 ]; then
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
if [ $score_pro -lt 20 ]; then
  echo "→ 主动性：下次先检查相关配置再开始编码"
fi
if [ $score_fore -lt 20 ]; then
  echo "→ 预判性：思考下一步需要什么，提前准备"
fi
if [ $score_thor -lt 20 ]; then
  echo "→ 全面性：检查相关文件是否需要同步修改"
fi
if [ $score_exce -lt 20 ]; then
  echo "→ 超越性：想一下还能提供什么额外价值"
fi
if [ $score_clos -lt 20 ]; then
  echo "→ 闭环性：完成后主动验证并汇报"
fi

echo ""
echo "=========================================="

# 返回码：90+ = 通过，<90 = 需改进
if [ $total -ge 90 ]; then
  exit 0
else
  exit 1
fi
