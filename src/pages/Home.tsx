import Navigation from '@/components/Navigation'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Stats from '@/sections/Stats'
import Conference from '@/sections/Conference'
import Experience from '@/sections/Experience'
import PublicationsSection from '@/sections/Publications'
import Skills from '@/sections/Skills'
import Contact from '@/sections/Contact'

export default function Home() {
  return (
    <div style={{ backgroundColor: '#08080A', minHeight: '100vh' }}>
      <Navigation />
      <Hero />
      <About />
      <Stats />
      <Conference />
      <Experience />
      <PublicationsSection />
      <Skills />
      <Contact />
    </div>
  )
}
