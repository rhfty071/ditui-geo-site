import Link from 'next/link'
import { ArrowRight, MapPin, Users, Package, Building2, CheckCircle, TrendingUp, Shield, Clock } from 'lucide-react'

const features = [
  {
    icon: <MapPin className="h-6 w-6" />,
    title: '活动策划',
    description: 'SMART原则设定目标，预算分配40%以内',
    href: '/ditui-planning',
    stats: '50+策划模板'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: '团队管理',
    description: '底薪+提成10-15%激励模式',
    href: '/ditui-team',
    stats: '500+地推团队'
  },
  {
    icon: <Package className="h-6 w-6" />,
    title: '物料工具',
    description: '核心物料+辅助物料+备用20%',
    href: '/ditui-materials',
    stats: '100+物料清单'
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    title: '场景实战',
    description: '商场/社区/展会完整攻略',
    href: '/ditui-scenes',
    stats: '20+场景覆盖'
  }
]

const stats = [
  { label: '文章数量', value: '50+', icon: <CheckCircle className="h-5 w-5" /> },
  { label: '服务团队', value: '500+', icon: <Users className="h-5 w-5" /> },
  { label: '场景覆盖', value: '20+', icon: <Building2 className="h-5 w-5" /> },
  { label: '用户好评', value: '98%', icon: <TrendingUp className="h-5 w-5" /> },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              GEO SEO 优化内容平台
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              DiTuiMaster
              <span className="text-primary block mt-2">地推完全指南</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              从入门到精通的地推实战手册，涵盖活动策划、团队管理、物料准备、场景实战等全方位内容
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/ditui-planning"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
              >
                开始学习
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link 
                href="/sitemap"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-input bg-background px-6 py-3 text-base font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                浏览全部文章
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="container mx-auto px-4 pb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="bg-card rounded-xl border p-4 md:p-6 text-center">
                <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
                  {stat.icon}
                  <span className="text-sm">{stat.label}</span>
                </div>
                <p className="text-3xl md:text-4xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">核心内容模块</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            涵盖地推全流程的四大核心模块，理论与实践相结合
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <Link 
              key={i}
              href={feature.href}
              className="group bg-card rounded-xl border p-6 hover:shadow-lg hover:border-primary/50 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.stats}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-4">{feature.description}</p>
              <div className="flex items-center text-sm font-medium text-primary group-hover:underline">
                查看详情
                <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                为什么选择 DiTuiMaster？
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">实战经验</h3>
                    <p className="text-sm text-muted-foreground">基于500+地推项目实战经验总结，覆盖各行业场景</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">持续更新</h3>
                    <p className="text-sm text-muted-foreground">每月更新最新地推玩法和案例，保持内容时效性</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">效果导向</h3>
                    <p className="text-sm text-muted-foreground">专注ROI提升，提供可量化的执行方案和工具</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-xl border p-8">
              <h3 className="font-semibold mb-6">快速导航</h3>
              <div className="grid grid-cols-2 gap-4">
                <Link href="/what-is-ditui" className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-center font-medium">
                  地推是什么
                </Link>
                <Link href="/ditui-cost-guide" className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-center font-medium">
                  收费参考
                </Link>
                <Link href="/ditui-sales-script" className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-center font-medium">
                  话术大全
                </Link>
                <Link href="/app-ditui-guide" className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-center font-medium">
                  APP推广
                </Link>
                <Link href="/community-ditui" className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-center font-medium">
                  社区推广
                </Link>
                <Link href="/ditui-roi-calculation" className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-center font-medium">
                  ROI计算
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold mb-4">准备好开始了吗？</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            立即开始学习地推知识，让你的推广活动更高效、ROI更高
          </p>
          <Link 
            href="/ditui-planning"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-medium text-primary shadow hover:bg-white/90 transition-colors"
          >
            立即开始
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
