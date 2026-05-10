import { ChevronDown } from 'lucide-react'
import IcosahedronScene from '@/components/IcosahedronScene'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: 600 }}
    >
      {/* 3D Canvas Background */}
      <IcosahedronScene />

      {/* Gradient overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background: 'linear-gradient(to bottom, rgba(10,10,11,0.3), rgba(10,10,11,0.7))',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        className="relative flex flex-col items-center justify-center text-center px-4"
        style={{ zIndex: 2, height: '100%' }}
      >
        {/* Badge */}
        <span
          className="font-mono text-xs tracking-wider uppercase inline-block mb-6"
          style={{
            color: '#C4956A',
            border: '1px solid #222222',
            borderRadius: 9999,
            padding: '0.25rem 0.75rem',
            letterSpacing: '0.08em',
          }}
        >
          PhD · Mechanical Engineering · Predictive Maintenance
        </span>

        {/* Name */}
        <h1
          className="font-heading tracking-tight"
          style={{
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            color: '#F5F5F0',
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            margin: 0,
          }}
        >
          Nouioua Mourad
        </h1>

        {/* Divider */}
        <div
          className="mx-auto"
          style={{
            width: 80,
            height: 1,
            backgroundColor: '#C4956A',
            margin: '1.5rem auto',
          }}
        />

        {/* Tagline */}
        <p
          className="font-body uppercase tracking-widest"
          style={{
            fontSize: '1.5rem',
            color: '#8A8A8A',
            fontWeight: 300,
            letterSpacing: '0.08em',
            margin: 0,
          }}
        >
          Precision. Diagnostics. Intelligence.
        </p>

        {/* Descriptor */}
        <p
          className="font-body mx-auto"
          style={{
            fontSize: '0.875rem',
            color: '#555555',
            maxWidth: 480,
            textAlign: 'center',
            marginTop: '1.5rem',
            lineHeight: 1.7,
          }}
        >
          Postdoctoral Researcher at KFUPM · 8+ Years in Industrial IoT, Vibration Diagnostics & Smart Manufacturing
        </p>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute left-1/2 flex flex-col items-center gap-2"
        style={{
          bottom: '2rem',
          transform: 'translateX(-50%)',
          zIndex: 2,
        }}
      >
        <span
          className="font-mono text-xs"
          style={{ color: '#555555', letterSpacing: '0.05em' }}
        >
          Scroll to explore
        </span>
        <ChevronDown
          size={20}
          className="animate-bounce-slow"
          style={{ color: '#555555' }}
        />
      </div>
    </section>
  )
}
