import { LINKS } from "@/constants/content";
import { classNames } from "@/utils/strings";
import Link from "next/link";
import { useState } from "react";

const menuBarsClasses =
  "w-12 h-1 bg-black dark:bg-white absolute left-1/2 -translate-y-1/2 -translate-x-1/2 transition-all";
const delayClasses = ["delay-100", "delay-200", "delay-300"];

export const HeaderMenu = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((isOpen) => !isOpen);
  };

  return (
    <div className="flex items-center">
      <ul className="flex gap-4 mr-8">
        {LINKS.map(({ label, url }, idx) => (
          <li
            key={url}
            className={classNames(
              "transition-all uppercase font-semibold",
              open
                ? "translate-x-0 opacity-1"
                : "translate-x-4 opacity-0 pointer-events-none",
              delayClasses[open ? LINKS.length - idx - 1 : idx]
            )}
          >
            <Link href={url} onClick={toggle}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <button
        id="menu-trigger"
        className=" relative h-16 w-16"
        onClick={toggle}
      >
        <div
          id="top-line"
          className={classNames(
            menuBarsClasses,
            open ? "rotate-45" : "-translate-y-2"
          )}
        />
        <div
          id="bottom-line"
          className={classNames(
            menuBarsClasses,
            open ? "-rotate-45" : "translate-y-2"
          )}
        />
      </button>
    </div>
  );
};
