import { motion } from "framer-motion";
import clsx from "clsx";
import Image from 'next/image'

import { AboutMeSectionProps } from "@/types/sections"

export default function AboutMeSection({ isDarkTheme, profile }: AboutMeSectionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={clsx(
                "flex lg:flex-row flex-col justify-between border-b-1 pb-12 gap-20",
                isDarkTheme ? "border-white" : "border-gray-700"
            )}
        >
            <motion.div
                className="lg:flex hidden justify-center items-center"
                initial="hidden"
                whileInView="visible"
                transition={{ staggerChildren: 0.2 }}
                variants={{
                    visible: { transition: { staggerChildren: 0.2 } },
                    hidden: {},
                }}
            >
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 1 }}
                >
                    <div className="h-75 w-55 p-6 py-12 border border-gray-300 shadow-md bg-white">
                        <Image
                            src="/profile_pic.jpg"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />
                    </div>
                </motion.div>
            </motion.div>
            <div className="flex flex-col">
                <div className="flex lg:text-5xl md:text-4xl sm:text-3xl text-lg">
                    About Me.
                </div>
                <div className="lg:text-xl/8 sm:text-lg/8 text-sm/8 w-full ">
                    <motion.div
                        className=""
                        initial="hidden"
                        whileInView="visible"
                        transition={{ staggerChildren: 0.2 }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.2 } },
                            hidden: {},
                        }}
                    >
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 1 }}
                        >
                            <div>                                 
                                {profile?.about_me.split("\n\n").map((paragraph, index) => (
                                    <p key={index}>
                                        <br/>
                                        {paragraph}
                                    </p>
                                ))}                            
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            <motion.div
                className="lg:hidden flex justify-center items-center"
                initial="hidden"
                whileInView="visible"
                transition={{ staggerChildren: 0.2 }}
                variants={{
                    visible: { transition: { staggerChildren: 0.2 } },
                    hidden: {},
                }}
            >
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 1 }}
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