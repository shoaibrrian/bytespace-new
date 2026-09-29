"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { registerContent as c } from "@/data/register";

export function RegisterForm() {
  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()} // TODO: connect to auth API
        className="mt-10 flex flex-col gap-6"
      >
        <FormField
          label={c.fullName.label}
          type="text"
          name="fullName"
          autoComplete="name"
          placeholder={c.fullName.placeholder}
          required
        />
        <FormField
          label={c.email.label}
          type="email"
          name="email"
          autoComplete="email"
          placeholder={c.email.placeholder}
          required
        />
        <FormField
          label={c.password.label}
          type="password"
          name="password"
          autoComplete="new-password"
          placeholder={c.password.placeholder}
          minLength={8}
          required
        />
        <div className="flex justify-end">
          <Button type="submit" variant="secondary">
            {c.submit}
          </Button>
        </div>
      </form>

      <p className="mt-30 text-center text-body-l text-neutral-500">
        {c.switchPrompt}{" "}
        <Link
          href={c.switchHref}
          className="text-primary-700 transition-colors hover:text-primary-900 hover:underline"
        >
          {c.switchLabel}
        </Link>
      </p>
    </>
  );
}
