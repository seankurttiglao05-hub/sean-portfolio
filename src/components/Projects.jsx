import { useState } from 'react'
import ProjectCard from './ProjectCard.jsx'
import Reveal from './Reveal.jsx'
import { projects } from '../data/projects.js'

const FILTERS = ['All', 'Mobile', 'Web', 'AI']

export default function Projects() {
  const [filter, setFilter] = useState('All')

  // Keep only the projects whose categories include the chosen filter
  const shown = filter === 'All' ? projects : projects.filter((project) => project.categories.includes(filter))

  return (
    <section id="work">
      <Reveal>
        <p className="eyebrow">Selected work</p>
        <h2>Projects I built</h2>
      </Reveal>

      <div className="filters" role="group" aria-label="Filter projects">
        {FILTERS.map((name) => {
          // How many projects each tab has, shown as a small number
          const count = name === 'All' ? projects.length : projects.filter((p) => p.categories.includes(name)).length
          return (
            <button
              key={name}
              type="button"
              className={filter === name ? 'filter active' : 'filter'}
              aria-pressed={filter === name}
              onClick={() => setFilter(name)}
            >
              {name} <span className="filter-count">{count}</span>
            </button>
          )
        })}
      </div>

      {/* key={filter} restarts the slide-in animation every time the filter changes */}
      <div className="project-list" key={filter}>
        {shown.map((project, index) => (
          <Reveal key={project.id} delay={index * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
