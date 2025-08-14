import { Navigation } from "@/components/navigation"
import { ProductsHero } from "@/components/products/products-hero"
import { ProductsFilter } from "@/components/products/products-filter"
import { ProductsGrid } from "@/components/products/products-grid"

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <ProductsHero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ProductsFilter />
          <ProductsGrid />
        </div>
      </div>
    </main>
  )
}
