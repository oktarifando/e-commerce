"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import { ComponentProps } from "react";

type FormSubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

const FormSubmitButton = ({
  children,
  className,
  ...props
}: FormSubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <button
      {...props}
      type="submit"
      className={`btn btn-primary ${className}`}
      disabled={pending}
    >
      {children}
      {pending && <span className="loading loading-spinner loading-md" />}
    </button>
  );
};

export default FormSubmitButton;
