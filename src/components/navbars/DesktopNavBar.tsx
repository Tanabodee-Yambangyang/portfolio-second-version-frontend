"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";

import { NavBarPropsInterface } from "@/types/navbars";

export default function DesktopNavBar(contactLinks: NavBarPropsInterface) {
    return (
        <nav className="flex justify-center items-center fixed top-0 w-full h-16 bg-neutral-800 text-white z-50">
            <div className="flex justify-between items-center w-full max-w-[1250px] px-14">
                {/* Logo + Navigation */}
                <div className="flex items-center gap-8">
                    <Image src="/logo1.svg" width={40} height={40} alt="Website Logo" priority />
                    <div className="flex gap-8 text-lg font-medium">
                        <Button className="cursor-pointer w-30" variant="ghost">About Me</Button>
                        <Button className="cursor-pointer w-30" variant="ghost">Skills & Tools</Button>
                        <Button className="cursor-pointer w-30" variant="ghost">Projects</Button>
                        <Button className="cursor-pointer w-30" variant="ghost">Experience</Button>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="flex gap-6">
                    {contactLinks.contactLinks.map(({ href, label, icon }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="hover:text-gray-300 transition"
                        >
                            {icon}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};
