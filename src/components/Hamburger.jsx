import { useState } from "preact/hooks";

export default function Hamburger({ menuId }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    const mobileMenu = document.getElementById(menuId);
    if (mobileMenu) {
      if (isOpen) {
        mobileMenu.classList.add("hidden");
      } else {
        mobileMenu.classList.remove("hidden");
      }
    }
  };

  return (
    <div class="flex lg:hidden">
      <button
        type="button"
        onClick={toggleMenu}
        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-900 dark:text-white"
      >
        <span class="sr-only">
          {isOpen ? "Close main menu" : "Open main menu"}
        </span>
        {isOpen ? (
          <svg
            class="size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            class="size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
