'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function MessageBox() {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data?.error || 'Failed to send message')
      }

      setSubmitted(true)
      setFormData({ name: '', message: '' })

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Try again!'
      setError(message)
      console.error('Error sending message:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold font-playfair neon-text-magenta mb-4">
            TALK SH*T
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 mx-auto" />
          <p className="text-lg font-poppins text-pink-300 mt-4">
            Drop your hottest take. Spill the tea. Sarah's getting it all.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-2xl border border-secondary/30"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold font-playfair neon-text mb-3">
                Message Sent
              </h3>
              <p className="text-pink-200 font-poppins text-lg">
                Sarah will see your love. Now go celebrate!
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <label htmlFor="name" className="block text-sm font-bold font-poppins text-white mb-3 uppercase tracking-widest">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full px-6 py-3 bg-white/10 border border-primary/50 rounded-lg text-white placeholder-pink-200/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all font-poppins"
                  suppressHydrationWarning={true}
                />
              </motion.div>

              {/* Message Input */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <label htmlFor="message" className="block text-sm font-bold font-poppins text-white mb-3 uppercase tracking-widest">
                  Message for Sarah
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Get real. Get messy. Get funny. What's your favorite Sarah moment?"
                  rows={5}
                  className="w-full px-6 py-3 bg-white/10 border border-primary/50 rounded-lg text-white placeholder-pink-200/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all font-poppins resize-none"
                  suppressHydrationWarning={true}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full neon-pulse px-6 py-4 bg-primary font-bold text-white rounded-lg text-lg font-poppins hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
                  suppressHydrationWarning={true}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>

                {error && (
                  <div className="mt-4 px-4 py-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm font-poppins text-center">
                    ⚠️ {error}
                  </div>
                )}
              </motion.div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
