import Section from './Section';
import ContactForm from './ContactForm';
import { BIZ } from '@/lib/data';
export default function Footer() {
  return (
    <Section tone="deep" label="Get in touch">
      <div id="contact-form" className="grid gap-8 md:grid-cols-5">
        <div className="md:col-span-3">
          <h2 className="mb-3 text-3xl font-bold">Talk to Jat Law. Your first consultation is free.</h2>
          <ContactForm />
        </div>
        <div className="space-y-3 md:col-span-2">
          <h3 className="text-xl font-bold text-gold">Mississauga office</h3>
          <p>{BIZ.address}</p>
          <p><a className="font-semibold hover:text-gold" href={`tel:${BIZ.tel}`}>{BIZ.phone}</a><br /><a className="hover:text-gold" href={`mailto:${BIZ.email}`}>{BIZ.email}</a></p>
          <ul className="max-w-xs text-sm">
            {BIZ.hours.map(([d, h]) => <li key={d} className="flex justify-between border-b border-white/15 py-1"><span>{d}</span><span>{h}</span></li>)}
          </ul>
          <p className="text-xs opacity-70">© Jat Law Professional Corporation</p>
        </div>
      </div>
    </Section>
  );
}
