import React, { useEffect, useRef } from 'react';

export default function Cursor() {
  const orbRef = useRef(null);
  const trailsRef = useRef([]);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;

    let mx = -100, my = -100, ox = -100, oy = -100;
    const TRAIL_COUNT = 6;
    
    const trailPositions = Array.from({ length: TRAIL_COUNT + 1 }, () => ({ x: -100, y: -100 }));

    const handleMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    let animationFrameId;
    const updateCursor = () => {
      ox += (mx - ox) * 0.15;
      oy += (my - oy) * 0.15;
      orb.style.left = `${ox}px`;
      orb.style.top = `${oy}px`;
      
      trailPositions[0] = { x: mx, y: my };
      for (let i = 1; i <= TRAIL_COUNT; i++) {
        trailPositions[i].x += (trailPositions[i - 1].x - trailPositions[i].x) * 0.35;
        trailPositions[i].y += (trailPositions[i - 1].y - trailPositions[i].y) * 0.35;
        
        const el = trailsRef.current[i - 1];
        if (el) {
          el.style.left = `${trailPositions[i].x}px`;
          el.style.top = `${trailPositions[i].y}px`;
        }
      }
      animationFrameId = requestAnimationFrame(updateCursor);
    };

    const handleMouseEnter = () => orb.classList.add('hovered');
    const handleMouseLeave = () => orb.classList.remove('hovered');
    const handleClick = (e) => {
      orb.classList.add('clicked');
      setTimeout(() => orb.classList.remove('clicked'), 300);
      
      const rip = document.createElement('div');
      rip.className = 'ripple';
      rip.style.left = e.clientX + 'px';
      rip.style.top = e.clientY + 'px';
      rip.style.width = rip.style.height = '40px';
      document.body.appendChild(rip);
      setTimeout(() => rip.remove(), 800);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);
    
    // Attach hover listeners to interactable elements dynamically
    const hoverables = document.querySelectorAll('.hoverable, a, button, input, textarea');
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    updateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
      hoverables.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div id="cursor-orb" ref={orbRef}></div>
      {[...Array(6)].map((_, i) => (
        <div 
          key={i} 
          className="cursor-trail"
          ref={el => trailsRef.current[i] = el}
          style={{
            opacity: (1 - i / 6) * 0.4,
            width: `${8 - i * 0.8}px`,
            height: `${8 - i * 0.8}px`
          }}
        ></div>
      ))}
    </>
  );
}
