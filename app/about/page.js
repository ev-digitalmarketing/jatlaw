import Section from '@/components/Section';
import Tilt from '@/components/Tilt';
import Testimonials from '@/components/Testimonials';
export const metadata = { title: 'About | Jat Law' };
export default function About() {
  return (
    <main>
      <Section tone="navy" label="About us">
        <h1 className="text-4xl font-bold md:text-5xl">A focused practice built on responsiveness</h1>
        <p className="mt-3 max-w-2xl">Jat Law Professional Corporation serves individuals, families and business owners from our Mississauga office. We keep the process clear, the communication frequent and the fees predictable.</p>
      </Section>
      <Section tone="cream" label="Our approach">
        <div className="grid gap-5 md:grid-cols-2">
          <p>Clients tell us the same things: we explain documents in plain language, we answer the phone, and we raise the points they had not thought about. That is the standard we hold ourselves to on every file.</p>
          <p>We practise in real estate, litigation, corporate law, wills and estates, and simple divorces, so most of your legal needs can be handled under one roof.</p>
        </div>
      </Section>
      <Section tone="gold" label="Our values">
        <div className="grid gap-5 md:grid-cols-3">
          {[['Clarity', 'Plain language, no surprises.'], ['Availability', 'Direct access by phone and email.'], ['Precision', 'Careful attention to every detail.']].map(([t, d]) => (
            <Tilt key={t} className="bg-navy p-5 text-cream"><h3 className="text-xl font-bold text-gold">{t}</h3><p className="text-sm">{d}</p></Tilt>
          ))}
        </div>
      </Section>
      <Section tone="royal" label="Testimonials"><Testimonials limit={3} /></Section>
    </main>
  );
}
