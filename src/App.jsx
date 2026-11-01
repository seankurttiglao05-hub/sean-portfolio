import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <div className="wrap">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
      <BackToTop />
    </>
  )
}
