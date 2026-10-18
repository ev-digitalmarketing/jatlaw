'use client';
import Link from 'next/link';
import { useState } from 'react';
import { SERVICES } from '@/lib/data';
export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [['Home', '/'], ['About', '/about'], ['Contact', '/contact']];
  return (
    <header className="sticky top-0 z-50 bg-cream shadow-[0_8px_20px_-8px_rgba(11,37,69,.5)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-2 md:px-12">
        <Link href="/"><img src="/logo.png" alt="Jat Law, Barrister & Solicitor" className="h-12 w-auto" /></Link>
        <nav className="hidden items-center gap-6 font-heading text-sm font-semibold lg:flex">
          {links.map(([t, h]) => <Link key={h} href={h} className="hover:text-royal">{t}</Link>)}
          <div className="group relative">
            <span className="cursor-pointer hover:text-royal">Services</span>
            <div className="invisible absolute left-0 top-full w-72 bg-navy p-2 text-cream opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
              {SERVICES.map((s) => <Link key={s.slug} href={`/services/${s.slug}`} className="block px-3 py-2 hover:bg-gold hover:text-navy">{s.title}</Link>)}
            </div>
          </div>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/contact#contact-form" className="rounded bg-gold px-4 py-2 font-heading text-sm font-bold text-navy shadow-[0_6px_0_#8f7a00] transition active:translate-y-1 active:shadow-none">Free Consultation</Link>
          <button className="px-2 text-2xl lg:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>☰</button>
        </div>
      </div>
      {open && (
        <div className="grid bg-navy font-heading text-cream lg:hidden">
          {links.map(([t, h]) => <Link key={h} href={h} onClick={() => setOpen(false)} className="px-5 py-3">{t}</Link>)}
          {SERVICES.map((s) => <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setOpen(false)} className="bg-royal px-5 py-2 text-sm">{s.title}</Link>)}
        </div>
      )}
    </header>
  );
}
