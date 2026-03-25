import React, { useEffect, useRef } from 'react';

export default function CanvasBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let W, H, particles = [], clouds = [], sparkles = [];
    let scrollYVal = 0;
    let animationFrameId;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    const init = () => {
      resize();
      particles = []; clouds = []; sparkles = [];
      for (let i = 0; i < 80; i++) {
        particles.push({
          x: Math.random() * 2000, y: Math.random() * 2000,
          r: Math.random() * 1.5 + 0.3,
          vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.5 + 0.1,
          color: `rgba(${Math.floor(Math.random() * 100 + 100)},${Math.floor(Math.random() * 100 + 100)},${Math.floor(Math.random() * 100 + 100)},1)`
        });
      }
      for (let i = 0; i < 5; i++) {
        clouds.push({ x: Math.random() * 2000, y: Math.random() * 2000, rx: 300 + Math.random() * 400, ry: 100 + Math.random() * 150, opacity: 0.015 + Math.random() * 0.02, vx: (Math.random() - 0.5) * 0.15, color: '150,150,150' });
      }
      for (let i = 0; i < 20; i++) {
        sparkles.push({ x: Math.random() * 2000, y: Math.random() * 2000, size: Math.random() * 6 + 3, opacity: Math.random(), phase: Math.random() * Math.PI * 2, speed: 0.02 + Math.random() * 0.03 });
      }
    };

    const handleScroll = () => {
      scrollYVal = window.scrollY;
    };

    const drawSparkle = (x, y, size, opacity) => {
      ctx.save(); ctx.globalAlpha = opacity;
      ctx.strokeStyle = '#c0c0c0'; ctx.lineWidth = 1;
      ctx.shadowBlur = 6; ctx.shadowColor = '#c0c0c0';
      ctx.beginPath();
      ctx.moveTo(x, y - size); ctx.lineTo(x, y + size);
      ctx.moveTo(x - size, y); ctx.lineTo(x + size, y);
      ctx.moveTo(x - size * .4, y - size * .4); ctx.lineTo(x + size * .4, y + size * .4);
      ctx.moveTo(x + size * .4, y - size * .4); ctx.lineTo(x - size * .4, y + size * .4);
      ctx.stroke(); ctx.restore();
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      clouds.forEach(c => {
        c.x += c.vx;
        if (c.x > W + 500) c.x = -500; if (c.x < -500) c.x = W + 500;
        const py = c.y - scrollYVal * 0.1;
        const grad = ctx.createRadialGradient(c.x, py, 0, c.x, py, c.rx);
        grad.addColorStop(0, `rgba(${c.color},${c.opacity})`); grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad; ctx.beginPath();
        ctx.ellipse(c.x, py, c.rx, c.ry, 0, 0, Math.PI * 2); ctx.fill();
      });
      
      ctx.strokeStyle = 'rgba(255,255,255,0.015)'; ctx.lineWidth = 1;
      const gridSize = 80;
      for (let gx = 0; gx < W; gx += gridSize) { ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, H); ctx.stroke(); }
      for (let gy = -scrollYVal % gridSize; gy < H; gy += gridSize) { ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke(); }
      
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0; if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        const py = p.y - scrollYVal * 0.05;
        ctx.beginPath(); ctx.arc(p.x, py, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color; ctx.globalAlpha = p.opacity;
        ctx.shadowBlur = 6; ctx.shadowColor = p.color; ctx.fill();
        ctx.globalAlpha = 1; ctx.shadowBlur = 0;
      });
      
      sparkles.forEach(s => {
        s.phase += s.speed;
        const op = (Math.sin(s.phase) + 1) / 2 * 0.6;
        drawSparkle(s.x, s.y - scrollYVal * 0.04, s.size, op);
      });
      
      animationFrameId = requestAnimationFrame(draw);
    };

    init();
    draw();
    
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas id="bg-canvas" ref={canvasRef}></canvas>;
}
