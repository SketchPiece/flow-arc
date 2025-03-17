import type { ComponentProps } from "react";
import { cn } from "@/lib/helpers";

type ButtonProps = ComponentProps<"button">;

export default function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-xl bg-gray-darker px-7 py-5 text-sm text-gray-light transition-all hover:-translate-y-1 hover:shadow-2xl active:bg-gray-light active:text-gray-darker sm:px-8 sm:text-lg",
        className,
      )}
      {...props}
    />
  );
}
