import { PRODUCTION } from "@/lib/env";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DarkModeToggle } from "@/components/common/DarkModeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: "/favicon.png",
  title: "Charlie Ruiz 🧑🏻‍💻",
  description: "SWE with 9-yoe | Typescript | React | Next | Node.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {!PRODUCTION && <DarkModeToggle />}
        <main className="block m-auto max-w-7xl">{children}</main>
      </body>
    </html>
  );
}
