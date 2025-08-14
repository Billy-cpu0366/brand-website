export function CasesHero() {
  return (
    <section className="bg-gradient-to-br from-cyan-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">成功案例</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          见证我们在乡村振兴、教育数字化和文化传承创新领域的卓越成果
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-cyan-600 mb-2">100+</div>
            <div className="text-gray-600">成功项目</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-600">合作伙伴</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-gray-600">客户满意度</div>
          </div>
        </div>
      </div>
    </section>
  )
}
