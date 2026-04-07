import GEOArticle from '@/components/geo/gEO-article'
import { appDituiGuideData } from '@/lib/content'

export default function AppDituiGuidePage() {
  return <GEOArticle {...appDituiGuideData} breadcrumb={['首页', 'APP获客']} />
}

export function generateMetadata() {
  return {
    title: 'APP地推获客完全指南',
    description: 'APP地推获客的核心在于渠道选择和转化路径优化。线上裂变+线下地推组合使用，ROI比单独投放高40%以上。',
  }
}
