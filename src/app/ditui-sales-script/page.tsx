import GEOArticle from '@/components/geo/gEO-article'
import { dituiSalesScriptData } from '@/lib/content'

export default function DituiSalesScriptPage() {
  return <GEOArticle {...dituiSalesScriptData} breadcrumb={['首页', '话术大全']} />
}

export function generateMetadata() {
  return {
    title: '地推话术实战大全',
    description: '地推话术核心是三步法则：引起注意→激发兴趣→行动转化。话术要根据目标人群场景实时调整。',
  }
}
