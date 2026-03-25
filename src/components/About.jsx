import React from 'react';

export default function About() {
  return (
    <section id="about">
      <div className="about-inner">
        <div className="about-visual">
          <div className="about-ring"></div>
          <div className="about-ring"></div>
          <div className="about-ring"></div>
          <div className="about-avatar-wrap">
            <div className="about-avatar-fill">✦</div>
          </div>
          <div className="about-floating-tag t1">Designing since 14</div>
          <div className="about-floating-tag t2">Freelance Ready</div>
          <div className="about-floating-tag t3">✦ Self-Taught</div>
        </div>
        <div className="about-content">
          <div className="section-label reveal">About Me</div>
          <h2 className="section-title reveal reveal-delay-1">Young in age,<br /><em>sharp in vision</em></h2>
          <p className="about-body reveal reveal-delay-2">
            I'm 17 — and I've been designing since I was 14. Not because someone told me to, but because making things
            that didn't exist before is the only thing that actually keeps my attention. I took Science with Maths not
            because I had to, but because I don't like theory for theory's sake. Engineering was never the plan — design
            always was.
          </p>
          <p className="about-body reveal reveal-delay-3">
            I chose to pursue design because it sits right at the edge of thinking and making. Every poster, every visual,
            every layout is a problem I get to solve with aesthetics. I've already done 3–4 freelance projects and I'm
            just getting started. The best thing about starting young? You're fearless enough to try anything — and hungry
            enough to keep going.
          </p>
          <div className="about-stats">
            <div className="stat-card reveal reveal-delay-1">
              <div className="stat-number">17</div>
              <div className="stat-label">Years Old</div>
            </div>
            <div className="stat-card reveal reveal-delay-2">
              <div className="stat-number">3yr</div>
              <div className="stat-label">Designing</div>
            </div>
            <div className="stat-card reveal reveal-delay-3">
              <div className="stat-number">4+</div>
              <div className="stat-label">Freelance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
