import Hero from '@/components/hero'
import Countdown from '@/components/countdown'
import Details from '@/components/details'
import MessageBox from '@/components/message-box'
import MusicPlayer from '@/components/music-player'

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-background via-purple-950/20 to-background min-h-screen">
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
    </main>
  )
}
