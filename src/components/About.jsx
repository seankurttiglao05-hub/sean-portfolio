// When you have a photo, put it in the "public" folder as profile.jpg
// and change null to '/profile.jpg'.
const photo = '/profile.jpg'

export default function About() {
  return (
    <section id="about" className="about">
      <p className="eyebrow">About</p>

      <div className="about-grid">
        {photo ? (
          <img className="avatar" src={photo} alt="Sean Tiglao" />
        ) : (
          <div className="avatar avatar-empty" aria-hidden="true">ST</div>
        )}

        <div className="about-text">
          <h2 className="hand-title">A bit about me</h2>
          <p>
            I'm Sean Tiglao, a 4th-year IT student who builds mobile apps and web systems,
        from the database up to the screen people actually use.
            
          </p>
        </div>
      </div>
    </section>
  )
}
