import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

export const metadata: Metadata = {
  title: {
    template: '%s | DiTuiMaster',
    default: 'DiTuiMaster - 地推完全指南',
  },
  description: '从入门到精通的地推实战手册，涵盖活动策划、团队管理、物料准备、场景实战等全方位内容。',
  keywords: ['地推', '地面推广', '线下推广', '活动策划', '团队管理'],
  authors: [{ name: 'DiTuiMaster' }],
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: 'DiTuiMaster',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-background antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
