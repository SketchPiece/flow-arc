import { cn } from "@/lib/helpers";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

interface PopoverItem {
  name: string;
  href: string;
  description?: string;
}
interface PopoverMenuProps extends React.ComponentProps<typeof PopoverButton> {
  items: PopoverItem[];
}

export default function PopoverMenu({
  className,
  items,
  ...props
}: PopoverMenuProps) {
  return (
    <Popover className="relative">
      <PopoverButton className={cn(className)} {...props} />

      <PopoverPanel
        transition
        className="ring-gray-darkest absolute -left-8 top-full z-10 mt-3 w-96 rounded-3xl bg-white p-4 shadow-2xl ring-1 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        {items.map((item) => (
          <div
            key={item.name}
            className="hover:bg-gray-lighter relative rounded-lg p-4"
          >
            <a
              href={item.href}
              className="text-gray-darkest block text-lg font-semibold"
            >
              {item.name}
              <span className="absolute inset-0" />
            </a>
            {item.description && (
              <p className="text-gray-darker mt-1 text-sm">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </PopoverPanel>
    </Popover>
  );
}
