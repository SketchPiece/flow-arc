import type { ComponentProps } from "react";
import { cn } from "../../lib/utils";

type ButtonProps = ComponentProps<"button">;

export default function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-xl bg-black px-9 py-5 text-lg text-white",
        className,
      )}
      {...props}
    />
  );
}
