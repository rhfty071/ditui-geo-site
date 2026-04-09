import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | DiTuiService',
    default: 'DiTuiService - 专业地推服务',
  },
  description: '专注地推服务10年，为餐饮、教育、美容、零售、银行等各行业商户提供专业地推解决方案。已服务500+商户，地推转化率提升3倍。',
  keywords: ['地推服务', '商户地推', '地推公司', '地推团队', '餐饮地推', '教育地推', '地推服务商'],
  authors: [{ name: 'DiTuiService' }],
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: 'DiTuiService',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className="dark">
      <body className="min-h-screen bg-[#0a0a0f] text-white antialiased">
        {children}
      </body>
    </html>
  )
}
