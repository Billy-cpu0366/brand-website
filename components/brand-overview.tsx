import { Lightbulb, Users, Zap, Target } from "lucide-react"

const features = [
  {
    icon: Lightbulb,
    title: "政策引领",
    description: "紧跟国家乡村振兴战略，以政策为导向推动发展",
  },
  {
    icon: Zap,
    title: "技术赋能",
    description: "运用先进数字技术，为传统产业注入新活力",
  },
  {
    icon: Users,
    title: "文化融合",
    description: "传承优秀传统文化，与现代科技完美结合",
  },
  {
    icon: Target,
    title: "创新发展",
    description: "持续创新教育模式，培养新时代人才",
  },
]

export function BrandOverview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">核心理念</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">政策引领 + 技术赋能 + 文化融合的创新发展框架</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 text-cyan-600 rounded-full mb-6">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
