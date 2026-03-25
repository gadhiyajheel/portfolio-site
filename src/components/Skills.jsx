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
                <svg viewBox="0 0 128 128" fill="#31A8FF" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.666 1.6C10.133 1.6 0 11.734 0 24.268v79.464C0 116.266 10.133 126.4 22.666 126.4h82.668c12.533 0 22.666-10.134 22.666-22.668V24.268C128 11.734 117.867 1.6 105.334 1.6H22.666zm23.201 31.734c4.373 0 8 .532 10.986 1.652A19.05 19.05 0 0 1 64 39.361a16.976 16.976 0 0 1 3.894 6.079c.8 2.24 1.225 4.533 1.225 6.933 0 4.587-1.066 8.373-3.2 11.36-2.132 2.986-5.118 5.227-8.585 6.507-3.627 1.334-7.627 1.813-12 1.813-1.28 0-2.135 0-2.668-.053-.533-.053-1.28-.053-2.293-.053v17.12c.053.373-.213.694-.586.747H29.44c-.426 0-.638-.215-.638-.695V34.24c0-.373.16-.588.533-.588.907 0 1.76 0 2.986-.052 1.28-.054 2.613-.052 4.053-.106 1.44-.053 2.987-.054 4.64-.107 1.654-.054 3.254-.053 4.854-.053zm1.19 10.504a18.68 18.68 0 0 0-.817.002c-1.386 0-2.613.001-3.627.055-1.066-.054-1.812-.001-2.185.052v17.92c.746.054 1.438.106 2.078.106h2.828c2.08 0 4.16-.32 6.133-.96 1.707-.48 3.2-1.494 4.373-2.827 1.12-1.334 1.654-3.146 1.654-5.493a8.776 8.776 0 0 0-1.226-4.746c-.907-1.386-2.188-2.454-3.735-3.04-1.727-.7-3.576-1.033-5.476-1.07zm44.73 2.723c2.187 0 4.427.158 6.613.478 1.6.213 3.146.642 4.586 1.229.214.053.427.265.533.478.054.213.108.427.108.64v8.694a.655.655 0 0 1-.266.533c-.48.107-.747.107-.96 0-1.6-.853-3.308-1.439-5.122-1.812-1.973-.427-3.946-.695-5.972-.695-1.067-.054-2.188.108-3.201.374-.694.16-1.28.534-1.653 1.067-.266.427-.426.96-.426 1.44s.214.96.534 1.386c.48.587 1.119 1.068 1.812 1.442a48.8 48.8 0 0 0 3.787 1.757c2.88.96 5.653 2.295 8.213 3.895 1.76 1.12 3.2 2.614 4.213 4.427a11.509 11.509 0 0 1 1.228 5.493 12.412 12.412 0 0 1-2.082 7.093 13.362 13.362 0 0 1-5.972 4.746c-2.614 1.12-5.814 1.707-9.654 1.707-2.454 0-4.852-.213-7.252-.693a21.51 21.51 0 0 1-5.44-1.707c-.373-.213-.641-.587-.588-1.014V78.24c0-.16.053-.374.213-.48.16-.107.32-.052.48.054a22.83 22.83 0 0 0 6.614 2.614c2.027.533 4.161.799 6.295.799 2.026 0 3.466-.267 4.426-.747.853-.373 1.439-1.28 1.439-2.24 0-.746-.426-1.441-1.28-2.135-.853-.693-2.613-1.492-5.226-2.505a32.638 32.638 0 0 1-7.574-3.84 13.81 13.81 0 0 1-4.053-4.533 11.44 11.44 0 0 1-1.226-5.44c0-2.293.639-4.48 1.812-6.453 1.333-2.133 3.308-3.84 5.602-4.906 2.506-1.28 5.652-1.867 9.44-1.867z" />
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
                <svg viewBox="0 0 128 128" fill="#FF9A00" xmlns="http://www.w3.org/2000/svg">
                  <path d="M105.33 1.6H22.67A22.64 22.64 0 0 0 0 24.27v79.46a22.64 22.64 0 0 0 22.67 22.67h82.66A22.64 22.64 0 0 0 128 103.73V24.27A22.64 22.64 0 0 0 105.33 1.6Zm-27.09 88H67.09a.82.82 0 0 1-.85-.59l-4.37-12.74H42L38 88.8a.93.93 0 0 1-1 .75H27c-.58 0-.74-.32-.58-1l17.1-49.4c.16-.54.32-1.12.53-1.76a18.14 18.14 0 0 0 .32-3.47.54.54 0 0 1 .43-.59h13.81c.43 0 .64.16.7.43l19.46 54.93c.16.59 0 .86-.53.86Zm18.4-.6c0 .59-.21.85-.69.85H85.49a.75.75 0 0 1-.8-.85V47.89c0-.53.22-.74.7-.74H96c.48 0 .69.26.69.74Zm-1.12-48.2a6.3 6.3 0 0 1-4.85 1.87 6.61 6.61 0 0 1-4.75-1.87 6.87 6.87 0 0 1-1.81-4.91A6.23 6.23 0 0 1 86 31.15a6.8 6.8 0 0 1 4.74-1.87 6.4 6.4 0 0 1 4.86 1.87 6.75 6.75 0 0 1 1.76 4.74 6.76 6.76 0 0 1-1.84 4.91ZM58.67 65.44H45.12c.8-2.24 1.6-4.75 2.35-7.47s1.65-5.33 2.45-7.89a64.65 64.65 0 0 0 1.81-6.88h.11c.37 1.28.75 2.67 1.17 4.16s.91 3.09 1.44 4.75 1 3.25 1.55 4.9 1 3.15 1.44 4.59.91 2.72 1.23 3.84Z" />
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
                <svg viewBox="0 0 128 128" fill="#9999FF" xmlns="http://www.w3.org/2000/svg">
                  <path d="M87 52.4c-7.5.9-7.5 9.2-7.5 9.2h14.9c.1 0 .8-9.2-7.4-9.2zM38.2 63.1H51l-6.4-24.4z" />
                  <path d="M0 0v128h128V0H0zm57.5 88.6L53 72.5H36.2l-4.4 16.1h-9.4l16-54.9v-3.8h12.2l17.3 58.7H57.5zm46-19.6h-24c1.9 19.2 21.2 10 21.2 10v8s-1.3 2.6-14.8 2.6-16.3-18.3-16.3-18.3v-4.7s1.3-22 17.3-22 16.5 14.6 16.5 14.6V69z" />
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
                <svg viewBox="0 0 128 128" fill="#9999FF" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50.3 38.5h-7.4v20.7h7.4c5 0 9.1-4.1 9.1-9.1v-2.4c0-5.1-4.1-9.2-9.1-9.2z" />
                  <path d="M0 0v128h128V0H0zm51.2 67.5h-8.3v21.3h-9.6V30.3h18.5c9.4-.1 17.1 7.4 17.2 16.8v2.3c0 9.9-8 18-17.8 18.1zm46.1-14.2s-7 0-10.1 1.3v34.2H77.1V48.9s10.2-5.1 20.2-3.8v8.2z" />
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
