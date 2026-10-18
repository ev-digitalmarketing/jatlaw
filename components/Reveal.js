'use client';
import { useEffect, useRef } from 'react';
export default function Reveal({ children, className = '', delay = 0 }) {
  const r = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { r.current.classList.add('in'); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(r.current);
    return () => io.disconnect();
  }, []);
  return <div ref={r} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${className}`}>{children}</div>;
}
