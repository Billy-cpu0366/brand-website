import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const relatedProducts = [
  {
    id: "online-learning-tools",
    title: "在线学习工具包",
    description: "专为乡村教师和学生设计的在线学习工具",
    image: "/placeholder-learning-tools.png",
    price: "¥15,000起",
  },
  {
    id: "smart-agriculture-iot",
    title: "智慧农业物联网系统",
    description: "通过物联网技术实现农业生产的智能化监控",
    image: "/placeholder-agriculture-iot.png",
    price: "¥50,000起",
  },
  {
    id: "cultural-heritage-digital",
    title: "文化遗产数字化保护平台",
    description: "运用数字技术对传统文化进行保护、传承和创新",
    image: "/placeholder-cultural-heritage.png",
    price: "¥80,000起",
  },
]

interface RelatedProductsProps {
  currentProductId: string
}

export function RelatedProducts({ currentProductId }: RelatedProductsProps) {
  const filteredProducts = relatedProducts.filter((product) => product.id !== currentProductId)

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">相关产品</h2>
          <p className="text-gray-600">探索更多适合您需求的解决方案</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="h-48 bg-gray-100">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-cyan-600">{product.price}</span>
                  <Link href={`/products/${product.id}`}>
                    <Button size="sm" variant="outline">
                      查看详情
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
