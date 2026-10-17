import { contacts } from '../data/contacts.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-top">
        <a className="logo" href="#top">sean<span>.dev</span></a>
        <p>© {year} Sean Yumul Tiglao</p>
      </div>

      <ul className="socials">
        {contacts.map((contact) => {
          const Icon = contact.icon

          return (
            <li key={contact.id}>
              <a
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={contact.name}
              >
                <Icon />
              </a>
            </li>
          )
        })}
      </ul>
    </footer>
  )
}
