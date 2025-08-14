import { CheckCircle } from "lucide-react"

const timelineEvents = [
  {
    year: "2019",
    title: "公司成立",
    description: "响应国家乡村振兴战略号召，正式成立并确立发展方向",
    milestone: true,
  },
  {
    year: "2020",
    title: "技术研发",
    description: "组建专业技术团队，开始数字化教育平台研发",
    milestone: false,
  },
  {
    year: "2021",
    title: "首个项目落地",
    description: "成功实施首个乡村教育数字化改造项目",
    milestone: true,
  },
  {
    year: "2022",
    title: "规模扩张",
    description: "业务覆盖多个省份，服务范围不断扩大",
    milestone: false,
  },
  {
    year: "2023",
    title: "文化融合创新",
    description: "推出文化传承数字化保护解决方案",
    milestone: true,
  },
  {
    year: "2024",
    title: "全面发展",
    description: "形成完整的政策+技术+文化三位一体服务体系",
    milestone: true,
  },
]

export function Timeline() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">发展历程</h2>
          <p className="text-xl text-gray-600">见证我们在乡村振兴道路上的每一个重要时刻</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div
                  className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full ${
                    event.milestone ? "bg-cyan-600" : "bg-gray-400"
                  }`}
                >
                  {event.milestone ? (
                    <CheckCircle className="h-8 w-8 text-white" />
                  ) : (
                    <div className="w-3 h-3 bg-white rounded-full" />
                  )}
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${
                      event.milestone ? "bg-cyan-100 text-cyan-800" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {event.year}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
