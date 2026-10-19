export default function ProjectCard({ name, role, summary, points, tags, live, code, image }) {
  return (
    <article className={image ? 'project has-shot' : 'project'}>
      <div className="project-text">
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

        {(live || code) && (
          <div className="cta project-link">
            {live && (
              <a className="btn primary" href={live} target="_blank" rel="noreferrer">
                Open the app
              </a>
            )}
            {code && (
              <a className="btn" href={code} target="_blank" rel="noreferrer">
                View code
              </a>
            )}
          </div>
        )}
      </div>

      {image && (
        <img className="project-shot" src={image} alt={`${name} app screenshot`} loading="lazy" />
      )}
    </article>
  )
}