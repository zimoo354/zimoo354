import { HeaderMenu } from "./HeaderMenu";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex items-center w-full justify-between p-4">
      <Link href="/">
        <Image
          alt="Charlie Ruiz"
          src="/images/logo.webp"
          width={164}
          height={68}
          className="w-24"
        />
      </Link>
      <HeaderMenu />
    </header>
  );
};
