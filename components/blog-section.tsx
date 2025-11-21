"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface BlogPost {
  id: number
  title: string
  category: string
  image: string
}

const BlogSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Unraveling the Mysteries of Sleep",
      category: "Health",
      image: "/sleep-health.jpg",
    },
    {
      id: 2,
      title: "The Heart-Healthy Diet",
      category: "Nutrition",
      image: "/healthy-diet.jpg",
    },
    {
      id: 3,
      title: "Understanding Pediatric Vaccinations",
      category: "Pediatrics",
      image: "/vaccines.jpg",
    },
    {
      id: 4,
      title: "Navigating Mental Health",
      category: "Mental Health",
      image: "/mental-health.jpg",
    },
    {
      id: 5,
      title: "The Importance of Regular Exercise",
      category: "Fitness",
      image: "/diverse-group-exercising.png",
    },
    {
      id: 6,
      title: "Skin Health 101",
      category: "Dermatology",
      image: "/skin-care.jpg",
    },
  ]

  const itemsPerPage = 4
  const maxIndex = Math.ceil(blogPosts.length / itemsPerPage) - 1

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1))
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  const visiblePosts = blogPosts.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)

  return (
    <section className="py-16 px-5 lg:px-32 bg-white">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
        <div>
          <h2 className="text-4xl font-bold text-foreground mb-3">Nuestros Artículos</h2>
          <p className="text-muted-foreground max-w-md">
            Conoce a nuestro equipo de profesionales altamente capacitados en diversas áreas de la salud, comprometidos
            con tu bienestar integral.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="p-2 border-2 border-[#104e64] text-[#104e64] hover:bg-[#104e64] hover:text-white transition-colors"
            aria-label="Previous blogs"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="p-2 border-2 border-[#104e64] text-[#104e64] hover:bg-[#104e64] hover:text-white transition-colors"
            aria-label="Next blogs"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {visiblePosts.map((post) => (
          <div key={post.id} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg h-56 mb-4">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-[#104e64] uppercase tracking-wider">{post.category}</p>
              <h3 className="text-lg font-semibold text-foreground line-clamp-2 group-hover:text-[#104e64] transition-colors">
                {post.title}
              </h3>
            </div>
            <button className="mt-4 text-[#104e64] font-medium text-sm hover:underline">Leer más →</button>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-[#104e64] w-8" : "bg-gray-300 w-2 hover:bg-gray-400"
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default BlogSection
