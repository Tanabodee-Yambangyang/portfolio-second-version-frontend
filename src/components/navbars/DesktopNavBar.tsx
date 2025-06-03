"use client";

import Image from "next/image";
import { FiMoon, FiSun } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import LiveClock from "@/components/LiveClock";
import { NavBarPropsInterface } from "@/types/navbars";

export default function DesktopNavBar({
  isDarkTheme,
  handleSwitchTheme,
}: NavBarPropsInterface) {

  const navItems = [
    "About Me",
    "Education",
    "Skills & Tools",
    "Experience",
    "Projects",
    "Contact",
  ];

  return (
    <nav className="flex justify-center items-center fixed top-0 w-full h-16 bg-neutral-800 text-white z-50">
      <div className="flex justify-between items-center w-full max-w-[1250px] px-14">
        {/* Logo + Navigation */}
        <div className="flex items-center gap-8">
          <Image
            src="/logo1.svg"
            width={40}
            height={40}
            alt="Website Logo"
            priority
          />
          <div className="flex gap-2 text-lg font-medium">
            {navItems.map((item) => (
              <Button
                key={item}
                className="cursor-pointer w-24 hover:bg-transparent bg-transparent hover:text-gray-300 transition"
              >
                {item}
              </Button>
            ))}
          </div>
        </div>

        {/* Social Icons + Theme Switch */}
        <div className="flex items-center gap-6">
          <label> <LiveClock /> </label>

          <label className="flex items-center text-4xl"> | </label>
          <div
            className="cursor-pointer flex items-center"
            onClick={handleSwitchTheme}
          >
            {isDarkTheme ? <FiMoon size={35} className="hover:text-gray-300 transition" /> : <FiSun size={35} className="hover:text-gray-300 transition" />}
          </div>
        </div>
      </div>
    </nav>
  );
}
