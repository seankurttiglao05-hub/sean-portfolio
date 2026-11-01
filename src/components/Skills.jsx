import { skills } from '../data/skills.js'
import Reveal from './Reveal.jsx'

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <p className="eyebrow">Tech stack</p>
      <h2 className="hand-title">Tools I build with</h2>

      <ul className="skill-list">
        {skills.map((skill, index) => {
          const Icon = skill.icon

          return (
            <Reveal as="li" key={skill.name} delay={index * 40}>
              <span className="skill-icon" aria-hidden="true">
                <Icon style={{ color: skill.color }} />
              </span>
              {skill.name}
              {skill.learning && <span className="learning">Learning</span>}
              {skill.basic && <span className="learning">Basic</span>}
            </Reveal>
          )
        })}
      </ul>
    </section>
  )
}
