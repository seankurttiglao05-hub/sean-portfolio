import { useEffect, useState } from 'react'

// A round button that appears after you scroll down, and takes you back to the top.
export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // Show it once you've scrolled more than one screen down
    const onScroll = () => setShow(window.scrollY > window.innerHeight)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true }) // passive: doesn't slow down scrolling
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a href="#top" className={show ? 'back-to-top show' : 'back-to-top'} aria-label="Back to top" tabIndex={show ? 0 : -1}>
      ↑
    </a>
  )
}
