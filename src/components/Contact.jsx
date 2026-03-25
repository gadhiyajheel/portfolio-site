import React from 'react';

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-inner">
        <div className="section-label reveal">Let's Talk</div>
        <h2 className="section-title reveal reveal-delay-1">Ready to build something <em>extraordinary?</em></h2>
        <p className="contact-sub reveal reveal-delay-2">
          Whether you have a clear vision or just the spark of an idea — let's turn it into something the world hasn't seen yet.
        </p>
        <div className="contact-info-grid reveal reveal-delay-3">
          <div className="contact-info-card hoverable">
            <div className="info-card-label">Email</div>
            <a href="mailto:gadhiyajheel@gmail.com" className="info-card-link">gadhiyajheel@gmail.com</a>
            <a href="mailto:mamta190285@gmail.com" className="info-card-link">mamta190285@gmail.com</a>
          </div>

          <div className="contact-info-card hoverable">
            <div className="info-card-label">Instagram</div>
            <a href="https://www.instagram.com/retroedittz" target="_blank" rel="noreferrer" className="info-card-link">@retroedittz</a>
            <a href="https://www.instagram.com/jeelipopp/" target="_blank" rel="noreferrer" className="info-card-link">@jeelipopp</a>
          </div>

          <div className="contact-info-card hoverable">
            <div className="info-card-label">Phone</div>
            <a href="tel:9016052047" className="info-card-link">9016052047</a>
            <a href="tel:9429076631" className="info-card-link">9429076631</a>
          </div>
        </div>
      </div>
    </section>
  );
}
