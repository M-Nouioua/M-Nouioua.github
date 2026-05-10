import { useEffect, useRef, useState } from 'react'

const researchAreas = [
  'Vibration-Based Diagnostics',
  'Predictive Maintenance',
  'Industrial IoT',
  'Signal Processing',
  'Machine Learning',
  'Smart Manufacturing',
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(e.target) } },
      { threshold: 0.1 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="research"
      ref={sectionRef}
      style={{ backgroundColor: '#0D0D0F', padding: '7rem 2.5rem' }}
    >
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        <div className="flex flex-col md:flex-row gap-16 items-start">

          {/* Left: text */}
          <div
            className="flex-1"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <span className="font-mono text-xs uppercase" style={{ color: '#C4956A', letterSpacing: '0.2em' }}>
              Research Focus
            </span>
            <h2
              className="font-heading mt-4"
              style={{ fontSize: 'clamp(2rem,3.5vw,2.8rem)', color: '#F0EFEA', fontWeight: 300, lineHeight: 1.15, marginBottom: '1.5rem' }}
            >
              Bridging Physical Machinery<br />& Digital Intelligence
            </h2>

            <p className="font-body" style={{ fontSize: '0.9375rem', color: '#8A8A90', lineHeight: 1.85, marginBottom: '1rem' }}>
              Mechanical Engineer with 8+ years of experience spanning maintenance engineering,
              vibration-based diagnostics, smart data acquisition, and advanced manufacturing.
            </p>
            <p className="font-body" style={{ fontSize: '0.9375rem', color: '#8A8A90', lineHeight: 1.85, marginBottom: '2rem' }}>
              Skilled in rotating machinery analysis, multi-sensor data fusion, and AI-driven
              fault detection — developing tools that connect physical machines with edge computing
              devices and industrial monitoring platforms.
            </p>

            {/* Research area tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
              {researchAreas.map(area => (
                <span
                  key={area}
                  className="font-mono text-xs"
                  style={{
                    color: '#6A6A72',
                    border: '1px solid #1E1E22',
                    borderRadius: 3,
                    padding: '0.3rem 0.75rem',
                    letterSpacing: '0.04em',
                  }}
                >
                  {area}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a
                href="#publications"
                onClick={(e) => { e.preventDefault(); document.querySelector('#publications')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="font-mono text-xs transition-colors duration-300 hover:text-[#D4AA7D]"
                style={{ color: '#C4956A', textDecoration: 'none', letterSpacing: '0.08em' }}
              >
                View Publications →
              </a>
              <a
                href="https://orcid.org/0000-0003-0439-2112"
                target="_blank" rel="noopener noreferrer"
                className="font-mono text-xs transition-colors duration-300 hover:text-[#8A8A90]"
                style={{ color: '#505058', textDecoration: 'none', letterSpacing: '0.08em' }}
              >
                ORCID Profile →
              </a>
            </div>
          </div>

          {/* Right: portrait */}
          <div
            className="flex-shrink-0 flex justify-center w-full md:w-auto"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.18s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.18s',
            }}
          >
            <div style={{ position: 'relative' }}>
              {/* Decorative border */}
              <div style={{
                position: 'absolute', inset: 0,
                border: '1px solid rgba(196,149,106,0.18)',
                borderRadius: 10,
                transform: 'rotate(-3deg) translate(12px,-12px)',
                zIndex: 0,
              }} />
              <img
                src="/assets/portrait.png"
                alt="Dr. Mourad Nouioua"
                style={{
                  width: 300,
                  maxWidth: '100%',
                  borderRadius: 10,
                  border: '1px solid #1E1E22',
                  boxShadow: '0 20px 56px rgba(0,0,0,0.5)',
                  display: 'block',
                  position: 'relative',
                  zIndex: 1,
                  objectFit: 'cover',
                }}
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
