import { motion } from "framer-motion";
import clsx from "clsx";

import ExperienceCard from "@/components/sections/ExperienceCard";

import { ExperiencesSectionProps } from "@/types/sections"

export default function ExperiencesSection({ isDarkTheme, experienceData, ref }: ExperiencesSectionProps) {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.05,
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
                damping: 20,
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className={clsx(
                "flex flex-col gap-10 border-b-1 pb-12",
                isDarkTheme ? "border-white" : "border-gray-700"
            )}
        >
            <motion.div
                variants={fadeUpVariants}
                className="flex lg:text-5xl md:text-4xl sm:text-3xl text-lg font-semibold"
                ref={ref}
            >
                Experience.
            </motion.div>
            <motion.div
                className="justify-center items-center w-full"
                variants={containerVariants}
            >
                <motion.div
                    variants={fadeUpVariants}
                >
                    {experienceData?.map((experience) => (
                        <ExperienceCard key={experience.id} experience={experience} />
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}