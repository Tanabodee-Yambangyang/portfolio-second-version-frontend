import DesktopNavBar from "@/components/navbars/DesktopNavBar";
import MobileTabletNavbar from "@/components/navbars/MobileTabletNavBar";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="hidden lg:block w-full">
        <DesktopNavBar />
      </div>
      <div className="block lg:hidden w-full">
        <MobileTabletNavbar />
      </div>
      <div className="pt-35 w-full h-full max-w-[1250px] px-14">
        TBA
      </div>
    </div>
  );
}
