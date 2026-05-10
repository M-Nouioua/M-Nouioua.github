import { useEffect, useRef, useState } from 'react'
import FloatingIcosahedron from '@/components/FloatingIcosahedron'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="research"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ backgroundColor: '#0A0A0B', padding: '8rem 2rem' }}
    >
      <FloatingIcosahedron size={2.5} color="#C4956A" opacity={0.07} speed={0.002} right="5%" top="10%" />
      <FloatingIcosahedron size={1.8} color="#5A8A9A" opacity={0.06} speed={0.003} left="2%" top="60%" />

      <div className="mx-auto flex flex-col md:flex-row items-start gap-12 relative" style={{ maxWidth: 1200, zIndex: 1 }}>
        <div className="flex-1" style={{ minWidth: 0 }}>
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <span className="font-mono text-xs uppercase" style={{ color: '#C4956A', letterSpacing: '0.15em' }}>
              Research Focus
            </span>

            <h2 className="font-heading mt-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#F5F5F0', fontWeight: 400, lineHeight: 1.1 }}>
              Bridging Physical Machinery & Digital Intelligence
            </h2>

            <p className="font-body mt-6" style={{ fontSize: '1rem', color: '#8A8A8A', lineHeight: 1.8 }}>
              Mechanical Engineer with 8+ years of combined experience in maintenance engineering, vibration-based diagnostics, smart data acquisition, predictive maintenance, and advanced manufacturing.
            </p>

            <p className="font-body mt-4" style={{ fontSize: '1rem', color: '#8A8A8A', lineHeight: 1.8 }}>
              Skilled in rotating machinery analysis, signal processing, multi-sensor data fusion, and AI-driven fault detection for industrial systems. Experienced in developing and deploying machine-learning-based diagnostic tools that connect physical machines with sensors, data acquisition systems, edge-computing devices, and monitoring platforms.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-6">
              <a
                href="#publications"
                onClick={(e) => { e.preventDefault(); document.querySelector('#publications')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-block font-body text-sm transition-colors duration-300 hover:text-[#D4AA7D]"
                style={{ color: '#C4956A', textDecoration: 'none', fontWeight: 500 }}
              >
                View Publications →
              </a>
              <a
                href="https://scholar.google.com/citations?user=tEKyL0UAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-mono text-xs transition-colors duration-300 hover:text-[#D4AA7D]"
                style={{ color: '#555555', textDecoration: 'none' }}
              >
                Google Scholar →
              </a>
              <a
                href="https://pure.kfupm.edu.sa/en/persons/mourad-nouioua/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-mono text-xs transition-colors duration-300 hover:text-[#D4AA7D]"
                style={{ color: '#555555', textDecoration: 'none' }}
              >
                KFUPM Profile →
              </a>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 flex justify-center md:justify-end w-full md:w-auto" style={{ minWidth: 280 }}>
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
            }}
          >
            <div
              className="absolute"
              style={{
                width: '100%', height: '100%', border: '2px solid rgba(196, 149, 106, 0.15)',
                borderRadius: 12, transform: 'rotate(-4deg) translate(16px, -16px)',
                top: 0, left: 0, zIndex: 0,
              }}
            />
            <img
              src="/assets/portrait.png"
              alt="Dr. Nouioua Mourad"
              className="relative"
              style={{
                width: '100%', maxWidth: 360, borderRadius: 12,
                border: '1px solid #222222', boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                zIndex: 1, display: 'block',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
