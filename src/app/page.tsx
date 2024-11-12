'use client'

import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Lightbulb, Rocket, BanknoteIcon } from 'lucide-react'
import ParticleBackground from './components/ParticleBackground'

const words = ["Future_", "Innovation_", "Disruption_", "Breakthroughs_"];

export default function Home() {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  

  useEffect(() => {
    const word = words[wordIndex];
    const updateText = () => {
      if (isDeleting) {
        if (displayText.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        } else {
          setDisplayText(word.substring(0, displayText.length - 1));
        }
      } else {
        if (displayText.length === word.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else {
          setDisplayText(word.substring(0, displayText.length + 1));
        }
      }
    };

    const timer = setTimeout(updateText, isDeleting ? 100 : 200);
    return () => clearTimeout(timer);
  }, [wordIndex, isDeleting, displayText]);

  return (
    <div className="min-h-screen bg-green-950 relative overflow-hidden">
      <ParticleBackground />
      <Header />
      
      {/* Hero Section */}
      <main className="pt-24 relative z-10">
        <section className="min-h-[80vh] flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              We Fund The{' '}
              <span className="text-green-400 inline-block min-w-[320px]">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl text-green-100 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Greenville Angel Investment Co. provides seed funding, expert consulting, 
              and comprehensive startup incubation services to transform innovative ideas 
              into market-leading companies.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link 
                href="/apply" 
                className="inline-block bg-green-400 text-green-950 px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-300 transition-colors hover:scale-105 transform"
              >
                Pitch Your Startup
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div 
              className="bg-green-900/20 p-8 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-5xl font-bold text-green-400 mb-2">10+</h3>
              <p className="text-green-100">Portfolio Companies</p>
            </motion.div>
            <motion.div 
              className="bg-green-900/20 p-8 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-5xl font-bold text-green-400 mb-2">$2M</h3>
              <p className="text-green-100">Assets Under Management</p>
            </motion.div>
            <motion.div 
              className="bg-green-900/20 p-8 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-5xl font-bold text-green-400 mb-2">85%</h3>
              <p className="text-green-100">Success Rate</p>
            </motion.div>
            <motion.div 
              className="bg-green-900/20 p-8 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-5xl font-bold text-green-400 mb-2">24/7</h3>
              <p className="text-green-100">Founder Support</p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 bg-green-900/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-green-950 p-8 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <BanknoteIcon className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Seed Funding</h3>
                <p className="text-green-100">
                  Initial capital to transform your idea into a viable product, 
                  with investments ranging from $50K to $500K.
                </p>
              </motion.div>
              <motion.div 
                className="bg-green-950 p-8 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Lightbulb className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Consulting</h3>
                <p className="text-green-100">
                  Strategic guidance from industry experts to optimize your business 
                  model and accelerate growth.
                </p>
              </motion.div>
              <motion.div 
                className="bg-green-950 p-8 rounded-lg"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Rocket className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Incubation</h3>
                <p className="text-green-100">
                  Comprehensive support including workspace, mentorship, and access to 
                  our network of industry leaders.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Advantage Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">The Greenville Advantage</h2>
              <p className="text-green-100">
                We're not just investors - we're partners in your success journey. 
                Our unique approach combines capital with deep industry expertise 
                and a proven track record of scaling startups.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <div className="w-64 h-64 relative">
                {/* Puzzle piece illustration would go here */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 opacity-20 rounded-lg" />
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}