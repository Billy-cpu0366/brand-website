export function ProductsHero() {
  return (
    <section className="bg-gradient-to-br from-cyan-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">产品与服务</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          探索我们为乡村振兴、教育数字化和文化传承创新打造的专业解决方案
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="bg-white px-4 py-2 rounded-full text-cyan-600 font-medium">数字教育平台</span>
          <span className="bg-white px-4 py-2 rounded-full text-green-600 font-medium">智慧农业系统</span>
          <span className="bg-white px-4 py-2 rounded-full text-purple-600 font-medium">文化传承工具</span>
          <span className="bg-white px-4 py-2 rounded-full text-pink-600 font-medium">乡村治理方案</span>
        </div>
      </div>
    </section>
  )
}
