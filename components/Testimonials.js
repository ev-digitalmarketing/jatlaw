import Tilt from './Tilt';
import { REVIEWS } from '@/lib/data';
export default function Testimonials({ limit = 5 }) {
  return (
    <>
      <h2 className="mb-4 text-3xl font-bold">What clients say</h2>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.slice(0, limit).map((r) => (
          <Tilt key={r.name} className="bg-cream p-5 text-navy">
            <p className="text-gold" aria-label="5 stars">★★★★★</p>
            <p className="my-2 text-sm leading-relaxed">{r.text}</p>
            <p className="font-heading font-bold">{r.name}</p>
            <p className="text-xs opacity-70">Google review</p>
          </Tilt>
        ))}
      </div>
    </>
  );
}
