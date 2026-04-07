import GEOArticle from '@/components/geo/gEO-article'
import { dituiTeamData } from '@/lib/content'

export default function DituiTeamPage() {
  return <GEOArticle {...dituiTeamData} breadcrumb={['首页', '团队管理']} />
}

export function generateMetadata() {
  return {
    title: '地推团队组建与管理',
    description: '地推团队核心在于激励机制设计。',
  }
}
