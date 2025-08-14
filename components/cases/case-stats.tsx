import { TrendingUp, Users, Award, Globe } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: "300%",
    label: "平均效率提升",
    description: "通过数字化改造，合作伙伴平均工作效率提升300%",
  },
  {
    icon: Users,
    value: "10万+",
    label: "受益人群",
    description: "项目直接受益人群超过10万人次",
  },
  {
    icon: Award,
    value: "15项",
    label: "获得奖项",
    description: "项目获得国家级、省级奖项15项",
  },
  {
    icon: Globe,
    value: "20+",
    label: "覆盖地区",
    description: "服务覆盖全国20多个省市地区",
  },
]

export function CaseStats() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">项目成果</h2>
          <p className="text-gray-600">用数据说话，见证我们的专业实力</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 text-cyan-600 rounded-full mb-4">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-lg font-medium text-gray-900 mb-2">{stat.label}</div>
              <p className="text-sm text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
