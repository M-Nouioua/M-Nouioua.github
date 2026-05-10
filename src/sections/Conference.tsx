import { useEffect, useRef, useState } from 'react'

export default function Conference() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(e.target) } },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id="conference"
      style={{ backgroundColor: '#08080A', padding: '7rem 2.5rem', borderTop: '1px solid #1E1E22' }}
    >
      <div className="mx-auto" style={{ maxWidth: 1200 }}>

        {/* Label */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
            marginBottom: '3.5rem',
          }}
        >
          <span className="font-mono text-xs uppercase" style={{ color: '#C4956A', letterSpacing: '0.2em' }}>
            Knowledge Transfer
          </span>
          <h2
            className="font-heading mt-3"
            style={{ fontSize: 'clamp(2rem,3.5vw,2.8rem)', color: '#F0EFEA', fontWeight: 300, lineHeight: 1.15 }}
          >
            Workshops, Lectures & Training
          </h2>
        </div>

        {/* Two-column: image left, content right */}
        <div className="flex flex-col md:flex-row gap-0" style={{ border: '1px solid #1E1E22', borderRadius: 10, overflow: 'hidden' }}>

          {/* Image column */}
          <div
            style={{
              flex: '0 0 45%',
              position: 'relative',
              overflow: 'hidden',
              minHeight: 420,
              opacity: visible ? 1 : 0,
              transform: visible ? 'scale(1)' : 'scale(1.04)',
              transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1) 0.15s, transform 1.2s cubic-bezier(0.16,1,0.3,1) 0.15s',
            }}
          >
            <img
              src="/assets/presenting.png"
              alt="Dr. Mourad Nouioua delivering a lecture"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
                display: 'block',
                filter: 'brightness(0.88) contrast(1.05)',
              }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to right, transparent 60%, #08080A)',
              pointerEvents: 'none',
            }} />
          </div>

          {/* Content column */}
          <div
            style={{
              flex: 1,
              padding: '3rem',
              backgroundColor: '#0D0D0F',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '1.75rem',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(20px)',
              transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s',
            }}
          >
            {/* Pull quote */}
            <div style={{ borderLeft: '2px solid #C4956A', paddingLeft: '1.25rem' }}>
              <p
                className="font-heading"
                style={{ fontSize: 'clamp(1.1rem,2vw,1.35rem)', color: '#F0EFEA', fontWeight: 300, lineHeight: 1.65, fontStyle: 'italic' }}
              >
                "Sharing knowledge and building practical skills — from university lectures to hands-on industrial training sessions."
              </p>
            </div>

            {/* Context */}
            <p className="font-body" style={{ fontSize: '0.9rem', color: '#8A8A90', lineHeight: 1.8 }}>
              Committed to academic teaching and professional development through structured lectures,
              technical workshops, and targeted training programs that translate research into
              actionable engineering practices.
            </p>

            {/* Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                { icon: '◈', text: 'University lectures on mechanical engineering, vibration analysis & condition monitoring' },
                { icon: '◈', text: 'Technical workshops on signal processing, machine learning tools & IIoT integration' },
                { icon: '◈', text: 'Industrial training sessions on predictive maintenance strategies & diagnostic instrumentation' },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex', gap: '0.85rem', alignItems: 'flex-start',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateX(0)' : 'translateX(10px)',
                    transition: `opacity 0.7s ease ${0.4 + i * 0.1}s, transform 0.7s ease ${0.4 + i * 0.1}s`,
                  }}
                >
                  <span className="font-mono" style={{ color: '#C4956A', fontSize: '0.7rem', marginTop: 4, flexShrink: 0 }}>{item.icon}</span>
                  <span className="font-body" style={{ fontSize: '0.825rem', color: '#6A6A72', lineHeight: 1.65 }}>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', paddingTop: '0.75rem', borderTop: '1px solid #1E1E22' }}>
              <a
                href="https://scholar.google.com/citations?user=tEKyL0UAAAAJ"
                target="_blank" rel="noopener noreferrer"
                className="font-mono text-xs transition-colors duration-300 hover:text-[#D4AA7D]"
                style={{ color: '#C4956A', textDecoration: 'none', letterSpacing: '0.08em' }}
              >
                Google Scholar →
              </a>
              <a
                href="https://pure.kfupm.edu.sa/en/persons/mourad-nouioua/"
                target="_blank" rel="noopener noreferrer"
                className="font-mono text-xs transition-colors duration-300 hover:text-[#8A8A90]"
                style={{ color: '#505058', textDecoration: 'none', letterSpacing: '0.08em' }}
              >
                KFUPM Profile →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
