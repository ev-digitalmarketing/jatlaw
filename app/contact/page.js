import Section from '@/components/Section';
import Tilt from '@/components/Tilt';
import Testimonials from '@/components/Testimonials';
export const metadata = { title: 'Contact | Jat Law' };
export default function Contact() {
  return (
    <main>
      <Section tone="navy" label="Contact">
        <h1 className="text-4xl font-bold md:text-5xl">Book your free consultation</h1>
        <p className="mt-3 max-w-xl">Use the form below, call, or visit us. We reply promptly.</p>
      </Section>
      <Section tone="cream" label="What to expect">
        <div className="grid gap-5 md:grid-cols-3">
          {[['Tell us your situation', 'A short call or meeting, in person if you prefer.'], ['Get honest options', 'We outline the path, timeline and fees.'], ['Decide with confidence', 'No pressure to proceed.']].map(([t, d]) => (
            <Tilt key={t} className="bg-navy p-5 text-cream"><h3 className="font-bold text-gold">{t}</h3><p className="text-sm">{d}</p></Tilt>
          ))}
        </div>
      </Section>
      <Section tone="gold" label="Testimonials"><Testimonials limit={3} /></Section>
    </main>
  );
}
