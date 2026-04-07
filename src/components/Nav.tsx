import { useEffect, useRef } from 'react'

export default function Nav() {
  const linksRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]')
    const ul = linksRef.current
    if (!ul) return

    const navLinks = ul.querySelectorAll<HTMLAnchorElement>('a')

    const handleScroll = () => {
      let current = ''
      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 100) current = sec.id
      })
      navLinks.forEach((link) => {
        link.style.color =
          link.getAttribute('href') === `#${current}` ? 'var(--text)' : ''
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav>
      <div className="nav-inner">
        <span className="nav-logo">Grace.</span>
        <ul ref={linksRef}>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}
