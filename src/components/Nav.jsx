import React from 'react';

export default function Nav() {
  return (
    <nav>
      <span className="nav-logo">jeel gadhiya</span>
      <ul className="nav-links">
        <li><a href="#works" className="hoverable">Works</a></li>
        <li><a href="#videos" className="hoverable">Videos</a></li>
        <li><a href="#about" className="hoverable">About</a></li>
        <li><a href="#skills" className="hoverable">Skills</a></li>
        <li><a href="#contact" className="hoverable">Contact</a></li>
      </ul>
    </nav>
  );
}
