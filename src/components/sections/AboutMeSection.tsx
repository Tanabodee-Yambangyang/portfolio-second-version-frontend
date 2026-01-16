import { motion } from "framer-motion";
import clsx from "clsx";
import Image from 'next/image';

import EducationCard from "@/components/sections/EducationCard";

import { AboutMeSectionProps } from "@/types/sections";

export default function AboutMeSection({ isDarkTheme, profile, educationData, ref, eduRef }: AboutMeSectionProps) {
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
            ref={ref}
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
                    >
                        <div className={clsx("h-65 w-45 p-6 py-12 border border-gray-300 shadow-md", 
                            isDarkTheme ? "bg-black" : "bg-white"
                        )}>
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
                        className="flex lg:text-5xl md:text-4xl sm:text-3xl text-lg font-semibold"
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
                    {/* Mobile Image */}
                    <motion.div
                        className="lg:hidden flex justify-center items-center"
                        variants={containerVariants}
                    >
                        <motion.div
                            variants={fadeUpVariants}
                        >
                            <div className={clsx("h-90 w-70 p-6 py-12 border border-gray-300 shadow-md bg-white",
                                isDarkTheme ? "bg-black" : "bg-white"
                            )}>
                                <Image
                                    src="/profile_pic.jpg"
                                    width={500}
                                    height={500}
                                    alt="Picture of the author"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            {/* Left-side Image (Desktop) */}
            <motion.div
                className="justify-center items-center w-full"
                variants={containerVariants}
                ref={eduRef}
            >
                <motion.div
                    variants={fadeUpVariants}
                    className="flex lg:text-5xl md:text-4xl sm:text-3xl text-lg mb-8 font-semibold"
                >
                    Education.
                </motion.div>
                <motion.div
                    className="flex flex-col gap-4"
                    variants={fadeUpVariants}
                >
                    {/* <div className="">

                    </div> */}
                    {educationData?.map((educationData) => (
                        <div key={educationData.id}>
                            <EducationCard
                                key={educationData.id}
                                educationData={educationData}
                                isDarkTheme={isDarkTheme}
                                profile={undefined}
                            />
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
