# GEO 项目 CI/CD + 审核工作流

## 🚨 核心规则：未经审核，不得回奏皇上

每次完成构建/修改后，必须执行以下流程：

```
构建 ──→ 审核(必须通过) ──→ 部署 ──→ 报告皇上
```

## 快速审核命令

```bash
# 一键审核（自动检查所有项目）
bash ~/clawd/geo-project/geo_audit_task.sh https://ditui-merchant-v2.vercel.app
```

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
