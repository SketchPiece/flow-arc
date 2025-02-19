import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import ukFlag from "@/assets/icons/uk.svg";
import gbFlag from "@/assets/icons/gb.svg";

interface LinkItem {
  name: string;
  href: string;
}

interface LinkGroup {
  name: string;
  items: Array<LinkItem>;
}

interface MobileMenuProps {
  navigation: Array<LinkGroup | LinkItem>;
  language?: string;
  languagePath?: string;
}

function isLinkItem(item: {
  name: string;
  href?: string;
  items?: Array<{ name: string; href: string }>;
}): item is LinkItem {
  return "href" in item;
}

export default function MobileMenu({
  navigation,
  language,
  languagePath,
}: MobileMenuProps) {
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
      <Transition show={menuOpen} as={Fragment}>
        <Dialog key="menu" onClose={setMenuOpen} className="lg:hidden">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
          </TransitionChild>
          <TransitionChild
            as={Fragment}
            enter="transform transition ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <DialogPanel className="bg-gray-light fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 font-serif sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href={languagePath}>
                  <img
                    src={language === "uk" ? ukFlag.src : gbFlag.src}
                    alt="Language Flag"
                    width="28"
                    height="28"
                  />
                </a>
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
                    {navigation.map((link) =>
                      isLinkItem(link) ? (
                        <a
                          key={link.name}
                          href={link.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Disclosure as="div" className="-mx-3" key={link.name}>
                          <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-xl font-semibold text-gray-900 hover:bg-gray-50">
                            {link.name}
                            <ChevronDownIcon
                              aria-hidden="true"
                              className="size-5 flex-none group-data-[open]:rotate-180"
                            />
                          </DisclosureButton>
                          <DisclosurePanel className="mt-2 space-y-2">
                            {link.items.map((item) => (
                              <DisclosureButton
                                key={item.name}
                                as="a"
                                href={item.href}
                                className="block rounded-lg py-2 pl-6 pr-3 text-lg font-semibold text-gray-900 hover:bg-gray-50"
                              >
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  );
}

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
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M1 9.80667H25"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M1 17.8067H25"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
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
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M1.51465 1.51472L18.4852 18.4853"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
