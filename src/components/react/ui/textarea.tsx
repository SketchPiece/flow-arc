import * as React from "react";

import { cn } from "@/lib/helpers";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[300px] w-full rounded-xl border border-grey-darkest bg-white px-5 py-4 text-base ring-offset-primary placeholder:text-grey focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grey-darkest focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
