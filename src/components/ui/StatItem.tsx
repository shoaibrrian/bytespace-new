export function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-heading text-4xl font-semibold leading-[1.2] text-primary-700">
        {value}
      </p>
      <p className="text-body-m text-neutral-600">{label}</p>
    </div>
  );
}
