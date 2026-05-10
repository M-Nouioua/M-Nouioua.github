import { useEffect, useRef, useState } from 'react'
import FloatingIcosahedron from '@/components/FloatingIcosahedron'

interface TimelineItem {
  date: string
  title: string
  org: string
  description: string
}

const timelineData: TimelineItem[] = [
  {
    date: 'Sep 2024 – Present',
    title: 'Postdoctoral Researcher',
    org: 'King Fahd University of Petroleum and Minerals, Al-Khobar, Saudi Arabia',
    description:
      'Leading development of real-time vibration-based diagnostic systems for rotating and cutting machinery. Integrating multi-sensor data (vibration, force, vision) with AI-based diagnostic tools for Industrial IoT platforms and predictive maintenance frameworks.',
  },
  {
    date: 'Dec 2020 – Sep 2024',
    title: 'Senior Researcher & Head of Machining Process Division',
    org: 'Mechanics Research Centre, Constantine, Algeria',
    description:
      'Directed diagnostic studies on machining performance using vibration and acoustic emission sensors. Led Industry 4.0 research integrating smart sensing, signal processing, machine learning, and process optimization.',
  },
  {
    date: 'Mar 2017 – Dec 2020',
    title: 'Maintenance Engineer',
    org: 'HUPP-Pharmaceutical, Constantine, Algeria',
    description:
      'Performed preventive and corrective maintenance on pharmaceutical production equipment (Bosch, Marchesini, Romaco systems). Selected for maintenance activities at a site in collaboration with Jamjoom Pharma.',
  },
]

function TimelineItemComponent({ item, index }: { item: TimelineItem; index: number }) {
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
      className="relative flex gap-6 md:gap-8"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s`,
      }}
    >
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="rounded-full flex-shrink-0"
          style={{ width: 10, height: 10, backgroundColor: '#C4956A', boxShadow: '0 0 12px rgba(196, 149, 106, 0.4)', marginTop: 6 }}
        />
        {index < timelineData.length - 1 && (
          <div className="w-px flex-grow" style={{ backgroundColor: '#222222', minHeight: 60 }} />
        )}
      </div>

      <div className="pb-10">
        <span className="font-mono text-xs" style={{ color: '#555555' }}>{item.date}</span>
        <h3 className="font-body mt-1" style={{ fontSize: '1.25rem', color: '#F5F5F0', fontWeight: 500 }}>{item.title}</h3>
        <p className="font-body mt-1" style={{ fontSize: '0.875rem', color: '#8A8A8A' }}>{item.org}</p>
        <p className="font-body mt-3" style={{ fontSize: '0.875rem', color: '#8A8A8A', lineHeight: 1.7, maxWidth: 640 }}>
          {item.description}
        </p>
      </div>
    </div>
  )
}

export default function Experience() {
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
      id="experience"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ backgroundColor: '#121214', padding: '8rem 2rem' }}
    >
      <FloatingIcosahedron size={2} color="#C4956A" opacity={0.07} speed={0.002} right="5%" top="15%" />
      <FloatingIcosahedron size={1.5} color="#5A8A9A" opacity={0.06} speed={0.003} left="2%" top="70%" />

      <div className="mx-auto relative" style={{ maxWidth: 1200, zIndex: 1 }}>
        <div
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <span className="font-mono text-xs uppercase" style={{ color: '#C4956A', letterSpacing: '0.15em' }}>Experience</span>
          <h2 className="font-heading mt-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#F5F5F0', fontWeight: 400, lineHeight: 1.1 }}>
            Career Path
          </h2>
        </div>

        <div className="mt-12">
          {timelineData.map((item, index) => (
            <TimelineItemComponent key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
