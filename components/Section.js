const tones = {
  navy: 'bg-navy text-cream', cream: 'bg-cream text-navy', gold: 'bg-gold text-navy', royal: 'bg-royal text-cream', deep: 'bg-deep text-cream',
};
export default function Section({ tone, label, children, className = '' }) {
  return (
    <section data-guide={label} className={`${tones[tone]} px-5 py-10 md:px-12 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
