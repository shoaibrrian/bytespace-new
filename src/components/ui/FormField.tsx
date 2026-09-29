"use client";

import { useId } from "react";
import { Input } from "./Input";

type FormFieldProps = React.ComponentProps<"input"> & { label: string };

export function FormField({ label, id, ...props }: FormFieldProps) {
  const autoId = useId();
  const inputId = id ?? autoId;

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={inputId}
        className="text-label-s font-medium text-neutral-950"
      >
        {label}
      </label>
      <Input id={inputId} {...props} />
    </div>
  );
}
