import { LINKS } from "@/constants/content";
import { classNames } from "@/utils/strings";
import Link from "next/link";
import { useState } from "react";

const menuBarsClasses =
  "w-12 h-1 bg-black dark:bg-white absolute left-1/2 -translate-y-1/2 -translate-x-1/2 transition-all";
const delayClasses = ["delay-100", "delay-200", "delay-300"];

export const HeaderMenu = ({ alwaysVisible = true }) => {
  const [open, setOpen] = useState(alwaysVisible);

  const toggle = () => {
    if (alwaysVisible) return;
    setOpen((isOpen) => !isOpen);
  };

  return (
    <div className="flex items-center">
      <ul className="flex gap-4 mr-8">
        {LINKS.map(({ label, url }, idx) => (
          <li
            key={url}
            className={classNames(
              "transition-all uppercase font-light",
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
      {!alwaysVisible && (
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
      )}
    </div>
  );
};
