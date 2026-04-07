import GEOArticle from '@/components/GEOArticle';
import { dituiPlanningData } from '@/lib/content';

export default function DituiPlanningPage() {
  return <GEOArticle {...dituiPlanningData} />;
}

export function generateMetadata() {
  return {
    title: '地推活动策划完全手册 | DiTuiMaster',
    description: '地推成功的关键在于充分的前期准备和清晰的目标分解。',
  };
}
