import GEOArticle from '@/components/geo/gEO-article'
import { dituiScenesData } from '@/lib/content'

export default function DituiScenesPage() {
  return <GEOArticle {...dituiScenesData} breadcrumb={['首页', '场景实战']} />
}

export function generateMetadata() {
  return {
    title: '地推场景实战指南',
    description: '不同场地有不同规则和技巧。',
  }
}
