import Reveal from './Reveal';
const tones = {
  navy: 'bg-navy text-cream', cream: 'bg-cream text-navy', gold: 'bg-gold text-navy', royal: 'bg-royal text-cream', deep: 'bg-deep text-cream',
};
export default function Section({ tone, label, children, className = '' }) {
  return (
    <section data-guide={label} className={`${tones[tone]} overflow-hidden px-5 py-10 md:px-12 ${className}`}>
      <Reveal className="mx-auto max-w-6xl">{children}</Reveal>
    </section>
  );
}
