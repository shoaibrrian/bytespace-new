import Image from "next/image";

type IconProps = {
  className?: string;
};

export function FacebookIcon({ className }: IconProps) {
  return (
    <Image
      src="/assets/auth/facebook.svg"
      alt=""
      width={24}
      height={24}
      className={className}
    />
  );
}

export function GoogleIcon({ className }: IconProps) {
  return (
    <Image
      src="/assets/auth/google.svg"
      alt=""
      width={24}
      height={24}
      className={className}
    />
  );
}
