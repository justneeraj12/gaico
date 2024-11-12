'use client'
import { useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const portfolioCompanies = [
  { name: "EcoTech Solutions", description: "Innovative green energy solutions for urban environments." },
  { name: "HealthAI", description: "AI-powered healthcare diagnostics and personalized treatment plans." },
  { name: "SmartAgri", description: "IoT and data analytics for precision agriculture." },
  { name: "FinRevolution", description: "Blockchain-based financial services for the unbanked." },
  { name: "EduVR", description: "Virtual reality platforms for immersive educational experiences." },
  { name: "CyberShield", description: "Next-generation cybersecurity using quantum encryption." },
]

export default function Portfolio() {
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="min-h-screen bg-green-950">
      <Header servicesRef={servicesRef} contactRef={contactRef} />
      <main className="pt-24 px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Portfolio
          </motion.h1>
          <motion.p
            className="text-green-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We&apos;re proud to have partnered with these innovative companies that are shaping the future across various industries.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioCompanies.map((company, index) => (
              <motion.div
                key={company.name}
                className="bg-green-900/20 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h2 className="text-xl font-semibold text-green-400 mb-2">{company.name}</h2>
                <p className="text-green-100">{company.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}