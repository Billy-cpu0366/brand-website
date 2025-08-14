import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Zap, Shield } from "lucide-react"

const products = [
  {
    id: "smart-education-platform",
    title: "智慧教育云平台",
    category: "education",
    description: "为乡村学校提供完整的数字化教学解决方案，包含在线课程、互动教学工具和学习管理系统。",
    image: "/placeholder-education-platform.png",
    features: ["在线课程管理", "互动教学工具", "学习数据分析", "家校沟通平台"],
    price: "定制化报价",
    icon: Users,
  },
  {
    id: "smart-agriculture-iot",
    title: "智慧农业物联网系统",
    category: "agriculture",
    description: "通过物联网技术实现农业生产的智能化监控和管理，提高农业生产效率和质量。",
    image: "/placeholder-agriculture-iot.png",
    features: ["环境监测", "自动灌溉", "病虫害预警", "产量预测"],
    price: "¥50,000起",
    icon: Zap,
  },
  {
    id: "cultural-heritage-digital",
    title: "文化遗产数字化保护平台",
    category: "culture",
    description: "运用数字技术对传统文化进行保护、传承和创新，建设文化资源数字化档案。",
    image: "/placeholder-cultural-heritage.png",
    features: ["3D文物建模", "VR文化体验", "数字档案管理", "文化教育内容"],
    price: "¥80,000起",
    icon: Shield,
  },
  {
    id: "rural-governance-system",
    title: "乡村治理信息化系统",
    category: "governance",
    description: "为乡村基层治理提供数字化工具，提升治理效率和服务质量。",
    image: "/placeholder-governance-system.png",
    features: ["村务管理", "便民服务", "信息发布", "数据统计"],
    price: "¥30,000起",
    icon: Users,
  },
  {
    id: "online-learning-tools",
    title: "在线学习工具包",
    category: "education",
    description: "专为乡村教师和学生设计的在线学习工具，支持多种教学场景和学习方式。",
    image: "/placeholder-learning-tools.png",
    features: ["课件制作", "在线测评", "学习游戏", "进度跟踪"],
    price: "¥15,000起",
    icon: Users,
  },
  {
    id: "crop-monitoring-drone",
    title: "农作物监测无人机系统",
    category: "agriculture",
    description: "利用无人机技术进行农作物生长监测和病虫害识别，提供精准农业服务。",
    image: "/placeholder-drone-monitoring.png",
    features: ["航拍监测", "病虫害识别", "生长分析", "数据报告"],
    price: "¥120,000起",
    icon: Zap,
  },
]

export function ProductsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
        >
          <div className="relative h-48 bg-gray-100">
            <img src={product.image || "/placeholder.svg"} alt={product.title} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4">
              <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                <product.icon className="h-5 w-5 text-cyan-600" />
              </div>
            </div>
            <div className="absolute top-4 right-4">
              <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                {product.category === "education" && "数字教育"}
                {product.category === "agriculture" && "智慧农业"}
                {product.category === "culture" && "文化传承"}
                {product.category === "governance" && "乡村治理"}
              </span>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">核心功能</h4>
              <div className="flex flex-wrap gap-1">
                {product.features.slice(0, 3).map((feature, index) => (
                  <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                    {feature}
                  </span>
                ))}
                {product.features.length > 3 && (
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                    +{product.features.length - 3}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-lg font-semibold text-cyan-600">{product.price}</span>
              </div>
              <Link href={`/products/${product.id}`}>
                <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                  了解详情
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
