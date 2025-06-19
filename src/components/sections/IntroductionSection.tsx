"use client";
import { motion } from "framer-motion";
import clsx from "clsx";
import { ArrowRightIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

import { Button } from "@/components/ui/button";
import { IntroductionSectionProps } from "@/types/sections";

export default function IntroductionSection({ isDarkTheme, profile, scrollTargetRef }: IntroductionSectionProps) {
  // Motion variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 180,
        damping: 22,
      },
    },
  };

  const scrollToSection = (ref?: React.RefObject<HTMLDivElement | null>, offset = 100) => {
    if (ref?.current) {
      const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className={clsx(
        "flex flex-col justify-between h-90 border-b-1 pb-12",
        isDarkTheme ? "border-white" : "border-gray-700"
      )}
    >
      <motion.div className="flex flex-col justify-between sm:gap-8 gap-6" variants={containerVariants}>
        <motion.div className="flex flex-col lg:gap-4" variants={fadeUpVariants}>
          <div className="flex lg:text-5xl md:text-4xl sm:text-3xl text-lg">
            <b>Hello</b>, I&apos;m {profile?.first_name} {profile?.last_name}.
          </div>
          <div className="lg:text-lg sm:text-base text-xs">
            Aspiring Software Engineer | Web Developer
          </div>
        </motion.div>

        <motion.div
          className={clsx(
            "lg:text-xl sm:text-lg text-sm w-full",
            isDarkTheme ? "text-white" : "text-gray-500"
          )}
          variants={fadeUpVariants}
        >
          {profile?.introduction}
        </motion.div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div className="flex gap-4 mt-8" variants={containerVariants}>
        <motion.div
          variants={fadeUpVariants}
          whileHover={{ scale: 1.05 }}
        >
          <Button
            className={clsx("cursor-pointer sm:w-50", isDarkTheme ? "bg-white text-black" : "")}
            onClick={() => scrollToSection(scrollTargetRef)}
          >
            <> View my projects </>
            <ArrowRightIcon />
          </Button>
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          whileHover={{ scale: 1.05 }}
        >
          <Button
            asChild
            className={clsx("cursor-pointer sm:w-50", isDarkTheme ? "bg-white text-black" : "")}
          >
            <a
              href={profile?.cv}
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <> View my resume </>
              <ArrowTopRightOnSquareIcon />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
