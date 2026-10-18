import { useState, useEffect } from 'react'
import { TbSun, TbMoon } from 'react-icons/tb'

function getStartingTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // Storage can be blocked; fall back to the device setting.
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getStartingTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // Ignore: the toggle still works for this visit.
    }
  }, [theme])

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      <span className="theme-knob">
        {isDark ? <TbMoon /> : <TbSun />}
      </span>
    </button>
  )
}
