import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Users, TrendingUp } from "lucide-react"

// Mock case data - in real app this would come from API/database
const caseData = {
  "rural-education-transformation": {
    title: "山区小学数字化教育改造",
    category: "教育数字化",
    location: "贵州省黔东南州",
    date: "2023年9月",
    duration: "6个月",
    client: "黔东南州教育局",
    description:
      "为偏远山区小学提供完整的数字化教学环境，通过先进的教育技术和优质的教学资源，让300多名学生享受到与城市学校同等质量的教育。项目涵盖硬件设施升级、软件平台搭建、教师培训和持续运营支持。",
    image: "/case-detail-education.png",
    challenge:
      "该山区小学地处偏远，教学设施落后，师资力量薄弱，学生缺乏优质教育资源。传统教学方式单一，学生学习兴趣不高，教学效果有限。",
    solution:
      "我们为学校提供了完整的数字化教育解决方案，包括智能教室建设、在线教学平台部署、教学资源库建设和教师数字化能力培训。通过技术手段连接优质教育资源，实现城乡教育均衡发展。",
    results: [
      { metric: "学生成绩提升", value: "40%", description: "各科平均成绩提升40%" },
      { metric: "教师数字化素养", value: "95%", description: "教师数字化教学能力达标率" },
      { metric: "家长满意度", value: "98%", description: "家长对教学改革满意度" },
      { metric: "学习兴趣提升", value: "85%", description: "学生学习积极性显著提高" },
    ],
    timeline: [
      { phase: "需求调研", duration: "1个月", description: "深入了解学校现状和需求" },
      { phase: "方案设计", duration: "1个月", description: "制定个性化数字化改造方案" },
      { phase: "设施建设", duration: "2个月", description: "硬件设施安装和软件平台部署" },
      { phase: "培训实施", duration: "1个月", description: "教师培训和系统试运行" },
      { phase: "正式运营", duration: "1个月", description: "系统正式上线和持续优化" },
    ],
    technologies: ["云计算平台", "在线教学系统", "智能教室设备", "学习管理系统", "移动学习应用"],
    testimonial: {
      content:
        "这个项目真正改变了我们学校的面貌。孩子们现在可以通过网络接触到最优质的教育资源，老师们的教学方式也更加多样化。我们山区的孩子终于可以享受到和城里孩子一样的教育了。",
      author: "李校长",
      position: "项目受益学校校长",
    },
  },
}

interface CaseDetailProps {
  caseId: string
}

export function CaseDetail({ caseId }: CaseDetailProps) {
  const caseInfo = caseData[caseId as keyof typeof caseData]

  if (!caseInfo) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900">案例未找到</h1>
        <p className="text-gray-600 mt-2">抱歉，您访问的案例页面不存在。</p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <Badge variant="secondary" className="mb-4">
          {caseInfo.category}
        </Badge>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">{caseInfo.title}</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="flex items-center text-gray-600">
            <MapPin className="h-5 w-5 mr-2" />
            <span>{caseInfo.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="h-5 w-5 mr-2" />
            <span>{caseInfo.date}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="h-5 w-5 mr-2" />
            <span>{caseInfo.client}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <TrendingUp className="h-5 w-5 mr-2" />
            <span>项目周期: {caseInfo.duration}</span>
          </div>
        </div>

        <p className="text-lg text-gray-600 leading-relaxed">{caseInfo.description}</p>
      </div>

      {/* Hero Image */}
      <div className="mb-12">
        <img
          src={caseInfo.image || "/placeholder.svg"}
          alt={caseInfo.title}
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Challenge & Solution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">项目挑战</h2>
          <p className="text-gray-600 leading-relaxed">{caseInfo.challenge}</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">解决方案</h2>
          <p className="text-gray-600 leading-relaxed">{caseInfo.solution}</p>
        </div>
      </div>

      {/* Results */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">项目成果</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseInfo.results.map((result, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border text-center">
              <div className="text-3xl font-bold text-cyan-600 mb-2">{result.value}</div>
              <div className="text-lg font-medium text-gray-900 mb-2">{result.metric}</div>
              <p className="text-sm text-gray-600">{result.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">项目时间线</h2>
        <div className="space-y-6">
          {caseInfo.timeline.map((phase, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                {index + 1}
              </div>
              <div className="ml-4 flex-1">
                <div className="flex items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{phase.phase}</h3>
                  <span className="ml-4 text-sm text-gray-500">({phase.duration})</span>
                </div>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">核心技术</h2>
        <div className="flex flex-wrap gap-3">
          {caseInfo.technologies.map((tech, index) => (
            <span key={index} className="bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-gray-50 p-8 rounded-xl mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">客户反馈</h2>
        <blockquote className="text-lg text-gray-700 italic mb-4">"{caseInfo.testimonial.content}"</blockquote>
        <div className="flex items-center">
          <div>
            <div className="font-semibold text-gray-900">{caseInfo.testimonial.author}</div>
            <div className="text-gray-600">{caseInfo.testimonial.position}</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">想了解更多类似项目？</h2>
        <p className="text-gray-600 mb-6">联系我们，获取专业的解决方案</p>
        <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
          立即咨询
        </Button>
      </div>
    </div>
  )
}
