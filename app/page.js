import Link from 'next/link';
import Section from '@/components/Section';
import Tilt from '@/components/Tilt';
import Hero3D from '@/components/Hero3D';
import Testimonials from '@/components/Testimonials';
import { SERVICES, BIZ } from '@/lib/data';
export default function Home() {
  return (
    <main>
      <Section tone="navy" label="Welcome">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold md:text-5xl">Your legal partner for property, business and family matters</h1>
            <p className="my-4 max-w-md">Clear advice in plain language from a Mississauga barrister and solicitor. Scroll, or use the Next button, for a quick tour.</p>
            <Link href="/contact#contact-form" className="inline-block rounded bg-gold px-6 py-3 font-heading font-bold text-navy shadow-[0_6px_0_#8f7a00]">Book a free consultation</Link>
          </div>
          <Hero3D />
        </div>
      </Section>
      <Section tone="cream" label="Services">
        <h2 className="mb-4 text-3xl font-bold">How we can help</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`}>
              <Tilt className="h-full bg-navy p-5 text-cream">
                <h3 className="text-xl font-bold text-gold">{s.title}</h3>
                <p className="text-xs opacity-80">{s.sub}</p>
                <p className="mt-2 text-sm">{s.short}</p>
              </Tilt>
            </Link>
          ))}
        </div>
      </Section>
      <Section tone="gold" label="How it works">
        <h2 className="mb-4 text-3xl font-bold">Three steps to get started</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {[['Free consultation', 'Tell us what is going on. We listen first.'], ['A clear plan', 'You get the steps, timeline and fees up front.'], ['We handle it', 'Regular updates by phone or email until it is done.']].map(([t, d], n) => (
            <Tilt key={t} className="bg-navy p-5 text-cream"><p className="font-heading text-3xl font-bold text-gold">{n + 1}</p><h3 className="font-bold">{t}</h3><p className="text-sm">{d}</p></Tilt>
          ))}
        </div>
      </Section>
      <Section tone="royal" label="Testimonials"><Testimonials limit={5} /></Section>
      <Section tone="cream" label="Visit us">
        <div className="grid gap-4 md:grid-cols-2">
          <div><h2 className="text-3xl font-bold">Visit the 14th floor</h2><p className="mt-2">{BIZ.address}</p><p className="mt-1 font-semibold">{BIZ.phone}</p></div>
          <ul className="text-sm">{BIZ.hours.map(([d, h]) => <li key={d} className="flex justify-between border-b border-navy/20 py-1"><span>{d}</span><span>{h}</span></li>)}</ul>
        </div>
      </Section>
    </main>
  );
}
