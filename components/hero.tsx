'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  
  // Parallax effect for disco ball
  const discoY = useTransform(scrollY, [0, 500], [0, 150])
  const discoRotate = useTransform(scrollY, [0, 500], [0, 180])
  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0.3])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
    >
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-pink-950/30 to-purple-950 pointer-events-none" />
      
      {/* Disco Ball with Parallax - Left Side */}
      <motion.div
        className="absolute -left-20 top-1/4 w-64 h-64 md:w-96 md:h-96 pointer-events-none"
        style={{
          y: discoY,
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="w-full h-full relative"
        >
          <Image
            src="/disco-ball.jpg"
            alt="Disco Ball"
            width={400}
            height={400}
            className="w-full h-full object-cover rounded-full drop-shadow-2xl filter brightness-125 contrast-125"
            priority
          />
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500/40 to-purple-600/40 blur-3xl" />
        </motion.div>
      </motion.div>

      {/* Disco Ball with Parallax - Right Side */}
      <motion.div
        className="absolute -right-20 bottom-1/4 w-56 h-56 md:w-80 md:h-80 pointer-events-none"
        style={{
          y: useTransform(scrollY, [0, 500], [0, -120]),
        }}
      >
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="w-full h-full relative"
        >
          <Image
            src="/disco-ball.jpg"
            alt="Disco Ball"
            width={350}
            height={350}
            className="w-full h-full object-cover rounded-full drop-shadow-2xl filter brightness-110 contrast-110 opacity-70"
            priority
          />
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-purple-600/30 to-pink-500/30 blur-3xl" />
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="text-center relative z-10 max-w-3xl"
        style={{ opacity: contentOpacity }}
      >
        {/* Logo/Title */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-playfair font-bold mb-3 neon-text">
            SARAH'S PARTY
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 mx-auto mb-4" />
          <p className="text-xs md:text-base font-poppins tracking-widest text-pink-200 uppercase">
            Main Character Energy
          </p>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-6xl font-bold font-poppins mb-6 text-white">
            SARAH'S FINAL RIOT
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto" />
        </motion.div>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12 space-y-4"
        >
          <p className="text-xl md:text-2xl font-poppins text-pink-100">
            I found my forever... but tonight, bad decisions only
          </p>
          <p className="text-lg md:text-xl font-poppins text-secondary font-bold">
            Besties Only. Final Night of Freedom. No Boring Energy.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center"
        >
          <button className="neon-pulse px-10 py-4 bg-primary font-bold text-white rounded-lg text-lg font-poppins hover:scale-105 transition-transform duration-300 uppercase tracking-wider">
            Get the Details
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-pink-400 text-sm font-poppins">Scroll to explore</div>
      </motion.div>
    </section>
  )
}
