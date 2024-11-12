'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Leaf } from 'lucide-react'

export default function Header() {
  const pathname = usePathname()

  return (
    <motion.header 
      className="fixed w-full bg-green-950/90 backdrop-blur-sm z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-green-400 hover:text-green-300 transition-colors">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Leaf className="w-8 h-8" />
          </motion.div>
          <span>Greenvile</span>
        </Link>
        <nav>
          <ul className="flex space-x-8 items-center">
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link href="/about" className={`text-green-100 hover:text-green-400 transition-colors ${pathname === '/about' ? 'text-green-400' : ''}`}>About</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link href="/#services" className="text-green-100 hover:text-green-400 transition-colors">Services</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link href="/portfolio" className={`text-green-100 hover:text-green-400 transition-colors ${pathname === '/portfolio' ? 'text-green-400' : ''}`}>Portfolio</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link href="/#contact" className="text-green-100 hover:text-green-400 transition-colors">Contact</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/apply" 
                className="bg-green-400 text-green-950 px-6 py-2 rounded-full font-semibold hover:bg-green-300 transition-colors"
              >
                Apply Now
              </Link>
            </motion.li>
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}