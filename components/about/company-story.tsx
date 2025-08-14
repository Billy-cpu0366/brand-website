import { Button } from "@/components/ui/button"

export function CompanyStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">关于我们</h1>
            <h2 className="text-2xl text-cyan-600 mb-8">致力于乡村振兴与教育数字化的创新引领者</h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                我们是一家专注于乡村振兴、教育数字化和文化传承创新的综合性企业。
                秉承"政策引领、技术赋能、文化融合"的核心理念，致力于通过数字技术推动传统产业转型升级。
              </p>
              <p>
                在国家乡村振兴战略指引下，我们深入理解政策导向，运用先进的数字化技术，
                为乡村教育、文化传承和产业发展提供创新解决方案，助力构建现代化乡村发展新格局。
              </p>
              <p>
                我们相信，通过将传统文化智慧与现代科技完美结合， 能够为乡村振兴注入新的活力，为教育数字化转型贡献力量。
              </p>
            </div>
            <div className="mt-8">
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white mr-4">了解更多</Button>
              <Button variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 bg-transparent">
                联系我们
              </Button>
            </div>
          </div>
          <div className="relative">
            <img src="/placeholder-uyp8e.png" alt="公司愿景" className="rounded-lg shadow-lg w-full" />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-cyan-600">5+</div>
              <div className="text-sm text-gray-600">年专业经验</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-pink-500">100+</div>
              <div className="text-sm text-gray-600">成功案例</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
