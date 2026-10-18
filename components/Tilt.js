'use client';
import { useRef } from 'react';
export default function Tilt({ children, className = '', max = 10 }) {
  const r = useRef(null);
  const move = (e) => {
    const b = r.current.getBoundingClientRect();
    const x = (e.clientX - b.left) / b.width - 0.5, y = (e.clientY - b.top) / b.height - 0.5;
    r.current.style.transform = `perspective(800px) rotateX(${-y * max}deg) rotateY(${x * max}deg) translateZ(12px)`;
  };
  const leave = () => (r.current.style.transform = 'perspective(800px)');
  return (
    <div ref={r} onMouseMove={move} onMouseLeave={leave}
      className={`transition-transform duration-150 shadow-[0_22px_40px_-14px_rgba(0,0,0,.5)] ${className}`}>
      {children}
    </div>
  );
}
