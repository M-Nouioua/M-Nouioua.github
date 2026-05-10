import { useEffect, useRef, useState } from 'react'
import FloatingIcosahedron from '@/components/FloatingIcosahedron'

interface StatItemProps {
  value: string
  label: string
  delay: number
}

function StatItem({ value, label, delay }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="text-center relative"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      <div
        className="font-heading"
        style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', color: '#C4956A', fontWeight: 400, lineHeight: 1 }}
      >
        {value}
      </div>
      <div className="font-mono text-xs uppercase mt-3" style={{ color: '#555555', letterSpacing: '0.1em' }}>
        {label}
      </div>
    </div>
  )
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null)
  const [headerVisible, setHeaderVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true)
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
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        backgroundColor: '#0A0A0B',
        padding: '6rem 2rem',
        borderTop: '1px solid #222222',
        borderBottom: '1px solid #222222',
      }}
    >
      <FloatingIcosahedron size={2.5} color="#C4956A" opacity={0.08} speed={0.002} left="5%" top="10%" />
      <FloatingIcosahedron size={1.8} color="#5A8A9A" opacity={0.06} speed={0.003} right="8%" top="20%" />
      <FloatingIcosahedron size={2} color="#C4956A" opacity={0.05} speed={0.0015} right="20%" bottom="10%" />

      <div className="mx-auto relative" style={{ maxWidth: 1200, zIndex: 1 }}>
        <div
          className="text-center mb-12"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <span className="font-mono text-xs uppercase" style={{ color: '#C4956A', letterSpacing: '0.15em' }}>
            Google Scholar Metrics
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatItem value="1002+" label="Citations" delay={0} />
          <StatItem value="17" label="h-index" delay={0.1} />
          <StatItem value="20" label="i10-index" delay={0.2} />
          <StatItem value="50+" label="Publications" delay={0.3} />
        </div>

        <div className="text-center mt-8">
          <a
            href="https://scholar.google.com/citations?user=tEKyL0UAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs transition-colors duration-300 hover:text-[#D4AA7D]"
            style={{ color: '#C4956A', textDecoration: 'none', letterSpacing: '0.05em' }}
          >
            View full profile on Google Scholar →
          </a>
        </div>
      </div>
    </section>
  )
}
