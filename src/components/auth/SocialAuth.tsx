import { FacebookIcon, GoogleIcon } from "@/components/icons/SocialIcons";
import { cn } from "@/lib/utils";

function SocialButton({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className="flex size-[72px] cursor-pointer items-center justify-center rounded-2xl border border-neutral-200 text-neutral-950 transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-lg hover:shadow-black/5 active:translate-y-0 active:scale-95"
    >
      {children}
    </button>
  );
}

export function SocialAuth({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex items-center gap-4 pr-3.5 text-body-m text-neutral-500">
        <span className="h-px flex-1 bg-neutral-200" />
        or
        <span className="h-px flex-1 bg-neutral-200" />
      </div>
      <div className={cn("mt-12 flex justify-center gap-[18px]")}>
        <SocialButton label="Continue with Facebook">
          <FacebookIcon className="size-9" />
        </SocialButton>
        <SocialButton label="Continue with Google">
          <GoogleIcon className="size-9" />
        </SocialButton>
      </div>
    </div>
  );
}
