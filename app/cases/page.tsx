import { Navigation } from "@/components/navigation"
import { CasesHero } from "@/components/cases/cases-hero"
import { CasesGrid } from "@/components/cases/cases-grid"
import { ClientTestimonials } from "@/components/cases/client-testimonials"
import { CaseStats } from "@/components/cases/case-stats"

export default function CasesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <CasesHero />
        <CaseStats />
        <CasesGrid />
        <ClientTestimonials />
      </div>
    </main>
  )
}
