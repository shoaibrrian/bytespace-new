import Image from "next/image";

export function AvatarGroup({
  avatars,
  label,
}: {
  avatars: string[];
  label?: string;
}) {
  return (
    <div className="flex items-center">
      {avatars.map((src) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={36}
          height={36}
          className="-ml-2 size-9 rounded-full border-2 border-white object-cover first:ml-0"
        />
      ))}
      {label && (
        <span className="-ml-2 flex size-9 items-center justify-center rounded-full border-2 border-white bg-secondary-500 text-label-xs font-medium text-neutral-950">
          {label}
        </span>
      )}
    </div>
  );
}
