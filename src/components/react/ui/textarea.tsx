import * as React from "react";

import { cn } from "@/lib/helpers";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "border-gray-darkest placeholder:text-gray focus-visible:ring-gray-darkest flex min-h-[300px] w-full rounded-xl border bg-white px-5 py-4 text-base ring-offset-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
