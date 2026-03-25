import React, { useRef } from 'react';

const VIDEO_DATA = [
  { id: 1, src: "azdsgvgbazdbg.mp4", tag: "Edit", title: "AZDSGVGBAZDBG" },
  { id: 2, src: "bablu ka edit.mp4", tag: "Edit", title: "BABLU KA EDIT" },
  { id: 3, src: "cha bbg.mp4", tag: "Edit", title: "CHA BBG" },
  { id: 4, src: "final ds.mp4", tag: "Cinematic", title: "FINAL DS" },
  { id: 5, src: "muzhaat final_1.mp4", tag: "Cinematic", title: "MUZHAAT FINAL 1" },
  { id: 6, src: "toji hell yeah.mp4", tag: "AMV", title: "TOJI HELL YEAH" },
  { id: 7, src: "zorooooo.mp4", tag: "AMV", title: "ZOROOOOO" }
];

function VideoCard({ src, tag, title }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(e => console.log("Audio play prevented:", e));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.muted = true;
    }
  };

  return (
    <div 
      className="video-card hoverable" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <video ref={videoRef} src={`/${src}`} muted loop playsInline></video>
      <div className="video-play-icon">▶</div>
      <div className="video-overlay">
        <div className="video-type-tag">{tag}</div>
        <div className="video-title">{title}</div>
      </div>
    </div>
  );
}

export default function Videos() {
  return (
    <section id="videos">
      <div className="section-label reveal">Cinematic Edits</div>
      <h2 className="section-title reveal reveal-delay-1">Motion that <em>captivates</em></h2>

      <div className="videos-grid reveal reveal-delay-2">
        {VIDEO_DATA.map(vid => (
          <VideoCard key={vid.id} src={vid.src} tag={vid.tag} title={vid.title} />
        ))}
      </div>
    </section>
  );
}
