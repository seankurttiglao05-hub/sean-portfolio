import { skills } from '../data/skills.js'

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <p className="eyebrow">Tech stack</p>
      <h2 className="hand-title">Tools I build with</h2>

      <ul className="skill-list">
        {skills.map((skill) => {
          const Icon = skill.icon

          return (
            <li key={skill.name}>
              <span className="skill-icon" aria-hidden="true">
                <Icon style={{ color: skill.color }} />
              </span>
              {skill.name}
              {skill.learning && <span className="learning">Learning</span>}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
