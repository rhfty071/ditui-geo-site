import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto py-12 px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">📍 DiTuiMaster</h1>
          <p className="text-xl text-gray-600">地推完全指南 — 从入门到精通的地面推广实战手册</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-8 px-4">
        <nav className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link 
            href="/ditui-planning"
            className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">📋 地推活动策划</h2>
            <p className="text-gray-600">SMART原则设定目标，预算分配40%以内</p>
          </Link>

          <Link 
            href="/ditui-team"
            className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">👥 团队组建管理</h2>
            <p className="text-gray-600">底薪+提成10-15%激励模式</p>
          </Link>

          <Link 
            href="/ditui-materials"
            className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">📦 物料清单工具</h2>
            <p className="text-gray-600">核心物料+辅助物料+备用20%</p>
          </Link>

          <Link 
            href="/ditui-scenes"
            className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">🏢 场景实战指南</h2>
            <p className="text-gray-600">商场/社区/展会完整攻略</p>
          </Link>
        </nav>

        <section className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">📚 长尾文章（建设中）</h2>
          <p className="text-gray-500">50个地推实战场景页面持续更新中...</p>
        </section>
      </main>

      <footer className="max-w-4xl mx-auto py-8 px-4 text-center text-gray-500 text-sm">
        <p>GEO SEO Friendly | Built with Next.js | DiTuiMaster</p>
      </footer>
    </div>
  );
}

export function generateMetadata() {
  return {
    title: 'DiTuiMaster - 地推完全指南',
    description: '从入门到精通的地推实战手册，涵盖活动策划、团队管理、物料准备、场景实战等全方位内容。',
  };
}
