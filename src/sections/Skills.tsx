import { useEffect, useRef, useState } from 'react'

const skillCategories = [
  {
    label: 'Diagnostics & Monitoring',
    color: '#5A8A9A',
    skills: ['Vibration Analysis', 'Condition Monitoring', 'Tool Wear Prediction', 'Fault Diagnosis', 'Acoustic Emission', 'Signal Processing'],
  },
  {
    label: 'AI & Data Science',
    color: '#C4956A',
    skills: ['Machine Learning', 'Ensemble Learning', 'AutoML', 'Feature Extraction', 'Multi-sensor Fusion', 'XGBoost', 'VMD'],
  },
  {
    label: 'Industrial Systems',
    color: '#5A8A9A',
    skills: ['IIoT Platforms', 'Edge Computing', 'Cloud Monitoring', 'Smart Data Acquisition', 'Rotating Machinery', 'CNC Manufacturing'],
  },
  {
    label: 'Engineering Tools',
    color: '#C4956A',
    skills: ['MATLAB', 'Python', 'SolidWorks', 'Minitab', 'ADRE 408 DSPi', 'Bently Nevada'],
  },
]

export default function Skills() {
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
      id="skills"
      ref={sectionRef}
      style={{ backgroundColor: '#08080A', padding: '7rem 2.5rem', borderTop: '1px solid #1E1E22' }}
    >
      <div className="mx-auto" style={{ maxWidth: 1200 }}>

        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
            marginBottom: '3.5rem',
          }}
        >
          <span className="font-mono text-xs uppercase" style={{ color: '#C4956A', letterSpacing: '0.2em' }}>Expertise</span>
          <h2 className="font-heading mt-3" style={{ fontSize: 'clamp(2rem,3.5vw,2.8rem)', color: '#F0EFEA', fontWeight: 300, lineHeight: 1.15 }}>
            Technical Competencies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ border: '1px solid #1E1E22', borderRadius: 8, overflow: 'hidden' }}>
          {skillCategories.map((cat, i) => (
            <div
              key={cat.label}
              style={{
                padding: '2rem 2.25rem',
                borderRight: i % 2 === 0 ? '1px solid #1E1E22' : 'none',
                borderBottom: i < 2 ? '1px solid #1E1E22' : 'none',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.7s ease ${i * 0.08}s, transform 0.7s ease ${i * 0.08}s`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.1rem' }}>
                <div style={{ width: 3, height: 14, backgroundColor: cat.color, borderRadius: 2 }} />
                <span className="font-mono text-xs uppercase" style={{ color: '#505058', letterSpacing: '0.12em' }}>{cat.label}</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className="font-mono text-xs transition-all duration-250 cursor-default"
                    style={{ color: '#8A8A90', border: '1px solid #1E1E22', borderRadius: 3, padding: '0.3rem 0.7rem' }}
                    onMouseEnter={e => {
                      const el = e.currentTarget
                      el.style.borderColor = cat.color
                      el.style.color = cat.color
                      el.style.backgroundColor = `${cat.color}0D`
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget
                      el.style.borderColor = '#1E1E22'
                      el.style.color = '#8A8A90'
                      el.style.backgroundColor = 'transparent'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
