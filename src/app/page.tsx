"use client";

import { useRef, useEffect } from "react";
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
import GoToTopBtn from "@/components/GoToTopBtn";
import ErrorComponent from "@/components/ErrorComponent";

export default function Home() {

  useEffect(() => {
    const handleOrientation = () => {
      const body = document.body;
      const isMobile = window.innerWidth <= 639;

      if (!isMobile) {
        body.classList.remove('landscape', 'portrait');
        return;
      }

      if (window.innerHeight >= window.innerWidth) {
        body.classList.remove('landscape');
        body.classList.add('portrait');
      } else {
        body.classList.remove('portrait');
        body.classList.add('landscape');
      }
    };

    window.addEventListener('resize', handleOrientation);
    window.addEventListener('orientationchange', handleOrientation);
    handleOrientation();

    return () => {
      window.removeEventListener('resize', handleOrientation);
      window.removeEventListener('orientationchange', handleOrientation);
    };
  }, []);

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

  // Declare refs for each section
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  // Scroll handler
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>, offset = 100) => {
    if (ref.current) {
      const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {loading ? (
        // Replace this with your own loader UI (centered spinner etc.)
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
          <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : error ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
          <ErrorComponent />
        </div>
      ) : (
        <div className={clsx("grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] transition", isDarkTheme ? "bg-neutral-900 text-white" : "")}>
          <GoToTopBtn />
          <div className="hidden xl:block w-full">
            <DesktopNavBar
              isDarkTheme={isDarkTheme}
              handleSwitchTheme={handleSwitchTheme}
              onNavItemClick={(section) => {
                if (section === "About Me") scrollToSection(aboutRef);
                if (section === "Skills & Tools") scrollToSection(skillsRef);
                if (section === "Experience") scrollToSection(experienceRef);
                if (section === "Education") scrollToSection(educationRef);
                if (section === "Projects") scrollToSection(projectsRef);
                if (section === "Contact") scrollToSection(contactRef);
              }}
            />
          </div>
          <div className="block xl:hidden w-full">
            <MobileTabletNavbar isDarkTheme={isDarkTheme} handleSwitchTheme={handleSwitchTheme} />
          </div>

          <div className={"flex flex-col gap-12 w-full h-full max-w-[1250px] xl:px-14 xl:pt-35 pt-30 px-6"}>
            <IntroductionSection isDarkTheme={isDarkTheme} profile={profile} scrollTargetRef={projectsRef} />
            <AboutMeSection isDarkTheme={isDarkTheme} profile={profile} educationData={educationData} ref={aboutRef} eduRef={educationRef} />
            <SkillsSection isDarkTheme={isDarkTheme} skills={skillsData} profile={undefined} scrollRef={skillsRef} />
            <ExperiencesSection isDarkTheme={isDarkTheme} profile={undefined} experienceData={experienceData} ref={experienceRef} />
            <ProjectsSection isDarkTheme={isDarkTheme} profile={undefined} projectData={projectData} ref={projectsRef} />
            <ContactSection isDarkTheme={isDarkTheme} profile={undefined} contactData={contactData} ref={contactRef} />
          </div>
        </div>
      )}
    </>
  );
}
