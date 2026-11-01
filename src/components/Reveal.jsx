import { useInView } from '../hooks/useInView.js'

// Wraps anything so it slides up gently the first time it scrolls into view.
// delay lets cards in a list appear one after another (0, 100, 200 ms...).
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }) {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
