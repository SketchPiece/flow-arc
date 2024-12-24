import type { ComponentProps } from "react";
import { cn } from "@/lib/helpers";

type ButtonProps = ComponentProps<"button">;

export default function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-xl bg-grey-darker px-9 py-5 text-lg text-grey-light transition-all hover:-translate-y-1 hover:shadow-2xl active:bg-grey-light active:text-grey-darker",
        className,
      )}
      {...props}
    />
  );
}
