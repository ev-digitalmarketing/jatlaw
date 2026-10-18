import { notFound } from 'next/navigation';
import Section from '@/components/Section';
import Tilt from '@/components/Tilt';
import Testimonials from '@/components/Testimonials';
import { SERVICES } from '@/lib/data';
export const generateStaticParams = () => SERVICES.map((s) => ({ slug: s.slug }));
export default function Service({ params }) {
  const s = SERVICES.find((x) => x.slug === params.slug);
  if (!s) notFound();
  return (
    <main>
      <Section tone="navy" label={s.title}>
        <h1 className="text-4xl font-bold md:text-5xl">{s.title}</h1>
        <p className="font-semibold text-gold">{s.sub}</p>
        <p className="mt-3 max-w-2xl">{s.desc}</p>
      </Section>
      <Section tone="cream" label="What we handle">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {s.points.map((p) => <Tilt key={p} className="bg-navy p-5 font-semibold text-cream">{p}</Tilt>)}
        </div>
      </Section>
      <Section tone="gold" label="Reviews"><Testimonials limit={3} /></Section>
    </main>
  );
}
