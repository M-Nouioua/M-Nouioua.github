import { ChevronDown } from 'lucide-react'
import IcosahedronScene from '@/components/IcosahedronScene'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: 640 }}
    >
      <IcosahedronScene />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background: 'linear-gradient(135deg, rgba(8,8,10,0.6) 0%, rgba(8,8,10,0.35) 50%, rgba(8,8,10,0.65) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        className="relative flex flex-col items-center justify-center text-center px-6"
        style={{ zIndex: 2, height: '100%', paddingBottom: '5rem' }}
      >
        {/* Status badge */}
        <div
          className="flex items-center gap-2 font-mono text-xs mb-8"
          style={{
            color: '#8A8A90',
            border: '1px solid #1E1E22',
            borderRadius: 999,
            padding: '0.35rem 1rem',
            letterSpacing: '0.1em',
            backgroundColor: 'rgba(13,13,15,0.7)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#6DBF8A', display: 'inline-block', animation: 'pulse 2s infinite' }} />
          Postdoctoral Researcher · KFUPM · Al-Khobar
        </div>

        {/* Name */}
        <h1
          className="font-heading"
          style={{
            fontSize: 'clamp(3.5rem, 7vw, 6rem)',
            color: '#F0EFEA',
            fontWeight: 300,
            lineHeight: 1.0,
            letterSpacing: '-0.01em',
            margin: 0,
          }}
        >
          Mourad
          <br />
          <span style={{ color: '#C4956A' }}>Nouioua</span>
        </h1>

        {/* Rule */}
        <div style={{ width: 48, height: 1, background: 'linear-gradient(90deg, transparent, #C4956A, transparent)', margin: '1.75rem auto' }} />

        {/* Tagline */}
        <p
          className="font-mono text-xs uppercase tracking-widest"
          style={{ color: '#505058', letterSpacing: '0.22em', marginBottom: '1.25rem' }}
        >
          Precision · Diagnostics · Intelligence
        </p>

        {/* Descriptor */}
        <p
          className="font-body"
          style={{
            fontSize: '0.9rem',
            color: '#6A6A72',
            maxWidth: 440,
            lineHeight: 1.8,
            marginBottom: '2.5rem',
          }}
        >
          PhD in Mechanical Engineering · 8+ years in vibration diagnostics,
          predictive maintenance & Industrial AI
        </p>

        {/* CTA buttons */}
        <div className="flex gap-3 flex-wrap justify-center">
          <a
            href="#publications"
            onClick={(e) => { e.preventDefault(); document.querySelector('#publications')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="font-mono text-xs uppercase tracking-wider transition-all duration-300 hover:bg-[#D4AA7D]"
            style={{
              color: '#0D0D0F',
              backgroundColor: '#C4956A',
              border: '1px solid #C4956A',
              borderRadius: 3,
              padding: '0.7rem 1.6rem',
              textDecoration: 'none',
              letterSpacing: '0.1em',
            }}
          >
            Publications
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="font-mono text-xs uppercase tracking-wider transition-all duration-300 hover:border-[#C4956A] hover:text-[#C4956A]"
            style={{
              color: '#8A8A90',
              backgroundColor: 'transparent',
              border: '1px solid #2A2A30',
              borderRadius: 3,
              padding: '0.7rem 1.6rem',
              textDecoration: 'none',
              letterSpacing: '0.1em',
            }}
          >
            Contact
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute left-1/2 flex flex-col items-center gap-2"
        style={{ bottom: '1.75rem', transform: 'translateX(-50%)', zIndex: 2 }}
      >
        <span className="font-mono" style={{ fontSize: '0.55rem', color: '#3A3A42', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
        <ChevronDown size={16} style={{ color: '#3A3A42' }} className="animate-bounce" />
      </div>
    </section>
  )
}
