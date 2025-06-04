"use client";

import Image from "next/image";

import { FiMoon, FiSun } from "react-icons/fi";

import LiveClock from "@/components/LiveClock";
import { NavBarPropsInterface } from "@/types/navbars";

export default function DesktopNavBar({
  isDarkTheme,
  handleSwitchTheme,
}: NavBarPropsInterface) {
  return (
    <nav className="fixed top-0 z-50 flex h-16 w-full items-center justify-center bg-neutral-800 text-white">
      <div className="flex w-full max-w-[1250px] items-center justify-between px-6">
        {/* Logo */}
        <Image src="/logo1.svg" width={40} height={40} alt="Website Logo" priority />

        <div className="flex items-center justify-between gap-4">          
          <label> <LiveClock /> </label> 
          <label className="flex items-center text-2xl"> | </label>
          <div
            className="cursor-pointer flex items-center"
            onClick={handleSwitchTheme}
          >
            {isDarkTheme ? <FiMoon size={24} className="hover:text-gray-300 transition" /> : <FiSun size={24} className="hover:text-gray-300 transition" />}
          </div>
        </div>
      </div>
    </nav>
  );
}
