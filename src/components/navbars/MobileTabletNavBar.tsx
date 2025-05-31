"use client";

import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { NavBarPropsInterface } from "@/types/navbars";
import { FiMoon, FiSun } from "react-icons/fi";

export default function DesktopNavBar({
  contactLinks,
  isDarkTheme,
  handleSwitchTheme,
}: NavBarPropsInterface) {
  return (
    <nav className="fixed top-0 z-50 flex h-16 w-full items-center justify-center bg-neutral-800 text-white">
      <div className="flex w-full max-w-[1250px] items-center justify-between px-6">
        {/* Logo */}
        <Image src="/logo1.svg" width={40} height={40} alt="Website Logo" priority />

        <div className="flex justify-between gap-4">
          <Drawer>
            <DrawerTrigger asChild>
              <Button
                className="h-9 p-0 bg-transparent text-white"
              >
                Contact.
              </Button>
            </DrawerTrigger>

            <DrawerContent>
              <div className="mx-auto w-full max-w-sm px-8">
                <DrawerHeader>
                  <DrawerTitle>Get in Touch</DrawerTitle>
                </DrawerHeader>
                <div className="flex justify-between py-8 px-4">
                  {contactLinks.map(({ href, label, icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                    >
                      {icon}
                    </a>
                  ))}
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
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
