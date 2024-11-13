'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "What types of startups does Greenvile Angel Investment Co. invest in?",
    answer: "We focus on early-stage startups in sectors such as green technology, healthcare innovation, fintech, and AI/ML applications. We look for companies with strong growth potential and innovative solutions to real-world problems."
  },
  {
    question: "What is the typical investment range?",
    answer: "Our investments typically range from $50,000 to $500,000 for seed and early-stage startups. However, we evaluate each opportunity individually and may consider larger investments for exceptional cases."
  },
  {
    question: "How long does the investment process take?",
    answer: "The investment process usually takes 4-8 weeks from initial pitch to funding. This includes due diligence, team meetings, and finalizing terms. We strive to be efficient while ensuring thorough evaluation."
  },
  {
    question: "What support do you offer beyond funding?",
    answer: "We provide comprehensive support including mentorship from industry experts, access to our network of partners and potential customers, strategic guidance, and operational support to help scale your business."
  },
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className="py-12 bg-green-950">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-400 mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-green-800 rounded-lg overflow-hidden">
              <button
                className="w-full p-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-green-100">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-green-400 transform transition-transform duration-200 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-4 bg-green-900/20 text-green-200">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}