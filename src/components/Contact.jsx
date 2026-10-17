import { contacts } from '../data/contacts.js'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="hand-title">Get in touch</h2>
      <p className="contact-intro">
        Just want to say hi?
        Reach me on any of these:
      </p>

      <ul className="contact-list">
        {contacts.map((contact) => {
          const Icon = contact.icon

          return (
            <li key={contact.id}>
              <a href={contact.href} target="_blank" rel="noopener noreferrer">
                <Icon aria-hidden="true" />
                {contact.label}
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
