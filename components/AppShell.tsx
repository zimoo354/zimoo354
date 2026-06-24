import { Header } from "@/components/header";
import { NoiseOverlay } from "@/components/common/NoiseOverlay";
import { ContactModal } from "@/components/header/ContactModal";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NoiseOverlay />
      <Header />
      <main className="block m-auto max-w-7xl">{children}</main>
      <ContactModal />
    </>
  );
}
