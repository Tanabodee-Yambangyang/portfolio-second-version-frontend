import { motion } from "framer-motion";
import clsx from "clsx";
import Image from 'next/image';

import EducationCard from "@/components/sections/EducationCard";

import { AboutMeSectionProps } from "@/types/sections";

export default function AboutMeSection({ isDarkTheme, profile, educationData }: AboutMeSectionProps) {
    // Reusable motion variants
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
            <div className={clsx(
                "flex lg:flex-row flex-col justify-between gap-20 border-b-1 pb-12",
                isDarkTheme ? "border-white" : "border-gray-700"
            )}>
                <motion.div
                    className="lg:flex hidden justify-center items-center"
                    variants={containerVariants}
                >
                    <motion.div
                        variants={fadeUpVariants}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="h-65 w-45 p-6 py-12 border border-gray-300 shadow-md bg-white">
                            <Image
                                src="/profile_pic.jpg"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />
                        </div>
                    </motion.div>
                </motion.div>

                {/* About Me Text */}
                <div className="flex flex-col">
                    <motion.div
                        variants={fadeUpVariants}
                        className="flex lg:text-5xl md:text-4xl sm:text-3xl text-lg"
                    >
                        About Me.
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        className="lg:text-xl/8 sm:text-lg/8 text-sm/8 w-full mt-6"
                    >
                        <motion.div variants={fadeUpVariants}>
                            <div>
                                {profile?.about_me.split("\n\n").map((paragraph, index) => (
                                    <p key={index} className="mb-4 leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            {/* Left-side Image (Desktop) */}
            <motion.div
                className="justify-center items-center w-full"
                variants={containerVariants}
            >
                <motion.div
                    variants={fadeUpVariants}
                    className="lg:text-3xl md:text-2xl sm:text-xl text-base mb-8"
                >
                    Education.
                </motion.div>
                <motion.div
                    variants={fadeUpVariants}
                    whileTap={{ scale: 0.98 }}
                >
                    {educationData?.map((educationData, index) => (
                        <div key={educationData.id}>
                            <EducationCard
                                key={educationData.id} // this is for React's internal tracking only
                                id={educationData.id} // explicitly passing id as prop
                                educationData={educationData}
                                isDarkTheme={isDarkTheme}
                                profile={undefined}
                            />
                        </div>
                    ))}
                </motion.div>
            </motion.div>
            {/* Mobile Image */}
            <motion.div
                className="lg:hidden flex justify-center items-center"
                variants={containerVariants}
            >
                <motion.div
                    variants={fadeUpVariants}
                    whileTap={{ scale: 0.98 }}
                >
                    <div className="h-90 w-70 p-6 py-12 border border-gray-300 shadow-md bg-white">
                        <Image
                            src="/profile_pic.jpg"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
