import { Navigation } from "@/components/navigation"
import { CaseDetail } from "@/components/cases/case-detail"
import { RelatedCases } from "@/components/cases/related-cases"

export default function CaseDetailPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <CaseDetail caseId={params.id} />
        <RelatedCases currentCaseId={params.id} />
      </div>
    </main>
  )
}

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
  ]
}
