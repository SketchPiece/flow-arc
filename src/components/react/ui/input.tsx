import * as React from "react";

import { cn } from "@/lib/helpers";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full rounded-xl border border-grey-darkest bg-white px-5 py-4 text-base ring-offset-primary file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-grey focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grey-darkest focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
