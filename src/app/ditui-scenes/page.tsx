import GEOArticle from '@/components/GEOArticle';
import { dituiScenesData } from '@/lib/content';

export default function DituiScenesPage() {
  return <GEOArticle {...dituiScenesData} />;
}

export function generateMetadata() {
  return {
    title: '地推场景实战指南 | DiTuiMaster',
    description: '不同场地有不同规则和技巧。',
  };
}
