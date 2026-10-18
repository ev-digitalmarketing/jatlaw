'use client';
import { useRef } from 'react';
const letters = ['J', 'A', 'T'];
export default function Hero3D() {
  const r = useRef(null);
  const move = (e) => {
    const b = r.current.getBoundingClientRect();
    const x = (e.clientX - b.left) / b.width - 0.5, y = (e.clientY - b.top) / b.height - 0.5;
    r.current.firstChild.style.transform = `rotateX(${-y * 24}deg) rotateY(${x * 34}deg)`;
  };
  const leave = () => (r.current.firstChild.style.transform = 'rotateX(8deg) rotateY(-16deg)');
  return (
    <div ref={r} onMouseMove={move} onMouseLeave={leave} className="h-72 md:h-96 [perspective:1100px] flex items-center justify-center">
      <div className="preserve-3d flex gap-3 transition-transform duration-200" style={{ transform: 'rotateX(8deg) rotateY(-16deg)' }}>
        {letters.map((l, i) => (
          <div key={l} className="float preserve-3d" style={{ '--z': `${i * 30}px`, animationDelay: `${i * 0.5}s` }}>
            <div className="relative flex h-56 w-24 items-center justify-center bg-gold font-heading text-6xl font-bold text-cream shadow-[0_30px_50px_-10px_rgba(0,0,0,.6)] md:h-72 md:w-32 md:text-7xl"
              style={{ clipPath: 'polygon(0 10%,100% 0,100% 100%,0 100%)' }}>{l}</div>
            <div className="absolute inset-y-0 -right-3 w-3 bg-[#9c8400]" style={{ transform: 'rotateY(90deg)', transformOrigin: 'left' }} />
          </div>
        ))}
      </div>
    </div>
  );
}
