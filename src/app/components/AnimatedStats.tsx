'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const stats = [
  { label: "Startups Funded", value: 50, prefix: "", suffix: "+" },
  { label: "Total Investments", value: 25, prefix: "$", suffix: "M" },
  { label: "Successful Exits", value: 10, prefix: "", suffix: "" },
  { label: "Jobs Created", value: 1000, prefix: "", suffix: "+" },
]

interface CounterProps {
  value: number
  prefix: string
  suffix: string
}

const Counter: React.FC<CounterProps> = ({ value, prefix, suffix }) => {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      const duration = 2000
      const start = Date.now()
      const end = start + duration

      const animate = () => {
        const now = Date.now()
        const progress = Math.min((now - start) / duration, 1)
        const currentCount = Math.floor(progress * value)
        setCount(currentCount)

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [inView, value])

  return (
    <span ref={ref}>
      <span ref={countRef}>{prefix}{count}</span>{suffix}
    </span>
  )
}

export default function AnimatedStats() {
  return (
    <div className="py-12 bg-green-900/20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-400 mb-12">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl font-bold text-white mb-2">
                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="text-green-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
