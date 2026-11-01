import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

// A pop-up that plays a video (the full demo, or the tall promo when vertical is true). Closes with the X button, Esc, or clicking outside.
export default function VideoModal({ src, poster, title, vertical = false, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    dialog.showModal() // <dialog> is built into HTML: it dims the page and traps keyboard focus
    document.body.style.overflow = 'hidden' // stop the page behind from scrolling

    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  // Clicking the dark area around the video closes it.
  // event.target is the <dialog> itself only when you click outside the inner box.
  function handleClick(event) {
    if (event.target === dialogRef.current) onClose()
  }

  // createPortal puts the pop-up directly inside <body> instead of inside the project card.
  // The card moves and clips its content on hover, which can confuse a pop-up placed inside it.
  return createPortal(
    <dialog ref={dialogRef} className={vertical ? 'video-modal vertical' : 'video-modal'} onClose={onClose} onClick={handleClick} aria-label={title}>
      <div className="video-modal-box">
        <div className="video-modal-head">
          <p>{title}</p>
          <button type="button" className="icon-btn" onClick={onClose} aria-label="Close video">
            ✕
          </button>
        </div>
        {/* preload="none": the video only downloads when this pop-up opens */}
        <video src={src} poster={poster} controls autoPlay playsInline preload="none" />
      </div>
    </dialog>,
    document.body,
  )
}
