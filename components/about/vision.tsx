import { Target, Eye, Heart } from "lucide-react"

const visionItems = [
  {
    icon: Target,
    title: "使命",
    content: "通过数字技术赋能乡村振兴，推动教育现代化，传承和创新优秀传统文化，为构建美丽乡村贡献力量。",
  },
  {
    icon: Eye,
    title: "愿景",
    content: "成为乡村振兴领域的数字化创新引领者，让每一个乡村都能享受到现代科技带来的发展机遇。",
  },
  {
    icon: Heart,
    title: "价值观",
    content: "创新驱动、文化传承、合作共赢、可持续发展，始终坚持以人为本的发展理念。",
  },
]

export function Vision() {
  return (
    <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">企业愿景</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            以创新为驱动，以文化为根基，以技术为手段，共创美好未来
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visionItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 text-cyan-600 rounded-full mb-6">
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-600 mb-2">100+</div>
              <div className="text-gray-600">服务项目</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-500 mb-2">50+</div>
              <div className="text-gray-600">合作伙伴</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-500 mb-2">20+</div>
              <div className="text-gray-600">覆盖地区</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-500 mb-2">95%</div>
              <div className="text-gray-600">客户满意度</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
