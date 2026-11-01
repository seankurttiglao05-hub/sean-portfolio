import { useEffect, useRef, useState } from 'react'
import { useInView } from '../hooks/useInView.js'
import VideoModal from './VideoModal.jsx'


function CardVideo({ media, name, onOpen, paused }) {
  const videoRef = useRef(null)
  const [ref, inView] = useInView({ once: false, threshold: 0.5 })
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

 
    if (inView && !paused && !reduceMotion) video.play().catch(() => {})
    else video.pause()
  }, [inView, paused])

  const video = (
    <video
      ref={videoRef}
      poster={media.poster}
      muted={muted}
      loop
      playsInline
      preload="metadata"
      aria-hidden={onOpen ? 'true' : undefined} 
      aria-label={onOpen ? undefined : `${name} demo video`}
    >
      {}
      {media.webm && <source src={media.webm} type="video/webm" />}
      <source src={media.src} type="video/mp4" />
    </video>
  )

  
  if (onOpen) {
    return (
      <div ref={ref} className="media-video vertical">
        <button type="button" className="video-open" onClick={onOpen} aria-label={`Play ${name} promo video with sound`}>
          {video}
          <span className="tap-hint" aria-hidden="true">▶ Tap to watch with sound</span>
        </button>
      </div>
    )
  }

  return (
    <div ref={ref} className="media-video">
      {video}
      <button
        type="button"
        className="sound-btn"
        onClick={() => setMuted(!muted)}
        aria-pressed={!muted}
      >
        {muted ? 'Sound off' : 'Sound on'}
      </button>
    </div>
  )
}

export default function ProjectCard({ project }) {
  const { name, role, summary, points, tags, live, code, media, featured } = project
  
  const [modalVideo, setModalVideo] = useState(null)

 
  function handleMouseMove(event) {
    const box = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--x', `${event.clientX - box.left}px`)
    event.currentTarget.style.setProperty('--y', `${event.clientY - box.top}px`)
  }

  const classes = ['project', media ? `has-${media.type}` : '', featured ? 'featured' : '']

  return (
    <article className={classes.join(' ')} onMouseMove={handleMouseMove}>
      {media?.type === 'video' && (
        <CardVideo
          media={media}
          name={name}
          paused={modalVideo !== null}
          
          onOpen={
            media.vertical
              ? () => setModalVideo({ src: media.src, poster: media.poster, title: `${name} promo`, vertical: true })
              : undefined
          }
        />
      )}

      <div className="project-text">
        <p className="role">
          {featured && <span className="featured-badge">Featured</span>}
          {role}
        </p>
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

        {(live || code || media?.full) && (
          <div className="cta project-link">
            {media?.full && (
              <button
                type="button"
                className="btn primary"
                onClick={() => setModalVideo({ src: media.full, title: `${name} full demo` })}
              >
                ▶ Watch full demo
              </button>
            )}
            {live && (
              <a className={media?.full ? 'btn' : 'btn primary'} href={live} target="_blank" rel="noreferrer">
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

      {media?.type === 'phone' && (
        <img className="project-shot" src={media.src} alt={`${name} app screenshot`} loading="lazy" />
      )}
      {media?.type === 'browser' && (
        <div className="browser-shot">
          <span className="browser-dots" aria-hidden="true" />
          <img src={media.src} alt={`${name} website screenshot`} loading="lazy" />
        </div>
      )}

      {}
      {modalVideo && (
        <VideoModal
          src={modalVideo.src}
          poster={modalVideo.poster}
          title={modalVideo.title}
          vertical={modalVideo.vertical}
          onClose={() => setModalVideo(null)}
        />
      )}
    </article>
  )
}
