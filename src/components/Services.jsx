import React from 'react';

export default function Services() {
  return (
    <section id="services">
      <div className="section-label reveal">What I Do</div>
      <h2 className="section-title reveal reveal-delay-1">Services built for <em>ambitious visions</em></h2>
      <div className="services-grid">
        <div className="service-card hoverable reveal reveal-delay-1">
          <div className="service-num">01</div>
          <div className="service-icon">🎨</div>
          <div className="service-name">Brand & Identity</div>
          <div className="service-desc">Complete visual identity from logo systems to full brand guidelines — designed to endure.</div>
        </div>
        <div className="service-card hoverable reveal reveal-delay-2">
          <div className="service-num">02</div>
          <div className="service-icon">🖼️</div>
          <div className="service-name">Custom Posters</div>
          <div className="service-desc">Focusing on creative visuals, storytelling, and highly aesthetic compositions tailored to leave a lasting impact.</div>
        </div>
        <div className="service-card hoverable reveal reveal-delay-3">
          <div className="service-num">03</div>
          <div className="service-icon">🎬</div>
          <div className="service-name">Video Editing</div>
          <div className="service-desc">Delivering cinematic edits, perfectly timed smooth transitions, and compelling visual storytelling to drive maximum engagement.</div>
        </div>
        <div className="service-card hoverable reveal reveal-delay-4">
          <div className="service-num">04</div>
          <div className="service-icon">✦</div>
          <div className="service-name">Social Media Design</div>
          <div className="service-desc">Eye-catching content built for feeds — optimized for scroll-stopping impact and brand consistency.</div>
        </div>
      </div>
    </section>
  );
}
