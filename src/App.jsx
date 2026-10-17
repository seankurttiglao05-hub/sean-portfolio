import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { projects } from './data/projects.js'

export default function App() {
  return (
    <>
      <Nav />
      <div className="wrap">
        <Hero />
        <About />

        <section id="work">
          <p className="eyebrow">Selected work</p>
          <h2>Projects I built</h2>

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              role={project.role}
              summary={project.summary}
              points={project.points}
              tags={project.tags}
            />
          ))}
        </section>

        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
