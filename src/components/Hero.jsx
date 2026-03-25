import React from 'react';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-orb"></div>
      <div className="hero-eyebrow">Creative Designer · Visual Storyteller · Poster Artist</div>
      <h1 className="hero-title">
        <span className="chrome-text">PORTFOLIO</span><br />
        <span className="glow-text">SHOWCASE</span>
      </h1>
      <p className="hero-sub">
        Turning ideas into visuals that stop the scroll. Design that doesn't just look good — it feels like something.
      </p>
      <div className="hero-ctas">
        <a href="#works" className="btn-primary hoverable">View Work</a>
        <a href="#contact" className="btn-secondary hoverable">Get in Touch</a>
      </div>
      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
