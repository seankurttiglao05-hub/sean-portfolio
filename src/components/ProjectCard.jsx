export default function ProjectCard({ name, role, summary, points, tags }) {
  return (
    <article className="project">
      <p className="role">{role}</p>
      <h3>{name}</h3>
      <p>{summary}</p>

      <ul className="points">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      <ul className="tags">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  )
}