"use client";
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import clsx from "clsx";
import { motion } from "framer-motion";

import DesktopNavBar from "@/components/navbars/DesktopNavBar";
import MobileTabletNavbar from "@/components/navbars/MobileTabletNavBar";
import LiveClock from "@/components/LiveClock";
import { usePortfolioData } from "@/hooks/useProfileData"
import IntroductionSection from "@/components/sections/IntroductionSection";

export default function Home() {
  const {
    loading,
    error,
    handleSwitchTheme,
    isDarkTheme,
    contactData,
    profile
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
      <div className="hidden xl:block w-full">
        <DesktopNavBar contactLinks={contactLinks} isDarkTheme={isDarkTheme} handleSwitchTheme={handleSwitchTheme} />
      </div>
      <div className="block xl:hidden w-full">
        <MobileTabletNavbar contactLinks={contactLinks} isDarkTheme={isDarkTheme} handleSwitchTheme={handleSwitchTheme} />
      </div>

      <div className={"flex flex-col gap-12 w-full h-full max-w-[1250px] xl:px-14 xl:pt-35 pt-30 px-6"}>
          <label> <LiveClock /> </label>          
          <IntroductionSection isDarkTheme={isDarkTheme} profile={profile} />
      </div>
    </div>
  );
}
