import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Container } from "@/components/ui/Container";
import { footerContent } from "@/data/footer";
import { Logo } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";

const linkStyles = "transition-colors duration-300 hover:text-primary-700";

export function Footer() {
  const {
    tagline,
    emailPlaceholder,
    submitLabel,
    consent,
    columns,
    copyright,
    legal,
  } = footerContent;

  return (
    <footer className="border-t border-neutral-200 bg-white pt-12 lg:pt-[70px]">
      <Container>
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <Reveal className="lg:w-[504px]">
            <Logo src="/assets/footer/logo.svg" />
            <p className="mt-4 text-body-s text-neutral-950">{tagline}</p>
            <NewsletterForm
              className="mt-11"
              placeholder={emailPlaceholder}
              submitLabel={submitLabel}
            />
            <p className="mt-6 max-w-[480px] text-body-xs text-neutral-800">
              {consent}
            </p>
          </Reveal>

          <nav aria-label="Footer" className="lg:w-[580px] lg:pt-12">
            <Stagger
              gap={0.12}
              className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-[207px_207px_1fr]"
            >
              {columns.map((links, index) => (
                <StaggerItem key={index} distance={20}>
                  <ul className="flex flex-col gap-3">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className={`text-body-m text-neutral-800 ${linkStyles}`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </StaggerItem>
              ))}
            </Stagger>
          </nav>
        </div>

        <Reveal
          from="none"
          className="mt-12 flex flex-col gap-4 border-t border-neutral-200 pb-9 pt-6 sm:flex-row sm:items-center sm:justify-between lg:mt-[132px]"
        >
          <p className="text-body-xs text-neutral-800">{copyright}</p>
          <ul className="flex flex-wrap gap-6">
            {legal.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`text-body-xs text-neutral-800 ${linkStyles}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </footer>
  );
}
