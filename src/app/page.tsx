import Link from 'next/link'
import { ArrowRight, MapPin, Users, Package, Building2, CheckCircle, TrendingUp, Shield, Clock, Star, Zap, Target, BookOpen, Award, Rocket } from 'lucide-react'

const features = [
  {
    icon: <MapPin className="h-8 w-8" />,
    title: '活动策划',
    description: 'SMART原则设定目标，预算分配40%以内',
    href: '/ditui-planning',
    stats: '50+策划模板',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: '团队管理',
    description: '底薪+提成10-15%激励模式',
    href: '/ditui-team',
    stats: '500+地推团队',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: <Package className="h-8 w-8" />,
    title: '物料工具',
    description: '核心物料+辅助物料+备用20%',
    href: '/ditui-materials',
    stats: '100+物料清单',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: <Building2 className="h-8 w-8" />,
    title: '场景实战',
    description: '商场/社区/展会完整攻略',
    href: '/ditui-scenes',
    stats: '20+场景覆盖',
    color: 'from-green-500 to-emerald-500'
  }
]

const stats = [
  { label: '文章数量', value: '50+', icon: <BookOpen className="h-5 w-5" /> },
  { label: '服务团队', value: '500+', icon: <Users className="h-5 w-5" /> },
  { label: '场景覆盖', value: '20+', icon: <Building2 className="h-5 w-5" /> },
  { label: '用户好评', value: '98%', icon: <Star className="h-5 w-5" /> },
]

const whyChoose = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: '实战经验',
    description: '基于500+地推项目实战经验总结，覆盖各行业场景'
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: '持续更新',
    description: '每月更新最新地推玩法和案例，保持内容时效性'
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: '效果导向',
    description: '专注ROI提升，提供可量化的执行方案和工具'
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: '方法论',
    description: '经过验证的地推方法论，可复制可落地'
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: '高效执行',
    description: '提供标准化流程和模板，拿来即用'
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: '专业认证',
    description: '地推行业认证培训体系，团队能力提升'
  }
]

const testimonials = [
  {
    quote: '使用DiTuiMaster的方法后，我们的地推转化率提升了3倍！',
    name: '张明',
    role: '某连锁餐饮品牌市场总监',
    avatar: 'ZM'
  },
  {
    quote: '从0开始做地推，完全不知道从哪下手。DiTuiMaster让我一周内就搭建起完整的地推体系。',
    name: '李华',
    role: '互联网创业公司CEO',
    avatar: 'LH'
  },
  {
    quote: '物料清单和话术模板非常实用，团队执行效率提升明显。',
    name: '王芳',
    role: '教育培训机构负责人',
    avatar: 'WF'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-[#0a0a0f] to-[#0a0a0f]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] -translate-y-1/2" />

        <div className="relative container mx-auto px-4 pt-20 pb-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 text-sm text-purple-400 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              GEO SEO 优化内容平台
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                DiTuiMaster
              </span>
              <br />
              <span className="text-3xl md:text-5xl text-gray-300">地推完全指南</span>
            </h1>

            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              从入门到精通的地推实战手册，涵盖活动策划、团队管理、物料准备、场景实战等全方位内容
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ditui-planning"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-base font-medium text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all"
              >
                开始学习
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/sitemap"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-700 bg-white/5 hover:bg-white/10 px-8 py-4 text-base font-medium text-white transition-all"
              >
                浏览全部{industryPages.length + topicPages.length}篇 →
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-20 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm">
                <div className="flex items-center justify-center gap-2 text-gray-400 mb-2">
                  {stat.icon}
                  <span className="text-sm">{stat.label}</span>
                </div>
                <p className="text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">核心内容模块</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              涵盖地推全流程的四大核心模块，理论与实践相结合
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <Link
                key={i}
                href={feature.href}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                {/* Gradient border effect on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity`} />

                <div className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-r ${feature.color} p-3 mb-4`}>
                  {feature.icon}
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>

                <p className="text-gray-400 text-sm mb-4">{feature.description}</p>

                <div className="text-sm font-medium text-purple-400">{feature.stats}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#0a0a0f] via-purple-900/10 to-[#0a0a0f]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                为什么选择 <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">DiTuiMaster</span>？
              </h2>
              <p className="text-gray-400 mb-8">
                专业的地推知识平台，基于500+项目实战经验总结，提供可落地的地推解决方案
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyChoose.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Nav Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { href: '/what-is-ditui', title: '地推是什么' },
                { href: '/ditui-cost-guide', title: '收费参考' },
                { href: '/ditui-sales-script', title: '话术大全' },
                { href: '/app-ditui-guide', title: 'APP推广' },
                { href: '/community-ditui', title: '社区推广' },
                { href: '/ditui-roi-calculation', title: 'ROI计算' },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 hover:border-purple-500/30 transition-all"
                >
                  <span className="font-medium">{link.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">用户评价</h2>
            <p className="text-gray-400">来自地推从业者的真实反馈</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-sm font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-medium">{t.name}</p>
                    <p className="text-sm text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-black/20 rounded-full translate-x-1/3 translate-y-1/3" />

            <div className="relative">
              <Rocket className="h-12 w-12 mx-auto mb-6 text-white/80" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">准备好开始了吗？</h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                立即开始学习地推知识，让你的推广活动更高效、ROI更高
              </p>
              <Link
                href="/ditui-planning"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-purple-600 px-8 py-4 text-base font-medium hover:bg-gray-100 transition-colors"
              >
                立即开始
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
