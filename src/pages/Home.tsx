import Navigation from '@/components/Navigation'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Stats from '@/sections/Stats'
import Experience from '@/sections/Experience'
import PublicationsSection from '@/sections/Publications'
import Skills from '@/sections/Skills'
import Contact from '@/sections/Contact'

export default function Home() {
  return (
    <div style={{ backgroundColor: '#0A0A0B', minHeight: '100vh' }}>
      <Navigation />
      <Hero />
      <About />
      <Stats />
      <Experience />
      <PublicationsSection />
      <Skills />
      <Contact />
    </div>
  )
}
