"use client";

import Image from "next/image";
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
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

export default function MobileTabletNavbar() {
  const contactLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=100007994625777",
      label: "Facebook",
      icon: <FaFacebook size={40} />,
    },
    {
      href: "https://www.linkedin.com/in/tanabodee-yambangyang-11a3882a2/",
      label: "LinkedIn",
      icon: <FaLinkedin size={40} />,
    },
    {
      href: "https://github.com/Tanabodee-Yambangyang",
      label: "GitHub",
      icon: <FaGithub size={40} />,
    },
    {
      href: "mailto:tanabodeeyambangyang@gmail.com",
      label: "Email",
      icon: <FaEnvelope size={40} />,
    },
  ];

  return (
    <nav className="fixed top-0 z-50 flex h-16 w-full items-center justify-center bg-neutral-800 text-white">
      <div className="flex w-full max-w-[1250px] items-center justify-between px-6">
        {/* Logo */}
        <Image src="/logo1.svg" width={40} height={40} alt="Website Logo" priority />

        {/* Contact Drawer */}
        <Drawer>
          <DrawerTrigger asChild>
            <Button
              className="h-9 w-20 bg-transparent text-white"
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
      </div>
    </nav>
  );
}
