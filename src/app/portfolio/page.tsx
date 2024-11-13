'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"

const portfolioCompanies = [
  { name: "EcoTech Solutions", description: "Revolutionizing urban waste management with AI-powered recycling systems.", image: "/placeholder.svg?height=200&width=300", category: "Green Tech" },
  { name: "MediConnect", description: "Bridging healthcare gaps with telemedicine platforms for rural areas.", image: "/placeholder.svg?height=200&width=300", category: "HealthTech" },
  { name: "QuantumLeap AI", description: "Pushing the boundaries of artificial intelligence with quantum computing.", image: "/placeholder.svg?height=200&width=300", category: "AI/ML" },
  { name: "FinFlow", description: "Streamlining financial processes for small businesses with blockchain technology.", image: "/placeholder.svg?height=200&width=300", category: "FinTech" },
  { name: "AgroSmart", description: "Enhancing agricultural productivity through IoT and data analytics.", image: "/placeholder.svg?height=200&width=300", category: "AgriTech" },
  { name: "NanoMed", description: "Developing targeted drug delivery systems using nanotechnology.", image: "/placeholder.svg?height=200&width=300", category: "BioTech" },
]

const categories = ["All", "Green Tech", "HealthTech", "AI/ML", "FinTech", "AgriTech", "BioTech"]

export default function Portfolio() {
  const [filter, setFilter] = useState("All")
  const servicesRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const filteredCompanies = filter === "All" 
    ? portfolioCompanies 
    : portfolioCompanies.filter(company => company.category === filter)

  return (
    <div className="min-h-screen bg-green-950 text-green-100">
      <Header servicesRef={servicesRef} contactRef={contactRef} />
      <main className="pt-24 pb-12">
        <section ref={servicesRef} className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h1 
              className="text-5xl font-bold mb-6 text-center text-green-400"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Portfolio
            </motion.h1>
            <motion.p 
              className="text-xl mb-12 text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover the innovative startups we&apos;ve invested in and supported on their journey to success.
            </motion.p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  className={`px-4 py-2 rounded-full ${filter === category ? 'bg-green-400 text-green-950' : 'bg-green-900 text-green-100'}`}
                  onClick={() => setFilter(category)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCompanies.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-green-900 border-green-700 overflow-hidden">
                    <img src={company.image} alt={company.name} className="w-full h-48 object-cover" />
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-green-400">{company.name}</h3>
                      <p className="text-green-100 mb-4">{company.description}</p>
                      <Badge variant="secondary" className="bg-green-700 text-green-100">
                        {company.category}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section ref={contactRef} className="py-20">
          {/* Contact section content here */}
        </section>
      </main>
      <Footer />
    </div>
  )
}
