'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const words = ['ሰዎች', 'ጉዳይ']

export default function AnimatedFlipWord() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative inline-flex h-[1.2em] items-center overflow-visible">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ rotateX: -90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: 90, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="amharic-font absolute left-0 rounded-2xl bg-secondary px-6 py-3 text-5xl font-extrabold text-primary md:text-7xl"
          style={{ transformOrigin: '50% 80%', transformStyle: 'preserve-3d' }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}