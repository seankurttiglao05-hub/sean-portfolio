import { useEffect, useRef, useState } from 'react'

// Tells you when an element is on screen.
// const [ref, inView] = useInView()  →  put ref on an element; inView becomes true when it's visible.
// once: true  → stays true after the first time (for "slide in" animations)
// once: false → goes back to false when it leaves the screen (for pausing a video)
export function useInView({ once = true, threshold = 0.2 } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // IntersectionObserver is built into the browser. It calls us when the element
    // enters or leaves the screen, so we don't have to check on every scroll.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect() // seen once, stop watching
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold }, // 0.2 = at least 20% of the element must be visible
    )

    observer.observe(element)
    return () => observer.disconnect() // clean up when the component is removed
  }, [once, threshold])

  return [ref, inView]
}
