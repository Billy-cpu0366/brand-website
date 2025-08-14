import { Navigation } from "@/components/navigation"
import { CompanyStory } from "@/components/about/company-story"
import { CoreFramework } from "@/components/about/core-framework"
import { Timeline } from "@/components/about/timeline"
import { Vision } from "@/components/about/vision"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <CompanyStory />
        <CoreFramework />
        <Timeline />
        <Vision />
      </div>
    </main>
  )
}
