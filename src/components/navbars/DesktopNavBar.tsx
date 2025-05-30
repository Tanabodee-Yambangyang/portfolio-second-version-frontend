"use client";

import Image from "next/image";
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

import { Button } from "@/components/ui/button";

export default function DesktopNavBar() {
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
                    <a
                        href="https://www.facebook.com/profile.php?id=100007994625777"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="hover:text-gray-300 transition"
                    >
                        <FaFacebook size={30} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/tanabodee-yambangyang-11a3882a2/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-gray-300 transition"
                    >
                        <FaLinkedin size={30} />
                    </a>
                    <a
                        href="https://github.com/Tanabodee-Yambangyang"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="hover:text-gray-300 transition"
                    >
                        <FaGithub size={30} />
                    </a>
                    <a
                        href="mailto:tanabodeeyambangyang@gmail.com"
                        aria-label="Email"
                        className="hover:text-gray-300 transition"
                    >
                        <FaEnvelope size={30} />
                    </a>
                </div>
            </div>
        </nav>
    );
};
