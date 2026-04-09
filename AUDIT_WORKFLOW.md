# GEO 项目 CI/CD + 审核工作流

## 🚨 核心规则：未经审核，不得回奏皇上

每次完成构建/修改后，必须执行以下流程：

```
构建 ──→ 审核(必须通过) ──→ 部署 ──→ 报告皇上
```

## 双层审核体系

### 第一层：质量审计（产出导向）
检查：构建、git提交、页面完整性、品牌一致性

```bash
bash geo_audit_task.sh https://ditui-merchant-v2.vercel.app
```

### 第二层：主观能动性审计（态度导向）
检查：主动性、预判性、全面性、超越性、闭环性

```bash
bash spirit_audit.sh "<Agent名字>" "<任务描述>"
# 交互式问询，5道题自动评分，满分100，90+通过
```

### 完整审计流程

```
子Agent完成任务
    ↓
第一层：质量审计（自动）
    ↓ 通过？──否──→ 修复后重审
    ↓ 是
第二层：主观能动性审计（太子评估）
    ↓ 通过？──否──→ 反馈子Agent改进
    ↓ 是
向皇上回奏
```

## 主观能动性评分标准（5维度×20分=100分）

| 维度 | 20分（卓越） | 10分（部分） | 0分（不足） |
|------|-------------|-------------|------------|
| 主动性 | 主动发现并修复问题 | 部分问题需提醒 | 等指令才动 |
| 预判性 | 提前建立规则/流程 | 预判部分步骤 | 只做当前指令 |
| 全面性 | 系统性检查所有相关文件 | 部分覆盖 | 只改一处 |
| 超越性 | 提供额外价值（规则、CI） | 做了一些额外 | 只做最低限度 |
| 闭环性 | 主动验证+汇报 | 部分汇报 | 问题上交 |

**评级：90+ = 🌟卓越 | 70-89 = ✓优秀 | 50-69 = ⚠合格 | <50 = ❌不合格**

## 审核检查清单 (6项)

| # | 检查项 | 通过标准 |
|---|--------|----------|
| 1 | 本地构建 | .next 目录存在，无 TS/编译错误 |
| 2 | git 提交 | 无未提交的修改（新增文件除外） |
| 3 | 关键页面 | page.tsx/services/cases/contact/about/sitemap 齐全 |
| 4 | layout.tsx | 不引用 Header/Footer 组件（避免双倍渲染） |
| 5 | 站点可访问 | 首页 + /services + /cases + /contact + /sitemap 均返回 200 |
| 6 | 品牌一致性 | 不含 DiTuiMaster（旧），只含 DiTuiService |

## 审核失败处理

- **立即停止部署流程**
- 修复问题后重新审核
- 不得跳过审核环节
- 向太子(taizi)汇报问题

## 自动化

可在构建脚本末尾加上：

```bash
# 每次 npm run build && npx vercel --prod 后
bash ~/clawd/geo-project/geo_audit_task.sh https://ditui-merchant-v2.vercel.app || {
  echo "❌ 审核失败，终止部署"
  exit 1
}
```

## Vercel 部署后额外检查

部署完成后，再次 curl 验证：
- https://ditui-merchant-v2.vercel.app/ (首页)
- https://ditui-merchant-v2.vercel.app/sitemap (sitemap)
- https://ditui-merchant-v2.vercel.app/services (服务页)
- https://ditui-merchant-v2.vercel.app/cases (案例页)

所有页面返回 200 且 HTML 中不包含 DiTuiMaster 方为合格。
