import GEOArticle from '@/components/geo/gEO-article'
import { dituiCostGuideData } from '@/lib/content'

export default function DituiCostGuidePage() {
  return <GEOArticle {...dituiCostGuideData} breadcrumb={['首页', '收费指南']} />
}

export function generateMetadata() {
  return {
    title: '地推收费价格完全指南',
    description: '地推收费按效果付费已成为主流模式。CPA价格5-30元，CPS提点5-20%，具体取决于行业和产品阶段。',
  }
}
