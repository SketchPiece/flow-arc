import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/helpers";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "rounded-smooth-large border border-grey-darker bg-primary p-12 shadow-[0_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 hover:shadow-[0_6px_10px_0px_rgba(0,0,0,1)]",
      className,
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

interface AccordionStateIndicatorProps extends React.ComponentProps<"div"> {
  state: "open" | "closed";
}

const AccordionStateIndicator = ({
  state,
  ...props
}: AccordionStateIndicatorProps) => {
  return (
    <div
      {...props}
      className={cn(
        "grid h-14 w-14 place-items-center rounded-full border border-grey-darker bg-grey-lighter",
        props.className,
      )}
    >
      {state === "open" ? (
        <svg
          width="18"
          height="7"
          viewBox="0 0 18 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 6.14V0.5H17.76V6.14H0Z" fill="black" />
        </svg>
      ) : (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.56938 25V15.311H0V9.689H9.56938V0H15.4306V9.689H25V15.311H15.4306V25H9.56938Z"
            fill="#191A23"
          />
        </svg>
      )}
    </div>
  );
};

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 items-center justify-between text-3xl font-medium transition-all [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <AccordionStateIndicator
        state="closed"
        className="group-[&[data-state=open]]:hidden"
      />
      <AccordionStateIndicator
        state="open"
        className="hidden group-[&[data-state=open]]:grid"
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div
      className={cn("mt-7 border-t border-grey-darkest pb-4 pt-7", className)}
    >
      {children}
    </div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
