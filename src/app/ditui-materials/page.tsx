import GEOArticle from '@/components/GEOArticle';
import { dituiMaterialsData } from '@/lib/content';

export default function DituiMaterialsPage() {
  return <GEOArticle {...dituiMaterialsData} />;
}

export function generateMetadata() {
  return {
    title: '地推物料清单与工具 | DiTuiMaster',
    description: '地推物料分为核心物料和辅助物料。',
  };
}
