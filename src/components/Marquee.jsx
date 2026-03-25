import React from 'react';

const marqueeItems = [
  "Poster Design", "Video Editing", "Visual Identity", 
  "Photoshop", "After Effects", "Typography", 
  "Color Grading", "Motion Graphics"
];

export default function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {marqueeItems.map((item, idx) => (
          <React.Fragment key={`m1-${idx}`}>
            <span>{item}</span><span className="accent">✦</span>
          </React.Fragment>
        ))}
        {/* Duplicate for seamless loop */}
        {marqueeItems.map((item, idx) => (
          <React.Fragment key={`m2-${idx}`}>
            <span>{item}</span><span className="accent">✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
