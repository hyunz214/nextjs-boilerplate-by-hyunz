import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
};

export const Button = (props: ButtonProps) => {
  const { className, variant = "primary", children, ...other } = props;

  return (
    <button
      className={cn(
        "rounded-md px-4 py-2 text-sm font-semibold transition",
        variant === "primary" && "bg-primary text-white hover:bg-red-600",
        variant === "secondary" && "bg-gray-100 text-black hover:bg-gray-200",
        className,
      )}
      {...other}
    >
    {children}
    </button>
  );
};
