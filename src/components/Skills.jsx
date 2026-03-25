import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Skills() {
  useGSAP(() => {
    const cards = gsap.utils.toArray('.skill-bar-card');
    cards.forEach((card) => {
      const bar = card.querySelector('.skill-bar');
      const label = card.querySelector('.skill-pct-label');
      const targetPct = parseInt(bar.getAttribute('data-pct'), 10);

      // Bar width animation
      gsap.fromTo(bar,
        { width: '0%' },
        {
          width: `${targetPct}%`,
          duration: 1.8,
          delay: 0.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: card, // trigger on the whole card
            start: 'top 90%',
          }
        }
      );

      // Number counter animation
      gsap.fromTo(label,
        { innerHTML: 0 },
        {
          innerHTML: targetPct,
          duration: 1.8,
          delay: 0.2,
          ease: 'expo.out',
          snap: { innerHTML: 1 },
          onUpdate: function() {
            label.innerHTML = Math.round(label.innerHTML) + '%';
          },
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
          }
        }
      );
    });
  });

  return (
    <section id="skills">
      <div className="skills-inner">
        <div className="section-label reveal">Capabilities</div>
        <h2 className="section-title reveal reveal-delay-1">Skills that <em>define the work</em></h2>

        {/* Software skills with logos + progress bars */}
        <div className="skills-software">

          {/* Photoshop */}
          <div className="skill-bar-card hoverable reveal reveal-delay-1">
            <div className="skill-software-header">
              <div className="skill-software-logo skill-logo-ps">
                <svg viewBox="0 0 240 234" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="240" height="234" rx="42" fill="#31A8FF" />
                  <path d="M54 164V72h33c8.3 0 14.7 2 19 6 4.4 4 6.5 9.7 6.5 17.2 0 4-.8 7.7-2.4 11-1.6 3.3-3.8 5.9-6.8 7.8-2.9 1.9-6.3 2.8-10 2.8H72v47H54zm18-61h14.2c3.4 0 6-.9 7.8-2.8 1.8-1.9 2.7-4.7 2.7-8.3 0-3.5-.9-6.1-2.7-7.8-1.8-1.7-4.4-2.6-7.8-2.6H72v21.5zM155 165.5c-6.8 0-12.7-1.4-17.8-4.3-5.1-2.9-9-7-11.8-12.3-2.8-5.3-4.2-11.6-4.2-18.7 0-7.3 1.4-13.7 4.3-19 2.9-5.3 7-9.4 12.3-12.2 5.3-2.8 11.5-4.2 18.6-4.2 2.1 0 4.2.1 6.2.4 2 .3 3.8.6 5.4 1V72h17v85.7c-3 1.2-6.5 2.1-10.6 2.9-4 .6-8.1 .9-12.2 .9-3.9 0-7.6-.5-11-.5zm8-14.5c1.6 0 3.1-.1 4.5-.4 1.4-.3 2.5-.6 3.5-1v-39.1c-1-.5-2.1-.9-3.5-1.2-1.4-.3-2.9-.4-4.5-.4-3.4 0-6.4.7-8.9 2.2-2.5 1.5-4.4 3.7-5.7 6.7-1.3 3-2 6.7-2 11.2 0 4.3.6 7.9 1.8 10.8 1.2 2.9 3 5.1 5.3 6.6 2.4 1 5.2 1.6 9.5 1.6z" fill="white" />
                </svg>
              </div>
              <div>
                <div className="skill-software-name">Photoshop</div>
                <div className="skill-software-sub">Adobe Creative Cloud</div>
              </div>
              <div className="skill-pct-label">95%</div>
            </div>
            <div className="skill-bar-wrap">
              <div className="skill-bar" data-pct="95" style={{ width: '0%' }}></div>
            </div>
          </div>

          {/* Illustrator */}
          <div className="skill-bar-card hoverable reveal reveal-delay-2">
            <div className="skill-software-header">
              <div className="skill-software-logo skill-logo-ai">
                <svg viewBox="0 0 240 234" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="240" height="234" rx="42" fill="#FF9A00" />
                  <path d="M96.5 140.5H61l-7 22H36l34-92h21l34.5 92h-21L96.5 140.5zm-31-15h27l-13.5-41.5L65.5 125.5z" fill="white" />
                  <path d="M163 74a9.5 9.5 0 1 1 0 19 9.5 9.5 0 0 1 0-19zm-9 37h18v51h-18v-51z" fill="white" />
                </svg>
              </div>
              <div>
                <div className="skill-software-name">Illustrator</div>
                <div className="skill-software-sub">Adobe Creative Cloud</div>
              </div>
              <div className="skill-pct-label">90%</div>
            </div>
            <div className="skill-bar-wrap">
              <div className="skill-bar" data-pct="90" style={{ width: '0%' }}></div>
            </div>
          </div>

          {/* After Effects */}
          <div className="skill-bar-card hoverable reveal reveal-delay-3">
            <div className="skill-software-header">
              <div className="skill-software-logo skill-logo-ae">
                <svg viewBox="0 0 240 234" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="240" height="234" rx="42" fill="#9999FF" />
                  <path d="M58.5 140.5H23l-7 22H-2l34-92h21l34.5 92H67l-8.5-22zm-31-15h27L41 84l-13.5 41.5z" fill="white" />
                  <path d="M148 117h-43c.5 6 2.5 10.5 6 13.5 3.4 3 8 4.5 13.5 4.5 3.2 0 6.2-.5 9-1.5 2.8-1 5.4-2.5 7.8-4.5l5.5 11c-2.8 2.5-6.2 4.5-10.2 5.8-4 1.3-8.3 2-12.8 2-6.3 0-11.8-1.2-16.5-3.7-4.7-2.5-8.3-6-10.8-10.5-2.5-4.5-3.8-9.8-3.8-15.8 0-5.8 1.2-11 3.7-15.5 2.5-4.5 6-8 10.5-10.5 4.5-2.5 9.7-3.8 15.5-3.8 5.5 0 10.4 1.2 14.6 3.5 4.2 2.3 7.4 5.7 9.6 10.2 2.2 4.5 3.3 9.8 3.2 16-.1.8-.3 1.8-.8 3zm-14.5-10.5c-.1-5.3-1.4-9.3-3.7-12-2.3-2.7-5.6-4-9.7-4-4 0-7.2 1.3-9.8 4-2.5 2.7-4 6.6-4.4 11.7l27.6.3z" fill="white" />
                </svg>
              </div>
              <div>
                <div className="skill-software-name">After Effects</div>
                <div className="skill-software-sub">Adobe Creative Cloud</div>
              </div>
              <div className="skill-pct-label">95%</div>
            </div>
            <div className="skill-bar-wrap">
              <div className="skill-bar" data-pct="95" style={{ width: '0%' }}></div>
            </div>
          </div>

          {/* Premiere Pro */}
          <div className="skill-bar-card hoverable reveal reveal-delay-4">
            <div className="skill-software-header">
              <div className="skill-software-logo skill-logo-pr">
                <svg viewBox="0 0 240 234" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="240" height="234" rx="42" fill="#9999FF" />
                  <path d="M47 164V72h32.5c8 0 14.3 2 18.8 5.8 4.5 3.9 6.7 9.4 6.7 16.7 0 4.8-1.2 9-3.5 12.5-2.4 3.5-5.7 6-10 7.5l18.5 49.5H91l-16.5-45.5H65v45.5H47zm18-59.5h13.5c3.3 0 5.8-.9 7.5-2.7 1.7-1.8 2.5-4.3 2.5-7.5 0-3.2-.8-5.6-2.5-7.3-1.7-1.7-4.2-2.5-7.5-2.5H65V104.5z" fill="white" />
                  <path d="M138 164V72h32.5c8 0 14.3 2 18.8 5.8 4.5 3.9 6.7 9.4 6.7 16.7 0 4.8-1.2 9-3.5 12.5-2.4 3.5-5.7 6-10 7.5l18.5 49.5h-19l-16.5-45.5H156v45.5h-18zm18-59.5h13.5c3.3 0 5.8-.9 7.5-2.7 1.7-1.8 2.5-4.3 2.5-7.5 0-3.2-.8-5.6-2.5-7.3-1.7-1.7-4.2-2.5-7.5-2.5H156V104.5z" fill="white" />
                </svg>
              </div>
              <div>
                <div className="skill-software-name">Premiere Pro</div>
                <div className="skill-software-sub">Adobe Creative Cloud</div>
              </div>
              <div className="skill-pct-label">85%</div>
            </div>
            <div className="skill-bar-wrap">
              <div className="skill-bar" data-pct="85" style={{ width: '0%' }}></div>
            </div>
          </div>

        </div>

        {/* Creative Skills floating tags */}
        <div className="skills-creative-label">Creative Disciplines</div>
        <div className="skills-creative-area">
          <div className="creative-tag hoverable">Typography</div>
          <div className="creative-tag hoverable">Poster Design</div>
          <div className="creative-tag hoverable">Video Editing</div>
          <div className="creative-tag hoverable">Color Grading</div>
          <div className="creative-tag hoverable">Visual Storytelling</div>
          <div className="creative-tag hoverable">Social Media Design</div>
          <div className="creative-tag hoverable">Branding Basics</div>
        </div>

        {/* Scrolling marquee of micro-skills */}
        <div className="skills-marquee-wrap">
          <div className="skills-marquee-track">
            <span className="sm-accent">Composition</span><span>·</span>
            <span>Negative Space</span><span>·</span>
            <span className="sm-accent">Hierarchy</span><span>·</span>
            <span>Grid Systems</span><span>·</span>
            <span className="sm-accent">Texture & Grain</span><span>·</span>
            <span>Glitch Art</span><span>·</span>
            <span className="sm-accent">Retouching</span><span>·</span>
            <span>Keyframing</span><span>·</span>
            <span className="sm-accent">Transitions</span><span>·</span>
            <span>Sound Sync</span><span>·</span>
            {/* Duplicate */}
            <span className="sm-accent">Composition</span><span>·</span>
            <span>Negative Space</span><span>·</span>
            <span className="sm-accent">Hierarchy</span><span>·</span>
            <span>Grid Systems</span><span>·</span>
            <span className="sm-accent">Texture & Grain</span><span>·</span>
            <span>Glitch Art</span><span>·</span>
            <span className="sm-accent">Retouching</span><span>·</span>
            <span>Keyframing</span><span>·</span>
            <span className="sm-accent">Transitions</span><span>·</span>
            <span>Sound Sync</span><span>·</span>
          </div>
        </div>

      </div>
    </section>
  );
}
