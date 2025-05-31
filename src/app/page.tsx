"use client";

import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";

import DesktopNavBar from "@/components/navbars/DesktopNavBar";
import MobileTabletNavbar from "@/components/navbars/MobileTabletNavBar";
import { usePortfolioData } from "@/hooks"
import clsx from "clsx";

export default function Home() {
  const {
    loading,
    error,
    handleSwitchTheme,
    isDarkTheme,
    contactData
  } = usePortfolioData();

  const contactLinks = [
    {
      href: contactData?.facebook ?? "",
      label: "Facebook",
      icon: <FaFacebook size={40} />,
    },
    {
      href: contactData?.linkedin ?? "",
      label: "LinkedIn",
      icon: <FaLinkedin size={40} />,
    },
    {
      href: contactData?.github ?? "",
      label: "GitHub",
      icon: <FaGithub size={40} />,
    },
    {
      href: `mailto:${contactData?.email}`,
      label: "Email",
      icon: <FaEnvelope size={40} />,
    },
  ];

  return (
    <div className={clsx("grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] transition", isDarkTheme ? "bg-neutral-900 text-white" : "")}>
      <div className="hidden lg:block w-full">
        <DesktopNavBar contactLinks={contactLinks} isDarkTheme={isDarkTheme} handleSwitchTheme={handleSwitchTheme} />
      </div>
      <div className="block lg:hidden w-full">
        <MobileTabletNavbar contactLinks={contactLinks} isDarkTheme={isDarkTheme} handleSwitchTheme={handleSwitchTheme} />
      </div>
      <div className={"pt-35 w-full h-full max-w-[1250px] px-14"}>
        
      </div>
    </div>
  );
}
