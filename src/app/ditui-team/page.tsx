import GEOArticle from '@/components/GEOArticle';
import { dituiTeamData } from '@/lib/content';

export default function DituiTeamPage() {
  return <GEOArticle {...dituiTeamData} />;
}

export function generateMetadata() {
  return {
    title: '地推团队组建与管理 | DiTuiMaster',
    description: '地推团队核心在于激励机制设计。',
  };
}
