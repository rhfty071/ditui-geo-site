import GEOArticle from '@/components/geo/gEO-article'
import { dituiPlanningData } from '@/lib/content'

export default function DituiPlanningPage() {
  return <GEOArticle {...dituiPlanningData} breadcrumb={['首页', '活动策划']} />
}

export function generateMetadata() {
  return {
    title: '地推活动策划完全手册',
    description: '地推成功的关键在于充分的前期准备和清晰的目标分解。',
  }
}
