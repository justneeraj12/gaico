'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const successStories = [
  {
    company: "EcoTech Solutions",
    description: "Revolutionizing urban waste management with AI-powered recycling systems.",
    image: "/placeholder.svg?height=400&width=600",
    founder: "Emma Green",
  },
  {
    company: "MediConnect",
    description: "Bridging healthcare gaps with telemedicine platforms for rural areas.",
    image: "/placeholder.svg?height=400&width=600",
    founder: "Dr. James Wilson",
  },
  {
    company: "QuantumLeap AI",
    description: "Pushing the boundaries of artificial intelligence with quantum computing.",
    image: "/placeholder.svg?height=400&width=600",
    founder: "Dr. Sophia Chen",
  },
]

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % successStories.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + successStories.length) % successStories.length)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div className="relative h-[400px]">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-64 md:h-full">
                <Image
                  src={successStories[currentIndex].image}
                  alt={successStories[currentIndex].company}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-green-300 mb-2">{successStories[currentIndex].company}</h3>
                <p className="text-green-100 mb-4">{successStories[currentIndex].description}</p>
                <p className="text-green-400 font-semibold">Founder: {successStories[currentIndex].founder}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-500/20 p-2 rounded-full hover:bg-green-500/40 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-500/20 p-2 rounded-full hover:bg-green-500/40 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  )
}