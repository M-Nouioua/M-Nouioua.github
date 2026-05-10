import { useEffect, useState, useCallback } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Research', href: '#research' },
  { label: 'Publications', href: '#publications' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.5)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(10, 10, 11, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid #222222' : '1px solid transparent',
        }}
      >
        <div
          className="flex items-center justify-between mx-auto"
          style={{ maxWidth: 1200, height: 64, padding: '0 2rem' }}
        >
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="font-body text-sm tracking-widest uppercase"
            style={{ color: '#F5F5F0', fontWeight: 500, textDecoration: 'none' }}
          >
            N. Mourad
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-body text-sm transition-colors duration-300 hover:text-[#C4956A]"
                style={{ color: '#8A8A8A', textDecoration: 'none', fontWeight: 400 }}
              >
                {link.label}
              </a>
            ))}
            <div className="w-px h-4 bg-[#222222]" />
            <a
              href="https://scholar.google.com/citations?user=tEKyL0UAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs transition-colors duration-300 hover:text-[#C4956A]"
              style={{ color: '#555555', textDecoration: 'none' }}
            >
              Scholar
            </a>
            <a
              href="https://www.linkedin.com/in/mourad-nouioua"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs transition-colors duration-300 hover:text-[#C4956A]"
              style={{ color: '#555555', textDecoration: 'none' }}
            >
              LinkedIn
            </a>
            <a
              href="https://orcid.org/0000-0003-0439-2112"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs transition-colors duration-300 hover:text-[#C4956A]"
              style={{ color: '#555555', textDecoration: 'none' }}
            >
              ORCID
            </a>
          </div>

          <button className="md:hidden flex items-center justify-center" onClick={() => setMobileOpen(!mobileOpen)} style={{ color: '#F5F5F0' }} aria-label="Toggle menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden" style={{ backgroundColor: 'rgba(10, 10, 11, 0.97)', backdropFilter: 'blur(20px)' }}>
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="font-body text-2xl transition-colors duration-300 hover:text-[#C4956A]" style={{ color: '#F5F5F0', textDecoration: 'none', fontWeight: 400 }}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
