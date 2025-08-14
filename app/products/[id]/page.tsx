import { Navigation } from "@/components/navigation"
import { ProductDetail } from "@/components/products/product-detail"
import { RelatedProducts } from "@/components/products/related-products"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <ProductDetail productId={params.id} />
        <RelatedProducts currentProductId={params.id} />
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
