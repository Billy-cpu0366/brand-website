import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "李校长",
    position: "贵州省某山区小学校长",
    company: "山区小学",
    content:
      "通过数字化教育改造，我们学校的教学质量得到了显著提升。孩子们对学习的兴趣更浓了，老师们的教学方式也更加多样化。这个项目真正改变了我们山区教育的面貌。",
    rating: 5,
    avatar: "/avatar-teacher.png",
  },
  {
    id: 2,
    name: "王理事长",
    position: "农业合作社理事长",
    company: "潍坊市农业合作社",
    content:
      "智慧农业系统让我们的管理更加科学化，不仅提高了产量，还降低了成本。现在我们可以通过手机随时了解农作物的生长情况，真正实现了精准农业。",
    rating: 5,
    avatar: "/avatar-farmer.png",
  },
  {
    id: 3,
    name: "张主任",
    position: "文化保护中心主任",
    company: "黄山市文化保护中心",
    content:
      "文化数字化保护项目让我们的古村落焕发了新的生机。通过VR技术，更多的人可以体验到我们的传统文化，这对文化传承具有重要意义。",
    rating: 5,
    avatar: "/avatar-cultural.png",
  },
]

export function ClientTestimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">客户见证</h2>
          <p className="text-gray-600">听听我们的合作伙伴怎么说</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 p-8 rounded-xl relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-cyan-200" />

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>

              <div className="flex items-center">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <div className="text-sm text-cyan-600">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
