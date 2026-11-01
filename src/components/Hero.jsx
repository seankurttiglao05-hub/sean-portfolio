import { useEffect, useState } from 'react'

// The words that get "typed" one after another
const WORDS = ['mobile apps', 'web systems', 'AI tools', 'full-stack projects']

// People who turn on "reduce motion" in their phone or computer settings get no typing animation
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0) // which word we're on
  const [letters, setLetters] = useState(0) // how many letters are showing
  const [deleting, setDeleting] = useState(false) // typing forward or erasing

  useEffect(() => {
    if (reduceMotion) return // no animation; the full sentence is shown instead
    const word = WORDS[wordIndex]

    let delay = deleting ? 45 : 85 // erasing is faster than typing
    if (!deleting && letters === word.length) delay = 1600 // pause on the full word

    const timer = setTimeout(() => {
      if (!deleting && letters === word.length) {
        setDeleting(true) // finished typing → start erasing
      } else if (deleting && letters === 0) {
        setDeleting(false) // finished erasing → next word
        setWordIndex((wordIndex + 1) % WORDS.length) // % wraps back to the first word
      } else {
        setLetters(letters + (deleting ? -1 : 1))
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [letters, deleting, wordIndex])

  return (
    <header className="hero" id="top">
      <p className="status">
        <span className="status-dot" aria-hidden="true" />
        Open to part-time and remote work
      </p>

      <h1>
        <span className="hello">Hi, I'm</span>
        <span className="name">sean.dev</span>
      </h1>

      {/* aria-label gives screen readers a calm sentence instead of the typing letters */}
      <p className="lede" aria-label="I build mobile apps, web systems and AI tools.">
        <span aria-hidden="true">
          I build{' '}
          {reduceMotion ? (
            <span className="typed">mobile apps, web systems and AI tools</span>
          ) : (
            <>
              <span className="typed">{WORDS[wordIndex].slice(0, letters)}</span>
              <span className="caret" />
            </>
          )}
        </span>
      </p>

      <div className="cta">
        <a className="btn primary" href="#work">
          See my work
        </a>
        <a className="btn" href="#contact">
          Get in touch
        </a>
      </div>
    </header>
  )
}
