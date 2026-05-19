'use client'

import { motion } from 'framer-motion'

export default function AboutHostSection() {
  return (
    <section className="relative w-full overflow-hidden bg-primary py-24">
      {/* Photo fills the entire section as background cover */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/about-yhoannes-photo.jpg"
          alt="Yohannes Gebreab"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Text centered over the image */}
      <div className="relative z-10 mx-auto flex min-h-[400px] max-w-7xl items-center px-6 md:px-12">
        <div className="w-full text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
            className="heading-font text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl"
          >
            <span className="block text-xl font-medium text-gray-300 md:text-2xl lg:text-3xl">
              Meet Your Host
            </span>
            Yohannes Gebreab
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
            className="mx-auto mt-6 h-1 w-16 bg-secondary md:mx-0"
          />

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.42 }}
            className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-gray-300 md:mx-0"
          >
            As Host and Managing Director, Yohannes Gebreab commands the
            stage with articulate, non-negotiable knowledge and engaging
            entertainment craft.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.52 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-300 md:mx-0"
          >
            With a deep understanding of diaspora experiences, he brings
            forward <em className="italic text-white">truthful storytelling</em> that
            reconnects Ethiopians worldwide with their roots.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.62 }}
            className="mt-10 rounded-lg border-2 border-secondary bg-secondary px-8 py-3 font-black text-primary transition hover:bg-transparent hover:text-white"
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </section>
  )
}