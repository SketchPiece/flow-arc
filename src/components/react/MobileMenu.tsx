import { Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";

function BurgerIcon() {
  return (
    <svg
      width="26"
      height="19"
      viewBox="0 0 26 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1.80667H25"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M1 9.80667H25"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M1 17.8067H25"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.51465 18.4853L18.4852 1.51471"
        stroke="black"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M1.51465 1.51472L18.4852 18.4853"
        stroke="black"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  );
}

interface MobileMenuProps {
  navigation: Array<{ name: string; href: string }>;
}

export default function MobileMenu({ navigation }: MobileMenuProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="flex lg:hidden">
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <BurgerIcon />
        </button>
      </div>
      <Dialog open={menuOpen} onClose={setMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-grey-light px-6 py-6 font-serif sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <CrossIcon />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}
