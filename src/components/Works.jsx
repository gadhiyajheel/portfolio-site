import React, { useEffect, useRef, useState } from 'react';

const POSTERS = [
  { id: 1, src: "BRUTALISM.jpg", tag: "Typography", title: "BRUTALISM" },
  { id: 2, src: "Ethereal-2.jpg", tag: "Aesthetic", title: "ETHEREAL" },
  { id: 3, src: "Hell.1.jpg", tag: "Dark Art", title: "HELL" },
  { id: 4, src: "Nokia-4.jpg", tag: "Retro Tech", title: "NOKIA" },
  { id: 5, src: "Tornado.jpg", tag: "Nature", title: "TORNADO" },
  { id: 6, src: "arctic mokeys-4.png", tag: "Music", title: "ARCTIC MONKEYS" },
  { id: 7, src: "chasma.png", tag: "Editorial", title: "CHASMA" },
  { id: 8, src: "coke.jpg", tag: "Brand Identity", title: "COKE" },
  { id: 9, src: "condensed.jpg", tag: "Typography", title: "CONDENSED" },
  { id: 10, src: "disco light.jpg", tag: "Visual Art", title: "DISCO LIGHT" },
  { id: 11, src: "ewwww.jpg", tag: "Experimental", title: "EWWWW" },
  { id: 12, src: "him-2.jpg", tag: "Portrait", title: "HIM" },
  { id: 13, src: "matchstick.jpg", tag: "Conceptual", title: "MATCHSTICK" },
  { id: 14, src: "noctra.jpg", tag: "Dark Art", title: "NOCTRA" },
  { id: 15, src: "overdrive.jpg", tag: "Street Art", title: "OVERDRIVE" },
  { id: 16, src: "pole-3.jpg", tag: "Photography", title: "POLE" },
  { id: 17, src: "saint.jpg", tag: "Aesthetic", title: "SAINT" },
  { id: 18, src: "yanaahh.jpg", tag: "Visual Art", title: "YANAAHH" }
];

export default function Works() {
  const [activeIdx, setActiveIdx] = useState(0);
  const outerRef = useRef(null);
  const trackRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const stickyOuter = outerRef.current;
    const track = trackRef.current;
    if (!stickyOuter || !track) return;

    const N = POSTERS.length;
    const SCROLL_PER = 300;

    const totalScroll = (N - 1) * SCROLL_PER + window.innerHeight;
    stickyOuter.style.height = `${totalScroll}px`;

    let animationFrameId;

    const handleScroll = () => {
      const rect = stickyOuter.getBoundingClientRect();
      const scrollPos = -rect.top;
      const maxScroll = (N - 1) * SCROLL_PER;
      
      let p = scrollPos / maxScroll;
      if (p < 0) p = 0;
      if (p > 1) p = 1;

      // Dynamically measure properties to ensure perfect positioning across devices
      const firstCard = cardsRef.current[0];
      const actualWidth = firstCard ? firstCard.offsetWidth : (window.innerWidth <= 900 ? 320 : 520);
      const CARD_GAP = 48; 
      const STEP = actualWidth + CARD_GAP;
      
      const floatIndex = p * (N - 1);
      const viewW = window.innerWidth;
      const centerOffset = (viewW - actualWidth) / 2;
      const tx = floatIndex * STEP - centerOffset;
      
      track.style.transform = `translate3d(${-tx}px, 0, 0)`;
      
      const newActiveIdx = Math.round(floatIndex);
      setActiveIdx(newActiveIdx);

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        const dist = Math.abs(floatIndex - i);
        let scale = 1 - (dist * 0.15);
        if (scale < 0.75) scale = 0.75;
        let opacity = 1 - (dist * 0.5);
        if (opacity < 0.2) opacity = 0.2;
        
        card.style.transform = `scale(${scale})`;
        card.style.opacity = opacity;
        
        if (i === newActiveIdx) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
    };

    const updateLoop = () => {
      handleScroll();
      animationFrameId = requestAnimationFrame(updateLoop);
    };

    updateLoop();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section id="works">
      <div className="works-header">
        <div className="section-label reveal">Selected Works</div>
        <h2 className="section-title reveal reveal-delay-1">Posters that <em>tell stories</em></h2>
      </div>

      <div className="works-sticky-outer" id="worksStickyOuter" ref={outerRef}>
        <div className="works-sticky-inner" id="worksStickyInner">
          <div 
            className="works-track-wrap" 
            id="worksTrack" 
            ref={trackRef}
            onScroll={(e) => {
              if (window.innerWidth > 900) return;
              const scrollLeft = e.target.scrollLeft;
              const itemWidth = e.target.children[0].offsetWidth + 24; // 1.5rem gap = 24px
              const index = Math.round(scrollLeft / itemWidth);
              setActiveIdx(index);
            }}
          >
            {POSTERS.map((poster, i) => (
              <div 
                className="poster-card hoverable" 
                key={poster.id}
                ref={el => cardsRef.current[i] = el}
              >
                <div className="poster-img-wrap">
                  <img className="poster-img" src={`/${poster.src}`} alt={`${poster.title} Poster`} loading="lazy" />
                  <div className="poster-depth-layer"></div>
                </div>
                <div className="poster-card-overlay"></div>
                <div className="poster-card-info">
                  <span className="poster-card-tag">{poster.tag}</span>
                  <div className="poster-card-name">{poster.title}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="works-counter">
            {String(activeIdx + 1).padStart(2, '0')} / {String(POSTERS.length).padStart(2, '0')}
          </div>
        </div>
      </div>

      <div className="works-progress" id="worksProgress" style={{ padding: '2rem 0 1rem' }}>
        {POSTERS.map((_, i) => (
          <div key={i} className={`works-progress-dot ${i === activeIdx ? 'active' : ''}`}></div>
        ))}
      </div>
    </section>
  );
}
