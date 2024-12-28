import { cn } from "@/lib/utils";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

type PopoverMenuProps = React.ComponentProps<typeof PopoverButton>;

const services = [
  {
    name: "About us",
    href: "#",
    description:
      "Learn more about our company values and mission to empower others",
  },
  {
    name: "Careers",
    href: "#",
    description:
      "Looking for you next career opportunity? See all of our open positions",
  },
  {
    name: "Blog",
    href: "#",
    description:
      "Read our latest announcements and get perspectives from our team",
  },
];

export default function PopoverMenu({ className, ...props }: PopoverMenuProps) {
  return (
    <Popover className="relative">
      <PopoverButton className={cn(className)} {...props} />

      <PopoverPanel
        transition
        className="absolute -left-8 top-full z-10 mt-3 w-96 rounded-3xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        {services.map((item) => (
          <div
            key={item.name}
            className="relative rounded-lg p-4 hover:bg-gray-50"
          >
            <a
              href={item.href}
              className="block text-sm/6 font-semibold text-gray-900"
            >
              {item.name}
              <span className="absolute inset-0" />
            </a>
            <p className="mt-1 text-sm/6 text-gray-600">{item.description}</p>
          </div>
        ))}
      </PopoverPanel>
    </Popover>
  );
}
