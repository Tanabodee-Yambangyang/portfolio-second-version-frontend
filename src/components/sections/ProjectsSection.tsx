import { motion } from "framer-motion";
import clsx from "clsx";

import ProjectCard from "./ProjectCard";

import { ProjectsSectionProps } from "@/types/sections";

export default function ProjectsSection({ isDarkTheme, projectData, ref }: ProjectsSectionProps) {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.06,
                delayChildren: 0.005,
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
                className="flex lg:text-5xl md:text-4xl sm:text-3xl text-lg"
                ref={ref}
            >
                Projects.
            </motion.div>
            <motion.div
                variants={containerVariants}
            >
                <div className="grid md:grid-cols-3 grid-cols-1 w-full gap-8">
                    {projectData?.map((project, index) => (
                        <ProjectCard key={project.id} project={project} isDarkTheme={isDarkTheme} />
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}