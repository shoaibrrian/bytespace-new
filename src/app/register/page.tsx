import type { Metadata } from "next";
import { AuthCard } from "@/components/auth/AuthCard";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { AuthShowcase } from "@/components/auth/AuthShowcase";
import { RegisterForm } from "@/components/auth/RegisterForm";
import { registerContent as c } from "@/data/register";

export const metadata: Metadata = {
  title: "Create Account | ByteSpace",
  description: "Create your ByteSpace account.",
};

export default function RegisterPage() {
  return (
    <AuthLayout
      heading={c.heading}
      description={c.description}
      showcase={<AuthShowcase />}
    >
      <AuthCard eyebrow={c.eyebrow} title={c.title}>
        <RegisterForm />
      </AuthCard>
    </AuthLayout>
  );
}
