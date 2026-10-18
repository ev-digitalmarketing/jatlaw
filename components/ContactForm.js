'use client';
import { useState } from 'react';
import { BIZ } from '@/lib/data';
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const body = `Name: ${f.get('name')}\nPhone: ${f.get('phone')}\nService: ${f.get('service')}\n\n${f.get('message')}`;
    window.location.href = `mailto:${BIZ.email}?subject=${encodeURIComponent('Consultation request')}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  const field = 'w-full rounded border-0 bg-cream p-3 text-navy shadow-inner focus:outline-none focus:ring-2 focus:ring-gold';
  return (
    <form onSubmit={submit} className="grid gap-3">
      <input name="name" required placeholder="Full name" className={field} />
      <div className="grid gap-3 sm:grid-cols-2">
        <input name="email" type="email" required placeholder="Email" className={field} />
        <input name="phone" placeholder="Phone" className={field} />
      </div>
      <select name="service" className={field}>
        <option>Free consultation</option>
        <option>Real Estate Transactions</option><option>Real Estate Litigation</option><option>General Litigation</option>
        <option>Corporate Law</option><option>Wills and Estates</option><option>Simple Divorces</option>
      </select>
      <textarea name="message" rows="4" placeholder="How can we help?" className={field} />
      <button className="rounded bg-gold py-3 font-heading font-bold text-navy shadow-[0_6px_0_#8f7a00] transition active:translate-y-1 active:shadow-none">Request free consultation</button>
      {sent && <p className="text-sm">Your email app should open with your message ready to send.</p>}
    </form>
  );
}
