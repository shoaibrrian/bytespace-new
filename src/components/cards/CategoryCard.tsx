import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

type CategoryCardProps = {
  label: string;
  icon: string;
  href?: string;
};

export function CategoryCard({
  label,
  icon,
  href = "/#courses",
}: CategoryCardProps) {
  return (
    <Link href={href} className="group block">
      <Card className="flex aspect-square flex-col items-center justify-center gap-3 p-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary-700 group-hover:shadow-lg">
        <span className="flex size-15 items-center justify-center rounded-full bg-secondary-400">
          <Image src={icon} alt="" width={28} height={28} className="size-7" />
        </span>
        <span className="text-center text-label-m font-medium text-neutral-950 lg:text-label-xl">
          {label}
        </span>
      </Card>
    </Link>
  );
}
