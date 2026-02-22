import Hero from '@/components/hero'
import Countdown from '@/components/countdown'
import Details from '@/components/details'
import MessageBox from '@/components/message-box'
import MusicPlayer from '@/components/music-player'

export default function Home() {
  return (
    <main className="bg-transparent min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Countdown Section */}
      <Countdown />

      {/* Details Section */}
      <Details />

      {/* Message Box Section */}
      <MessageBox />

      {/* Floating Music Player */}
      <MusicPlayer />

      {/* Footer */}
      <footer className="text-center py-6 text-pink-300/60 font-poppins text-sm">
        © 2026 All Rights Reserved. Made by{' '}
        <a
          href="https://www.instagram.com/digitiva.co?igsh=MXNteGgyZjIzenQwaQ%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 hover:text-pink-300 underline underline-offset-2 transition-colors"
        >
          Digitiva
        </a>
      </footer>
    </main>
  )
}
