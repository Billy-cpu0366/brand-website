import { Shield, Cpu, Palette } from "lucide-react"

const frameworks = [
  {
    icon: Shield,
    title: "政策引领",
    subtitle: "Policy Leadership",
    description: "深入贯彻乡村振兴战略，紧跟教育数字化政策导向",
    features: [
      "国家乡村振兴战略解读与实施",
      "教育数字化转型政策研究",
      "文化传承保护政策支撑",
      "产业政策与发展规划对接",
    ],
    color: "bg-blue-50 text-blue-600",
    iconBg: "bg-blue-100",
  },
  {
    icon: Cpu,
    title: "技术赋能",
    subtitle: "Technology Empowerment",
    description: "运用前沿数字技术，为传统产业和教育注入新动能",
    features: ["人工智能与大数据应用", "物联网与智慧农业技术", "在线教育平台开发", "数字化内容创作工具"],
    color: "bg-green-50 text-green-600",
    iconBg: "bg-green-100",
  },
  {
    icon: Palette,
    title: "文化融合",
    subtitle: "Cultural Integration",
    description: "传承优秀传统文化，与现代科技深度融合创新",
    features: ["传统文化数字化保护", "文化创意产品开发", "非遗技艺传承创新", "文化教育内容制作"],
    color: "bg-purple-50 text-purple-600",
    iconBg: "bg-purple-100",
  },
]

export function CoreFramework() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">核心框架</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            政策引领 + 技术赋能 + 文化融合的三重维度理论支撑体系
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {frameworks.map((framework, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 ${framework.iconBg} rounded-full mb-6`}
              >
                <framework.icon className={`h-8 w-8 ${framework.color.split(" ")[1]}`} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">{framework.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{framework.subtitle}</p>
              <p className="text-gray-600 mb-6">{framework.description}</p>

              <ul className="space-y-3">
                {framework.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className={`w-2 h-2 ${framework.color.split(" ")[0]} rounded-full mt-2 mr-3 flex-shrink-0`} />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
