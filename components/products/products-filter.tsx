"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const categories = [
  { id: "all", name: "全部产品", count: 12 },
  { id: "education", name: "数字教育", count: 4 },
  { id: "agriculture", name: "智慧农业", count: 3 },
  { id: "culture", name: "文化传承", count: 3 },
  { id: "governance", name: "乡村治理", count: 2 },
]

export function ProductsFilter() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="mb-12">
      {/* Search Bar */}
      <div className="relative max-w-md mx-auto mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          type="text"
          placeholder="搜索产品或服务..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            onClick={() => setActiveCategory(category.id)}
            className={`${
              activeCategory === category.id
                ? "bg-cyan-600 hover:bg-cyan-700 text-white"
                : "border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
          >
            {category.name}
            <span className="ml-2 text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">{category.count}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}
