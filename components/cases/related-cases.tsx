import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin } from "lucide-react"

const relatedCases = [
  {
    id: "smart-agriculture-cooperative",
    title: "智慧农业合作社建设",
    category: "智慧农业",
    location: "山东省潍坊市",
    description: "通过物联网技术帮助农业合作社实现智能化管理",
    image: "/case-smart-farm.png",
  },
  {
    id: "cultural-heritage-protection",
    title: "古村落文化数字化保护",
    category: "文化传承",
    location: "安徽省黄山市",
    description: "运用3D建模和VR技术对古村落进行数字化保护",
    image: "/case-cultural-village.png",
  },
  {
    id: "rural-governance-platform",
    title: "乡村治理信息化平台",
    category: "乡村治理",
    location: "浙江省湖州市",
    description: "为乡村基层治理提供数字化工具，提升治理效率",
    image: "/case-governance.png",
  },
]

interface RelatedCasesProps {
  currentCaseId: string
}

export function RelatedCases({ currentCaseId }: RelatedCasesProps) {
  const filteredCases = relatedCases.filter((caseItem) => caseItem.id !== currentCaseId)

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">相关案例</h2>
          <p className="text-gray-600">探索更多成功实践</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredCases.map((caseItem) => (
            <div
              key={caseItem.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={caseItem.image || "/placeholder.svg"}
                  alt={caseItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-800">
                    {caseItem.category}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{caseItem.title}</h3>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  {caseItem.location}
                </div>
                <p className="text-gray-600 mb-4 text-sm">{caseItem.description}</p>
                <Link href={`/cases/${caseItem.id}`}>
                  <Button size="sm" variant="outline" className="w-full bg-transparent">
                    查看详情
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
