'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
export default function Guide() {
  const path = usePathname();
  const [items, setItems] = useState([]);
  const [i, setI] = useState(0);
  useEffect(() => {
    const els = [...document.querySelectorAll('[data-guide]')];
    setItems(els.map((e) => e.dataset.guide));
    setI(0);
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setI(els.indexOf(e.target))), { rootMargin: '-45% 0px -45% 0px' });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [path]);
  const go = (n) => document.querySelectorAll('[data-guide]')[n]?.scrollIntoView({ behavior: 'smooth' });
  const last = i >= items.length - 1;
  return (
    <>
      <nav aria-label="Page guide" className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 md:flex">
        {items.map((t, n) => (
          <button key={t + n} onClick={() => go(n)} aria-label={t} title={t}
            className={`h-3 w-3 rounded-full border-2 border-cream shadow ${n === i ? 'scale-150 bg-gold' : 'bg-navy'} transition`} />
        ))}
      </nav>
      <button onClick={() => (last ? window.scrollTo({ top: 0, behavior: 'smooth' }) : go(i + 1))}
        className="fixed bottom-4 left-4 z-40 rounded bg-gold px-4 py-2 font-heading text-sm font-bold text-navy shadow-[0_10px_25px_-5px_rgba(0,0,0,.6)] hover:-translate-y-0.5 transition">
        {last ? 'Back to top' : `Next: ${items[i + 1] ?? ''}`}
      </button>
    </>
  );
}
