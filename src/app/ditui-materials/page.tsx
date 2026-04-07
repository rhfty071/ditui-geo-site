import GEOArticle from '@/components/geo/gEO-article'
import { dituiMaterialsData } from '@/lib/content'

export default function DituiMaterialsPage() {
  return <GEOArticle {...dituiMaterialsData} breadcrumb={['首页', '物料工具']} />
}

export function generateMetadata() {
  return {
    title: '地推物料清单与工具',
    description: '地推物料分为核心物料和辅助物料。',
  }
}
