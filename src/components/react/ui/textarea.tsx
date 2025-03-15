import * as React from "react";

import { cn } from "@/lib/helpers";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[200px] w-full rounded-xl border border-gray-darkest bg-white p-4 text-base ring-offset-primary placeholder:text-gray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-darkest focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
