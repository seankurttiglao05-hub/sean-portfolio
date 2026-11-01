import { useState } from 'react'
import { contacts } from '../data/contacts.js'
import Reveal from './Reveal.jsx'

const EMAIL = 'seankurttiglao05@gmail.com'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL) // puts the email in the clipboard
      setCopied(true)
      setTimeout(() => setCopied(false), 2000) // back to "Copy email" after 2 seconds
    } catch {
      window.location.href = `mailto:${EMAIL}` // if copying is blocked, open the email app instead
    }
  }

  return (
    <section id="contact" className="contact">
      <Reveal className="contact-head">
        <h2 className="hand-title">Get in touch</h2>
        <p className="contact-intro">Hiring, have a project, or just want to say hi? Reach me on any of these:</p>
        <div className="cta">
          <button type="button" className="btn primary" onClick={copyEmail}>
            {copied ? '✓ Email copied' : 'Copy my email'}
          </button>
          <a className="btn" href={`mailto:${EMAIL}`}>
            Send an email
          </a>
        </div>
        {/* Screen readers announce "Email copied" when it changes */}
        <p className="sr-only" aria-live="polite">
          {copied ? 'Email copied' : ''}
        </p>
      </Reveal>

      <ul className="contact-list">
        {contacts.map((contact, index) => {
          const Icon = contact.icon
          return (
            <Reveal as="li" key={contact.id} delay={index * 60}>
              <a href={contact.href} target="_blank" rel="noopener noreferrer">
                <Icon aria-hidden="true" />
                {contact.label}
                <span className="arrow" aria-hidden="true">→</span>
              </a>
            </Reveal>
          )
        })}
      </ul>
    </section>
  )
}
