import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <span className="text-sm font-bold">DT</span>
              </div>
              <span className="text-lg font-semibold">DiTuiMaster</span>
            </div>
            <p className="text-sm text-muted-foreground">
              专业地推知识平台，涵盖活动策划、团队管理、物料工具、场景实战等全方位内容。
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">核心内容</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/ditui-planning" className="hover:text-foreground transition-colors">地推活动策划</Link></li>
              <li><Link href="/ditui-team" className="hover:text-foreground transition-colors">团队组建管理</Link></li>
              <li><Link href="/ditui-materials" className="hover:text-foreground transition-colors">物料清单工具</Link></li>
              <li><Link href="/ditui-scenes" className="hover:text-foreground transition-colors">场景实战指南</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">长尾内容</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/ditui-cost-guide" className="hover:text-foreground transition-colors">收费价格参考</Link></li>
              <li><Link href="/ditui-sales-script" className="hover:text-foreground transition-colors">话术大全</Link></li>
              <li><Link href="/app-ditui-guide" className="hover:text-foreground transition-colors">APP地推指南</Link></li>
              <li><Link href="/ditui-roi-calculation" className="hover:text-foreground transition-colors">ROI计算</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">关于</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground transition-colors">关于我们</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors">联系我们</Link></li>
              <li><Link href="/privacy" className="hover:text-foreground transition-colors">隐私政策</Link></li>
              <li><Link href="/terms" className="hover:text-foreground transition-colors">使用条款</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 DiTuiMaster. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js | GEO SEO Optimized
          </p>
        </div>
      </div>
    </footer>
  )
}
