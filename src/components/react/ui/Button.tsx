import type { ComponentProps } from "react";
import { cn } from "@/lib/helpers";

type ButtonProps = ComponentProps<"button">;

export default function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "bg-gray-darker text-gray-light active:bg-gray-light active:text-gray-darker rounded-xl px-7 py-5 text-sm transition-all hover:-translate-y-1 hover:shadow-2xl sm:px-9 sm:text-lg",
        className,
      )}
      {...props}
    />
  );
}
