import { useEffect, useRef, useState } from 'react'
import FloatingIcosahedron from '@/components/FloatingIcosahedron'

interface SkillCategory {
  label: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    label: 'Diagnostics & Monitoring',
    skills: ['Vibration Analysis', 'Condition Monitoring', 'Tool Wear Prediction', 'Fault Diagnosis', 'Acoustic Emission', 'Signal Processing'],
  },
  {
    label: 'AI & Data',
    skills: ['Machine Learning', 'Ensemble Learning', 'AutoML', 'Feature Extraction', 'Multi-sensor Fusion', 'Predictive Analytics'],
  },
  {
    label: 'Industrial Systems',
    skills: ['IIoT Platforms', 'Edge Computing', 'Cloud Monitoring', 'Smart Data Acquisition', 'Rotating Machinery'],
  },
  {
    label: 'Engineering Tools',
    skills: ['MATLAB', 'Python', 'SolidWorks', 'Minitab', 'ADRE 408 DSPi', 'Bently Nevada'],
  },
]

function SkillCategoryComponent({ category, index }: { category: SkillCategory; index: number }) {
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
      { threshold: 0.15 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`,
      }}
    >
      <h3 className="font-mono text-xs uppercase mb-4" style={{ color: '#555555', letterSpacing: '0.1em' }}>
        {category.label}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="font-mono text-sm transition-all duration-300 cursor-default"
            style={{ color: '#8A8A8A', border: '1px solid #222222', borderRadius: 9999, padding: '0.4rem 1rem', fontSize: '0.875rem' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1A1A1D'; e.currentTarget.style.borderColor = '#333333'; e.currentTarget.style.color = '#F5F5F0' }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = '#222222'; e.currentTarget.style.color = '#8A8A8A' }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
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
      id="skills"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ backgroundColor: '#121214', padding: '8rem 2rem' }}
    >
      <FloatingIcosahedron size={2.2} color="#5A8A9A" opacity={0.06} speed={0.0025} right="5%" top="10%" />
      <FloatingIcosahedron size={1.6} color="#C4956A" opacity={0.05} speed={0.0018} left="3%" top="60%" />

      <div className="mx-auto relative" style={{ maxWidth: 1200, zIndex: 1 }}>
        <div
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <span className="font-mono text-xs uppercase" style={{ color: '#C4956A', letterSpacing: '0.15em' }}>Expertise</span>
          <h2 className="font-heading mt-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#F5F5F0', fontWeight: 400, lineHeight: 1.1 }}>
            Technical Competencies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {skillCategories.map((category, index) => (
            <SkillCategoryComponent key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
