import { LINKS } from "@/constants/content";
import { classNames } from "@/utils/strings";
import Link from "next/link";

export const HeaderMenu = () => (
  <div className="flex items-center">
    <ul className="flex gap-2 lg:gap-4 mr-2 lg:mr-0">
      {LINKS.map(({ label, url }) => (
        <li
          key={url}
          className={classNames(" uppercase font-light text-sm lg:text-md")}
        >
          <Link
            href={url}
            className={classNames(
              "hover:underline",
              label === "Contact" ? "contact-trigger" : ""
            )}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
