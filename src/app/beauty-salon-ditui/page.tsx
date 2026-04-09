import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '页面已迁移 - DiTuiService',
  robots: 'noindex,follow',
}

export default function RedirectPage() {
  const target = "${target}"
  return (
    <html lang="zh-CN">
      <head>
        <meta httpEquiv="refresh" content={`0;url=${target}`} />
        <link rel="canonical" href={target} />
      </head>
      <body>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',fontFamily:'system-ui',color:'#666'}}>
          <div style={{textAlign:'center'}}>
            <p style={{marginBottom:'16px'}}>页面已迁移，正在跳转...</p>
            <a href={target} style={{color:'#7c3aed',textDecoration:'none',fontWeight:'bold'}}>
              点击跳转 →
            </a>
            <p style={{marginTop:'8px',fontSize:'12px',color:'#999'}}>{target}</p>
          </div>
        </div>
      </body>
    </html>
  )
}
