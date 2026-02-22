'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Details() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-playlist neon-text mb-4">
            THE DEETS
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 mx-auto" />
        </motion.div>

        {/* Date Card */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl border border-pink-500/30 hover:border-pink-500/70 transition-all max-w-md"
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-6">
              <span className="text-6xl font-bold font-playlist neon-text-magenta">01</span>
            </div>
            <h3 className="text-sm font-bold font-poppins text-pink-300 mb-3 uppercase tracking-widest">
              The Big Day
            </h3>
            <p className="text-3xl font-bold font-playlist neon-text">
              Saturday 21st March
            </p>
            <p className="text-pink-300 font-poppins font-bold text-lg mt-2">
              6:00 PM
            </p>
            <p className="text-pink-200 font-poppins text-sm mt-2">
              Final Night of Freedom begins. No turning back now, babe.
            </p>
          </motion.div>
        </div>

        {/* Location Section - Full Width */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 rounded-2xl border border-pink-500/30 hover:border-pink-500/70 transition-all"
            whileHover={{ scale: 1.02 }}
          >
            <div>
              <div className="mb-6">
                <span className="text-6xl font-bold font-playlist neon-text-magenta">02</span>
              </div>
              <p className="text-pink-200 font-poppins text-lg leading-relaxed mb-6">
                Mark your calendar for the most epic night ever. If you're late, we're starting without you.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-playlist neon-text-magenta mb-6 leading-tight">
                Start the Uber now because Cairo traffic is a hate crime
              </h2>
              <motion.a
                href="https://maps.app.goo.gl/LSfyLjeFAxMeqKwf9"
                target="_blank"
                rel="noopener noreferrer"
                className="wobble inline-block px-8 md:px-12 py-5 md:py-6 bg-primary font-black text-white rounded-lg text-lg md:text-2xl font-poppins uppercase tracking-wider"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                LOCATE THE PARTY (HURRY!)
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Dress Code Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-2xl border border-pink-500/30 hover:border-pink-500/70 transition-all"
          whileHover={{ scale: 1.02 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Content */}
            <div>
              <div className="mb-6">
                <span className="text-6xl font-bold font-playlist neon-text-magenta">03</span>
              </div>
              <h3 className="text-sm font-bold font-poppins text-pink-300 mb-4 uppercase tracking-widest">
                How to Look
              </h3>
              <p className="text-4xl md:text-5xl font-bold font-playlist neon-text mb-6">
                Dress Cute & Shiny
              </p>
              <p className="text-pink-200 font-poppins text-lg leading-relaxed">
                If you aren't blinding people with your sparkle, you're doing it wrong. Main Character Energy ONLY. No boring fits.
              </p>
            </div>

            {/* Right - Image */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portrait-surprised-beautiful-woman-shiny-260nw-1105819469-removebg-preview-AaP4CxipQdFyuyx5jSkVAPpGUswdXX.png"
                alt="Dress Code Inspiration"
                width={350}
                height={450}
                className="w-full h-auto drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Final Slogan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-2xl md:text-3xl font-poppins font-bold text-pink-200">
            Bride Squad Energy. Let's get messy.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
