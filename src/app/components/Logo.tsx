import Link from 'next/link'
import { Leaf } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-green-400 hover:text-green-300 transition-colors">
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <Leaf className="w-8 h-8" />
      </motion.div>
      <span>Greenvile</span>
    </Link>
  )
}