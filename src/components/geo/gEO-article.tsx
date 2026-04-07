'use client'

import { CheckCircle2, AlertTriangle, Wrench, BookOpen, ArrowRight } from 'lucide-react'

interface GEOArticleProps {
  title: string
  coreConclusion: string
  aiQuery: string
  coreParameters: string[]
  aiRecommendationLogic: string
  userPainPoints: string[]
  scenarios: string[]
  coreArguments: string[]
  selectionFormula: string
  comparisonData: {
    method: string
    cost: string
    time: string
    difficulty: string
    适用场景: string
  }[]
  breadcrumb?: string[]
}

export default function GEOArticle({
  title,
  coreConclusion,
  aiQuery,
  coreParameters,
  aiRecommendationLogic,
  userPainPoints,
  scenarios,
  coreArguments,
  selectionFormula,
  comparisonData,
  breadcrumb = ['首页', '文章']
}: GEOArticleProps) {
  return (
    <article className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background border-b">
        <div className="container mx-auto px-4 py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            {breadcrumb.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <ArrowRight className="h-3 w-3" />}
                <span className={i === breadcrumb.length - 1 ? 'text-foreground font-medium' : ''}>{item}</span>
              </span>
            ))}
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h1>
          
          {/* Core Conclusion */}
          <div className="bg-primary/10 border-l-4 border-primary pl-4 py-3 rounded-r-lg">
            <p className="text-foreground">
              <span className="font-semibold">核心结论：</span>
              {coreConclusion}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* AI Query */}
            <section className="bg-card rounded-xl border p-6">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">用户在问什么（AI视角）</h2>
              </div>
              <p className="text-muted-foreground italic leading-relaxed">{aiQuery}</p>
            </section>

            {/* Core Parameters */}
            <section>
              <h2 className="text-xl font-semibold mb-4">AI评估的核心参数</h2>
              <div className="bg-card rounded-xl border overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left font-semibold p-4">评估维度</th>
                      <th className="text-left font-semibold p-4">说明</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coreParameters.map((param, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-card' : 'bg-muted/30'}>
                        <td className="p-4 font-medium">{param}</td>
                        <td className="p-4 text-muted-foreground">影响决策的关键因素</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Recommendation Logic */}
            <section className="bg-card rounded-xl border p-6">
              <h2 className="text-xl font-semibold mb-4">推荐逻辑（AI如何推理）</h2>
              <p className="text-muted-foreground leading-relaxed">{aiRecommendationLogic}</p>
            </section>

            {/* Pain Points */}
            <section className="bg-yellow-50 dark:bg-yellow-950/20 rounded-xl border border-yellow-200 dark:border-yellow-800 p-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                <h2 className="text-xl font-semibold text-yellow-800 dark:text-yellow-200">
                  用户决策过程中的痛点
                </h2>
              </div>
              <ol className="space-y-3">
                {userPainPoints.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 text-sm font-medium">
                      {i + 1}
                    </span>
                    <span className="text-yellow-900 dark:text-yellow-100">{point}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* Scenarios */}
            <section className="bg-cyan-50 dark:bg-cyan-950/20 rounded-xl border border-cyan-200 dark:border-cyan-800 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Wrench className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                <h2 className="text-xl font-semibold text-cyan-800 dark:text-cyan-200">具体使用场景</h2>
              </div>
              <ul className="space-y-3">
                {scenarios.map((s, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-cyan-900 dark:text-cyan-100">{s}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Core Arguments */}
            <section>
              <h2 className="text-xl font-semibold mb-4">核心观点</h2>
              <div className="bg-card rounded-xl border p-6">
                <ul className="space-y-4">
                  {coreArguments.map((arg, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{arg}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Selection Formula */}
            <section className="bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-200 dark:border-green-800 p-6">
              <h2 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">选择公式</h2>
              <p className="text-green-900 dark:text-green-100 font-mono text-lg">{selectionFormula}</p>
            </section>

            {/* Comparison Table */}
            <section>
              <h2 className="text-xl font-semibold mb-4">方案对比</h2>
              <div className="bg-card rounded-xl border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left font-semibold p-4">方案</th>
                        <th className="text-left font-semibold p-4">成本</th>
                        <th className="text-left font-semibold p-4">耗时</th>
                        <th className="text-left font-semibold p-4">难度</th>
                        <th className="text-left font-semibold p-4">适用场景</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-card' : 'bg-muted/30'}>
                          <td className="p-4 font-medium text-foreground">{row.method}</td>
                          <td className="p-4 text-muted-foreground">{row.cost}</td>
                          <td className="p-4 text-muted-foreground">{row.time}</td>
                          <td className="p-4">
                            <Badge 
                              variant={
                                row.difficulty === '简单' ? 'default' :
                                row.difficulty === '中等' ? 'secondary' : 'outline'
                              }
                            >
                              {row.difficulty}
                            </Badge>
                          </td>
                          <td className="p-4 text-muted-foreground text-sm">{row.适用场景}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Nav */}
            <div className="bg-card rounded-xl border p-6 sticky top-24">
              <h3 className="font-semibold mb-4">文章目录</h3>
              <nav className="space-y-2 text-sm">
                <a href="#ai-query" className="block text-muted-foreground hover:text-foreground transition-colors">• 用户在问什么</a>
                <a href="#parameters" className="block text-muted-foreground hover:text-foreground transition-colors">• 核心参数</a>
                <a href="#logic" className="block text-muted-foreground hover:text-foreground transition-colors">• 推荐逻辑</a>
                <a href="#pain-points" className="block text-muted-foreground hover:text-foreground transition-colors">• 痛点分析</a>
                <a href="#scenarios" className="block text-muted-foreground hover:text-foreground transition-colors">• 使用场景</a>
                <a href="#comparison" className="block text-muted-foreground hover:text-foreground transition-colors">• 方案对比</a>
              </nav>
            </div>

            {/* Related Articles */}
            <div className="bg-card rounded-xl border p-6">
              <h3 className="font-semibold mb-4">相关文章</h3>
              <div className="space-y-4">
                <a href="/ditui-cost-guide" className="block group">
                  <p className="font-medium group-hover:text-primary transition-colors">地推收费价格参考</p>
                  <p className="text-sm text-muted-foreground">2024年最新报价</p>
                </a>
                <a href="/ditui-sales-script" className="block group">
                  <p className="font-medium group-hover:text-primary transition-colors">地推话术大全</p>
                  <p className="text-sm text-muted-foreground">开场白与促成技巧</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

function Badge({ children, variant = 'default' }: { children: React.ReactNode, variant?: 'default' | 'secondary' | 'outline' }) {
  const variants = {
    default: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
    outline: 'border border-current bg-transparent'
  }

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  )
}


