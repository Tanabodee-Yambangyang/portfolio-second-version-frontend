"use client";
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import clsx from "clsx";

import DesktopNavBar from "@/components/navbars/DesktopNavBar";
import MobileTabletNavbar from "@/components/navbars/MobileTabletNavBar";
import { usePortfolioData } from "@/hooks/useProfileData"
import IntroductionSection from "@/components/sections/IntroductionSection";
import AboutMeSection from "@/components/sections/AboutMeSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperiencesSection from "@/components/sections/ExperiencesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  const {
    loading,
    error,
    handleSwitchTheme,
    isDarkTheme,
    contactData,
    profile,
    skillsData,
    educationData,
    experienceData,
    projectData
  } = usePortfolioData();
  
  return (
    <div className={clsx("grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] transition", isDarkTheme ? "bg-neutral-900 text-white" : "")}>
      <div className="hidden xl:block w-full">
        <DesktopNavBar isDarkTheme={isDarkTheme} handleSwitchTheme={handleSwitchTheme} />
      </div>
      <div className="block xl:hidden w-full">
        <MobileTabletNavbar isDarkTheme={isDarkTheme} handleSwitchTheme={handleSwitchTheme} />
      </div>

      <div className={"flex flex-col gap-12 w-full h-full max-w-[1250px] xl:px-14 xl:pt-35 pt-30 px-6"}>
          {/* <label> <LiveClock /> </label> */}
          <IntroductionSection isDarkTheme={isDarkTheme} profile={profile} />
          <AboutMeSection isDarkTheme={isDarkTheme} profile={profile} educationData={educationData} />
          <SkillsSection isDarkTheme={isDarkTheme} skills={skillsData} profile={undefined} />
          <ExperiencesSection isDarkTheme={isDarkTheme} profile={undefined} experienceData={experienceData} />
          <ProjectsSection isDarkTheme={isDarkTheme} profile={undefined} projectData={projectData} />
          <ContactSection isDarkTheme={isDarkTheme} profile={undefined} contactData={contactData} />
      </div>
    </div>
  );
}
