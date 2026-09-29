export function AuthCard({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-4xl bg-white px-6 pb-10 pt-10 sm:px-10 lg:px-16 lg:pt-16">
      <p className="text-label-l text-primary-700">{eyebrow}</p>
      <h1 className="font-heading text-4xl font-semibold leading-[1.2] tracking-[-0.01em] text-neutral-950 sm:text-heading-m">
        {title}
      </h1>
      {children}
    </section>
  );
}
