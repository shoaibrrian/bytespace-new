import type { Metadata } from "next";
import { AuthCard } from "@/components/auth/AuthCard";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { AuthShowcase } from "@/components/auth/AuthShowcase";
import { SignInForm } from "@/components/auth/SignInForm";
import { signInContent as c } from "@/data/auth";

export const metadata: Metadata = {
  title: "Sign In | ByteSpace",
  description: "Sign in to your ByteSpace account.",
};

export default function SignInPage() {
  return (
    <AuthLayout
      heading={c.heading}
      description={c.description}
      showcase={<AuthShowcase />}
    >
      <AuthCard eyebrow={c.eyebrow} title={c.title}>
        <SignInForm />
      </AuthCard>
    </AuthLayout>
  );
}
