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
  const [imgVisible, setImgVisible] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs1 = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setHeaderVisible(true); obs1.unobserve(entry.target) } },
      { threshold: 0.15 }
    )
    const obs2 = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setImgVisible(true); obs2.unobserve(entry.target) } },
      { threshold: 0.1 }
    )
    if (sectionRef.current) obs1.observe(sectionRef.current)
    if (imgRef.current) obs2.observe(imgRef.current)
    return () => { obs1.disconnect(); obs2.disconnect() }
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

        {/* Header */}
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

        {/* Two-column: timeline left, image right */}
        <div className="flex flex-col md:flex-row gap-12 mt-12 items-start">

          {/* Timeline */}
          <div className="flex-1 min-w-0">
            {timelineData.map((item, index) => (
              <TimelineItemComponent key={index} item={item} index={index} />
            ))}
          </div>

          {/* Walking image — sticky on desktop */}
          <div
            ref={imgRef}
            className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-end"
            style={{
              opacity: imgVisible ? 1 : 0,
              transform: imgVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
            }}
          >
            <div
              className="relative md:sticky"
              style={{ top: '8rem' }}
            >
              {/* Decorative frame behind */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  border: '1px solid rgba(196, 149, 106, 0.15)',
                  borderRadius: 12,
                  transform: 'rotate(3deg) translate(-14px, 14px)',
                  zIndex: 0,
                }}
              />
              {/* Gold accent line left */}
              <div
                style={{
                  position: 'absolute',
                  left: -20,
                  top: '15%',
                  width: 2,
                  height: '70%',
                  background: 'linear-gradient(to bottom, transparent, #C4956A, transparent)',
                  borderRadius: 2,
                  zIndex: 2,
                }}
              />
              <img
                src={'/assets/walking.png'}
                alt="Mourad Nouioua"
                style={{
                  width: 300,
                  maxWidth: '100%',
                  borderRadius: 12,
                  border: '1px solid #222222',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
                  display: 'block',
                  position: 'relative',
                  zIndex: 1,
                  objectFit: 'cover',
                }}
              />
              {/* Caption */}
              <p
                className="font-mono text-center mt-3"
                style={{ fontSize: '0.6rem', color: '#555555', letterSpacing: '0.15em', textTransform: 'uppercase' }}
              >
                Al-Khobar · KFUPM · 2024–Present
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
