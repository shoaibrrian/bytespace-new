import Image from "next/image";
import { Card } from "@/components/ui/Card";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { name, role, avatar, quote } = testimonial;

  return (
    <Card className="rounded-4xl border-0 p-6">
      <Image
        src={avatar}
        alt={name}
        width={80}
        height={80}
        className="size-20 rounded-full object-cover"
      />
      <p className="mt-6 font-heading text-label-xl font-semibold text-neutral-950">
        {name}
      </p>
      <p className="mt-1 text-label-m text-primary-700">{role}</p>
      <blockquote className="mt-7 text-body-l text-[#4F4F4F]">
        <p>{`"${quote}"`}</p>
      </blockquote>
    </Card>
  );
}
