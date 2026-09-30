export function FeatureCopy({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="whitespace-pre-line text-3xl font-semibold leading-[1.3] tracking-[-0.01em] text-neutral-950 sm:text-4xl lg:text-heading-section">
        {title}
      </h2>
      {children}
    </div>
  );
}
