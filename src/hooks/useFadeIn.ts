import { useEffect, useRef } from 'react'

export function useFadeIn<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = el.querySelectorAll<HTMLElement>(
      '.project-card, .info-card, .contact-card, .section-title, .about-text p'
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    targets.forEach((target) => {
      target.classList.add('fade-in')
      observer.observe(target)
    })

    return () => observer.disconnect()
  }, [])

  return ref
}
