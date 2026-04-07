import Link from 'next/link'
import { MapPin, Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <MapPin className="h-5 w-5" />
          </div>
          <span className="text-xl font-semibold">DiTuiMaster</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            首页
          </Link>
          <Link href="/ditui-planning" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            活动策划
          </Link>
          <Link href="/ditui-team" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            团队管理
          </Link>
          <Link href="/ditui-materials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            物料工具
          </Link>
          <Link href="/ditui-scenes" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            场景实战
          </Link>
        </nav>

        <button className="md:hidden p-2 hover:bg-accent rounded-md transition-colors">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
