import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Cursor from './components/Cursor';
import CanvasBg from './components/CanvasBg';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Works from './components/Works';
import Videos from './components/Videos';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    const skewElements = gsap.utils.toArray('.service-card, .video-card, .skill-bar-card, .stat-card');

    lenis.on('scroll', (e) => {
      ScrollTrigger.update();
      
      if (window.innerWidth <= 900) {
        if (skewElements.length > 0) gsap.set(skewElements, { skewY: 0 });
        return;
      }
      
      // Calculate a constrained velocity for skewing 
      const vel = Math.max(-10, Math.min(10, e.velocity * 0.3));
      
      if (skewElements.length > 0) {
        gsap.to(skewElements, {
          skewY: vel,
          duration: 0.3,
          ease: 'power3.out',
          overwrite: 'auto'
        });
      }
    });

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Global scroll reveal initialization
    const reveals = gsap.utils.toArray('.reveal');
    reveals.forEach((el) => {
      if (el.dataset.gsapInitialized) return;
      el.dataset.gsapInitialized = "true";

      const delay = el.classList.contains('reveal-delay-1') ? 0.1
        : el.classList.contains('reveal-delay-2') ? 0.2
        : el.classList.contains('reveal-delay-3') ? 0.3
        : el.classList.contains('reveal-delay-4') ? 0.4
        : 0;

      gsap.fromTo(el,
        { 
          opacity: 0, 
          y: 70, 
          scale: 0.95, 
          rotationX: -12 
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1.4,
          delay: delay,
          ease: 'expo.out',
          transformOrigin: 'top center',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          }
        }
      );
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <CanvasBg />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <div className="glow-divider"></div>
        <Works />
        <div className="glow-divider"></div>
        <Videos />
        <div className="glow-divider"></div>
        <About />
        <div className="glow-divider"></div>
        <Skills />
        <div className="glow-divider"></div>
        <Services />
        <div className="glow-divider"></div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
