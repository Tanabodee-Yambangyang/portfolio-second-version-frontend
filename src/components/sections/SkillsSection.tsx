import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { SkillsSectionProps } from "@/types/sections";
import clsx from "clsx";

export default function SkillsSection({ isDarkTheme, skills }: SkillsSectionProps) {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const skillCategories = [
    { title: "Programming Languages", items: skills?.programming_languages ?? [] },
    { title: "Web Development", items: skills?.web_development ?? [] },
    { title: "Tools & Platforms", items: skills?.tools_platforms ?? [] },
    { title: "Methodologies", items: skills?.methodologies ?? [] },
    { title: "Soft Skills", items: skills?.soft_skills ?? [] },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.005,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 20,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 180,
        damping: 22,
        delay: 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className={clsx(
        "flex flex-col justify-between border-b-1 pb-12",
        isDarkTheme ? "border-white" : "border-gray-700"
      )}
    >
      <motion.div
        variants={titleVariants}
        className="flex lg:text-5xl md:text-4xl sm:text-3xl text-lg"
      >
        Skills & Familiar Tools.
      </motion.div>

      <div className="flex flex-col gap-6 lg:text-xl/8 sm:text-lg/8 text-sm/8 w-full mt-8">
        {skillCategories.map((category, idx) => (
          <div key={idx}>
            <motion.div
              variants={titleVariants}
              className="sm:text-xl text-base font-semibold mb-2"
            >
              {category.title}
            </motion.div>

            <motion.div
              className="grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-2"
              variants={containerVariants}
            >
              {category.items.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                >
                  <div
                    className={clsx(
                      "p-2 px-4 rounded-sm text-sm text-center transition-colors duration-300",
                      isDarkTheme ? "bg-white text-black" : "bg-gray-100"
                    )}
                  >
                    {item}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
