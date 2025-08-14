import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Users, Calendar, Award } from "lucide-react"

// Mock product data - in real app this would come from API/database
const productData = {
  "smart-education-platform": {
    title: "智慧教育云平台",
    category: "数字教育",
    price: "定制化报价",
    rating: 4.8,
    reviews: 156,
    description:
      "为乡村学校提供完整的数字化教学解决方案，包含在线课程、互动教学工具和学习管理系统。通过云端技术，让优质教育资源触达每一个乡村学生。",
    image: "/placeholder-education-detail.png",
    features: [
      "在线课程管理系统",
      "互动教学工具集",
      "学习数据分析平台",
      "家校沟通桥梁",
      "多媒体教学资源库",
      "智能作业批改",
      "学习进度跟踪",
      "个性化学习推荐",
    ],
    benefits: ["提升教学效率50%以上", "学生学习兴趣显著增强", "教师工作负担有效减轻", "家长参与度大幅提升"],
    applications: [
      {
        title: "乡村小学数字化改造",
        description: "为偏远地区小学提供完整的数字化教学环境，让乡村孩子享受优质教育资源。",
      },
      {
        title: "教师培训与发展",
        description: "通过平台为乡村教师提供专业培训，提升教学水平和数字化素养。",
      },
      {
        title: "家校协同教育",
        description: "建立家校沟通桥梁，让家长更好地参与孩子的教育过程。",
      },
    ],
    achievements: [
      { icon: Users, value: "500+", label: "服务学校" },
      { icon: Calendar, value: "3年", label: "运营经验" },
      { icon: Award, value: "95%", label: "满意度" },
    ],
  },
}

interface ProductDetailProps {
  productId: string
}

export function ProductDetail({ productId }: ProductDetailProps) {
  const product = productData[productId as keyof typeof productData]

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900">产品未找到</h1>
        <p className="text-gray-600 mt-2">抱歉，您访问的产品页面不存在。</p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img src={product.image || "/placeholder.svg"} alt={product.title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-2">
              {product.category}
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-sm text-gray-500">({product.reviews} 评价)</span>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
          </div>

          <div>
            <span className="text-3xl font-bold text-cyan-600">{product.price}</span>
          </div>

          <div className="flex space-x-4">
            <Button size="lg" className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white">
              立即咨询
            </Button>
            <Button size="lg" variant="outline" className="flex-1 bg-transparent">
              申请试用
            </Button>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-3 gap-4 py-6 border-t border-b">
            {product.achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <achievement.icon className="h-6 w-6 text-cyan-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{achievement.value}</div>
                <div className="text-sm text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">核心功能</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {product.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">核心优势</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {product.benefits.map((benefit, index) => (
            <div key={index} className="bg-green-50 p-6 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-500 mb-3" />
              <p className="text-gray-700 font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Applications Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">应用场景</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {product.applications.map((application, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{application.title}</h3>
              <p className="text-gray-600">{application.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
