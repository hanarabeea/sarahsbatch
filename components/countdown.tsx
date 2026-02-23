'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      // March 21, 2026, 18:00:00 Cairo Time (UTC+2)
      const cairoTime = new Date('2026-03-21T18:00:00+02:00')
      const now = new Date()
      const difference = cairoTime.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ]

  return (
    <section id="countdown" className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-playlist neon-text-magenta mb-4">
            Countdown to Chaos
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 mx-auto" />
          <p className="text-lg font-poppins text-pink-300 mt-6">Main Character Energy incoming</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 md:p-8 rounded-xl border-2 border-primary/50 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/30"
            >
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-4 md:p-6 mb-4">
                <div className="text-6xl md:text-7xl font-black font-playlist neon-text leading-none" style={{ letterSpacing: '0.05em' }}>
                  {unit.value.toString().padStart(2, '0')}
                </div>
              </div>
              <p className="text-xs md:text-sm font-poppins font-bold text-pink-200 uppercase tracking-widest">
                {unit.label}
              </p>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
}
