import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle.jsx'

const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [active, setActive] = useState('') 

  
  useEffect(() => {
    const sections = links.map((link) => document.querySelector(link.href)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        }
      },
      // Only the middle band of the screen counts, so one section is "active" at a time
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="logo" href="#top">sean<span>.dev</span></a>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.href ? 'active' : ''}
                aria-current={active === link.href ? 'true' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  )
}
