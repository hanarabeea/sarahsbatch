'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function MusicPlayer() {
  const [isMuted, setIsMuted] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const startAudio = () => {
      if (audio.paused) {
        audio.muted = false
        audio.play().then(() => {
          setHasStarted(true)
        }).catch(() => { })
      }
    }

    // Stop when user leaves, resume when they come back
    const handleVisibility = () => {
      if (document.hidden) {
        audio.pause()
      } else if (hasStarted) {
        audio.play().catch(() => { })
      }
    }

    // Try immediate autoplay (works on desktop/Android)
    audio.play().then(() => {
      setHasStarted(true)
    }).catch(() => {
      // iOS blocked it — start silently on first scroll or touch
      window.addEventListener('scroll', startAudio, { once: true, passive: true })
      document.addEventListener('touchstart', startAudio, { once: true, passive: true })
      document.addEventListener('click', startAudio, { once: true })
    })

    document.addEventListener('visibilitychange', handleVisibility)
    window.addEventListener('pagehide', () => audio.pause())

    return () => {
      window.removeEventListener('scroll', startAudio)
      document.removeEventListener('touchstart', startAudio)
      document.removeEventListener('click', startAudio)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [hasStarted])

  const handleMute = () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      audio.muted = false
      audio.play().then(() => setHasStarted(true)).catch(() => { })
      setIsMuted(false)
    } else {
      audio.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <>
      {/* Floating Music Player - compact, right-aligned */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="fixed bottom-5 right-4 z-40 flex items-center gap-2"
      >
        {/* Mini visualizer bars */}
        <div className="flex gap-0.5 items-end h-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={i}
              animate={(!hasStarted || isMuted) ? { height: 4 } : { height: [4, 14, 4] }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                delay: i * 0.1,
                ease: 'easeInOut'
              }}
              className="w-1 bg-gradient-to-t from-primary to-secondary rounded-full"
            />
          ))}
        </div>

        {/* Speaker icon button */}
        <motion.button
          onClick={handleMute}
          className="p-2 bg-primary/80 backdrop-blur rounded-full hover:bg-primary transition-colors flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          title={isMuted ? 'Unmute' : 'Mute'}
          suppressHydrationWarning={true}
        >
          {isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
          )}
        </motion.button>
      </motion.div>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} preload="auto" loop>
        <source src="/disco-music.mp3" type="audio/mpeg" />
      </audio>
    </>
  )
}
