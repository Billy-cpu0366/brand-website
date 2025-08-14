import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin, Calendar } from "lucide-react"

const cases = [
  {
    id: "rural-education-transformation",
    title: "山区小学数字化教育改造",
    category: "教育数字化",
    location: "贵州省黔东南州",
    date: "2023年9月",
    description: "为偏远山区小学提供完整的数字化教学环境，让300多名学生享受到优质教育资源。",
    image: "/case-rural-school.png",
    results: ["学生成绩提升40%", "教师数字化素养大幅提升", "家长满意度达98%"],
    tags: ["在线教育", "师资培训", "设备升级"],
  },
  {
    id: "smart-agriculture-cooperative",
    title: "智慧农业合作社建设",
    category: "智慧农业",
    location: "山东省潍坊市",
    date: "2023年6月",
    description: "通过物联网技术帮助农业合作社实现智能化管理，提高农产品质量和产量。",
    image: "/case-smart-farm.png",
    results: ["产量提升35%", "成本降低25%", "农产品质量显著提升"],
    tags: ["物联网", "数据分析", "精准农业"],
  },
  {
    id: "cultural-heritage-protection",
    title: "古村落文化数字化保护",
    category: "文化传承",
    location: "安徽省黄山市",
    date: "2023年3月",
    description: "运用3D建模和VR技术对古村落进行数字化保护，传承优秀传统文化。",
    image: "/case-cultural-village.png",
    results: ["建立完整数字档案", "游客体验大幅提升", "文化传承效果显著"],
    tags: ["3D建模", "VR体验", "文化保护"],
  },
  {
    id: "rural-governance-platform",
    title: "乡村治理信息化平台",
    category: "乡村治理",
    location: "浙江省湖州市",
    date: "2023年1月",
    description: "为乡村基层治理提供数字化工具，提升治理效率和服务质量。",
    image: "/case-governance.png",
    results: ["办事效率提升60%", "村民满意度达95%", "治理成本降低30%"],
    tags: ["数字政务", "便民服务", "数据管理"],
  },
  {
    id: "online-learning-platform",
    title: "乡村教师在线培训平台",
    category: "教育数字化",
    location: "四川省凉山州",
    date: "2022年12月",
    description: "为乡村教师提供专业的在线培训平台，提升教学水平和数字化素养。",
    image: "/case-teacher-training.png",
    results: ["培训教师2000+人", "教学质量显著提升", "获得教育部认可"],
    tags: ["教师培训", "在线学习", "能力提升"],
  },
  {
    id: "agricultural-iot-monitoring",
    title: "农作物智能监测系统",
    category: "智慧农业",
    location: "江苏省盐城市",
    date: "2022年10月",
    description: "利用无人机和传感器技术实现农作物生长全程监测，提供精准农业服务。",
    image: "/case-crop-monitoring.png",
    results: ["监测精度达95%", "病虫害预警及时率100%", "农药使用减少40%"],
    tags: ["无人机", "传感器", "精准监测"],
  },
]

export function CasesGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">典型案例</h2>
          <p className="text-gray-600">深入了解我们的成功实践和创新成果</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem) => (
            <div
              key={caseItem.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{caseItem.title}</h3>

                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {caseItem.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {caseItem.date}
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">{caseItem.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">项目成果</h4>
                  <ul className="space-y-1">
                    {caseItem.results.slice(0, 2).map((result, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {caseItem.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link href={`/cases/${caseItem.id}`}>
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                    查看详情
                    <ArrowRight className="ml-2 h-4 w-4" />
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
