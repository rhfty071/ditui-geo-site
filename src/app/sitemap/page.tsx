import Link from 'next/link'
import { MapPin, Users, Package, Building2, TrendingUp, Target, Clock, Shield, BookOpen, Award, Zap, Star, CheckCircle } from 'lucide-react'

const industryPages = [
  { href: '/bank-ditui', title: '银行地推', desc: '金融机构地推获客攻略' },
  { href: '/beauty-salon-ditui', title: '美容院地推', desc: '美容行业地推实战' },
  { href: '/campus-ditui', title: '校园地推', desc: '高校场景地推指南' },
  { href: '/community-ditui', title: '社区地推', desc: '社区推广获客方法' },
  { href: '/education-ditui', title: '教育地推', desc: '教育机构地推方案' },
  { href: '/exhibition-ditui', title: '展会地推', desc: '展会现场地推技巧' },
  { href: '/food-delivery-ditui', title: '外卖地推', desc: '餐饮外卖推广攻略' },
  { href: '/furniture-ditui', title: '家具地推', desc: '家具卖场地推方法' },
  { href: '/gym-ditui', title: '健身房地推', desc: '健身行业推广指南' },
  { href: '/insurance-ditui', title: '保险地推', desc: '保险行业地推获客' },
  { href: '/low-budget-ditui', title: '低预算地推', desc: '小成本地推方案' },
  { href: '/new-store-ditui', title: '新店地推', desc: '新店开业推广攻略' },
  { href: '/night-market-ditui', title: '夜市地推', desc: '夜市摆摊地推技巧' },
  { href: '/real-estate-ditui', title: '房地产地推', desc: '房产行业地推方案' },
  { href: '/restaurant-ditui', title: '餐饮地推', desc: '餐厅酒楼推广攻略' },
  { href: '/shopping-mall-ditui', title: '商场地推', desc: '购物中心地推方法' },
  { href: '/what-is-ditui', title: '什么是地推', desc: '地推基础概念入门' },
]

const topicPages = [
  { href: '/ditui-banner-design', title: '地推横幅设计', desc: '吸引眼球的物料设计' },
  { href: '/ditui-case-study', title: '地推案例库', desc: '实战案例分析' },
  { href: '/ditui-competitor-analysis', title: '竞品分析', desc: '竞争对手研究方法' },
  { href: '/ditui-compliance', title: '地推合规', desc: '合法合规推广指南' },
  { href: '/ditui-contract-template', title: '合同模板', desc: '地推合作协议范本' },
  { href: '/ditui-conversion-optimization', title: '转化优化', desc: '提升地推转化率' },
  { href: '/ditui-copywriting', title: '地推文案', desc: '高效推广话术模板' },
  { href: '/ditui-cost-guide', title: '地推收费', desc: '地推服务定价参考' },
  { href: '/ditui-daily-report', title: '日报模板', desc: '地推日报填写指南' },
  { href: '/ditui-data-analysis', title: '数据分析', desc: '地推数据监控分析' },
  { href: '/ditui-fraud-prevention', title: '防骗指南', desc: '地推风险防范' },
  { href: '/ditui-gift-ideas', title: '礼品推荐', desc: '地推赠品选择攻略' },
  { href: '/ditui-kpi-design', title: 'KPI设计', desc: '地推绩效考核方案' },
  { href: '/ditui-location-selection', title: '选址技巧', desc: '地推最佳地点选择' },
  { href: '/ditui-materials', title: '物料清单', desc: '地推核心物料清单' },
  { href: '/ditui-materials-checklist', title: '物料检查', desc: '出发前检查清单' },
  { href: '/ditui-part-time-management', title: '兼职管理', desc: '地推兼职团队管理' },
  { href: '/ditui-partner-recruitment', title: '招募合作', desc: '合伙人招募技巧' },
  { href: '/ditui-planning', title: '活动策划', desc: '地推活动策划方案' },
  { href: '/ditui-preparation-checklist', title: '准备清单', desc: '地推前准备工作' },
  { href: '/ditui-problem-solving', title: '问题解决', desc: '地推常见问题处理' },
  { href: '/ditui-qrcode-design', title: '二维码设计', desc: '地推二维码制作' },
  { href: '/ditui-rainy-day', title: '雨天策略', desc: '恶劣天气地推应对' },
  { href: '/ditui-roi-calculation', title: 'ROI计算', desc: '地推投资回报计算' },
  { href: '/ditui-sales-script', title: '话术大全', desc: '地推经典话术模板' },
  { href: '/ditui-scenes', title: '场景大全', desc: '各场景地推攻略' },
  { href: '/ditui-team', title: '团队管理', desc: '地推团队组建管理' },
  { href: '/ditui-team-building', title: '团队建设', desc: '地推团队培训' },
  { href: '/ditui-timing-optimization', title: '时机优化', desc: '最佳地推时间选择' },
  { href: '/ditui-venue-negotiation', title: '场地洽谈', desc: '地推场地谈判技巧' },
  { href: '/ditui-vs-online-marketing', title: '对比线上', desc: '地推vs线上推广' },
  { href: '/ditui-wechat-operations', title: '微信运营', desc: '地推后微信维护' },
  { href: '/app-ditui-guide', title: 'APP推广', desc: 'APP地推专项攻略' },
]

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            DiTuiMaster
          </Link>
          <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
            ← 返回首页
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-[#0a0a0f] to-[#0a0a0f]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/20 rounded-full blur-[120px] -translate-y-1/2" />
        
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              网站地图
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            共收录 {industryPages.length + topicPages.length} 篇地推专业内容，涵盖 17 个行业场景 + {topicPages.length} 个专题
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm">
              全部内容免费阅读
            </span>
          </div>
        </div>
      </section>

      {/* Industry Pages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Building2 className="h-6 w-6 text-purple-400" />
            <h2 className="text-2xl font-bold">行业场景</h2>
            <span className="text-gray-400 text-sm">({industryPages.length}个)</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {industryPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all"
              >
                <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors mb-1">
                  {page.title}
                </h3>
                <p className="text-sm text-gray-400">{page.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Topic Pages */}
      <section className="py-16 bg-gradient-to-b from-[#0a0a0f] via-purple-900/10 to-[#0a0a0f]">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-6 w-6 text-purple-400" />
            <h2 className="text-2xl font-bold">专业专题</h2>
            <span className="text-gray-400 text-sm">({topicPages.length}个)</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {topicPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all"
              >
                <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors mb-1">
                  {page.title}
                </h3>
                <p className="text-sm text-gray-400">{page.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm mb-8">
            <Star className="h-4 w-4" />
            持续更新中
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">找不到你想看的内容？</h2>
          <p className="text-gray-400 mb-8">告诉我们你需要的地推知识，下一个专题可能就是你想要的</p>
          <Link
            href="/ditui-planning"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-base font-medium text-white hover:opacity-90 transition-opacity"
          >
            开始学习
            <TrendingUp className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>DiTuiMaster - 专业地推知识平台</p>
          <p className="mt-2">基于500+地推项目实战经验总结</p>
        </div>
      </footer>
    </div>
  )
}
