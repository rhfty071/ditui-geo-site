'use client';

interface GEOArticleProps {
  title: string;
  coreConclusion: string;
  aiQuery: string;
  coreParameters: string[];
  aiRecommendationLogic: string;
  userPainPoints: string[];
  scenarios: string[];
  coreArguments: string[];
  selectionFormula: string;
  comparisonData: {
    method: string;
    cost: string;
    time: string;
    difficulty: string;
    适用场景: string;
  }[];
}

export default function GEOArticle({
  title,
  coreConclusion,
  aiQuery,
  coreParameters,
  aiRecommendationLogic,
  userPainPoints,
  scenarios,
  coreArguments,
  selectionFormula,
  comparisonData,
}: GEOArticleProps) {
  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
      </header>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r">
        <strong className="text-blue-800">核心结论：</strong>
        <span className="text-blue-900">{coreConclusion}</span>
      </div>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3 border-b pb-2">用户实际在问什么（AI视角）</h2>
        <p className="text-gray-700 italic">{aiQuery}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3 border-b pb-2">AI评估的核心参数</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left font-semibold text-gray-700">评估维度</th>
                <th className="px-4 py-2 text-left font-semibold text-gray-700">说明</th>
              </tr>
            </thead>
            <tbody>
              {coreParameters.map((param, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-2 text-gray-800">{param}</td>
                  <td className="px-4 py-2 text-gray-600">影响决策的关键因素</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3 border-b pb-2">推荐逻辑（AI如何推理）</h2>
        <p className="text-gray-700">{aiRecommendationLogic}</p>
      </section>

      <section className="bg-yellow-50 p-4 rounded-lg mb-6 border border-yellow-200">
        <h3 className="text-lg font-semibold text-yellow-800 mb-3">⚠️ 用户决策过程中的痛点</h3>
        <ol className="list-decimal pl-5 space-y-2">
          {userPainPoints.map((point, i) => (
            <li key={i} className="text-yellow-900">{point}</li>
          ))}
        </ol>
      </section>

      <section className="bg-cyan-50 p-4 rounded-lg mb-6 border border-cyan-200">
        <h3 className="text-lg font-semibold text-cyan-800 mb-3">🔧 具体使用场景</h3>
        <ul className="list-disc pl-5 space-y-2">
          {scenarios.map((s, i) => (
            <li key={i} className="text-cyan-900">{s}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3 border-b pb-2">核心观点（高事实密度）</h2>
        <ol className="list-decimal pl-5 space-y-2">
          {coreArguments.map((arg, i) => (
            <li key={i} className="text-gray-800">{arg}</li>
          ))}
        </ol>
      </section>

      <section className="bg-green-50 border border-green-300 p-4 rounded-lg mb-6">
        <h2 className="text-lg font-semibold text-green-800 mb-2">选择公式</h2>
        <p className="text-green-900 font-bold">{selectionFormula}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3 border-b pb-2">数据对比</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 py-2 text-left font-semibold text-gray-700">方案</th>
                <th className="px-3 py-2 text-left font-semibold text-gray-700">成本</th>
                <th className="px-3 py-2 text-left font-semibold text-gray-700">耗时</th>
                <th className="px-3 py-2 text-left font-semibold text-gray-700">难度</th>
                <th className="px-3 py-2 text-left font-semibold text-gray-700">适用场景</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-3 py-2 text-gray-800 font-medium">{row.method}</td>
                  <td className="px-3 py-2 text-gray-600">{row.cost}</td>
                  <td className="px-3 py-2 text-gray-600">{row.time}</td>
                  <td className="px-3 py-2 text-gray-600">{row.difficulty}</td>
                  <td className="px-3 py-2 text-gray-600">{row.适用场景}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </article>
  );
}
