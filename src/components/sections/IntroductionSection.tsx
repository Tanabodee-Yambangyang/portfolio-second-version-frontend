"use client";
import { motion } from "framer-motion";
import clsx from "clsx";
import { ArrowRightIcon } from '@heroicons/react/24/solid'; // or /outline
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

import { Button } from "@/components/ui/button";
import { IntroductionSectionProps } from "@/types/sections";

export default function IntroductionSection({ isDarkTheme, profile }: IntroductionSectionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={clsx(
                "flex flex-col justify-between h-100 border-b-1 pb-12",
                isDarkTheme ? "border-white" : "border-gray-700"
            )}
        >
            <div className="flex flex-col justify-between sm:gap-8 gap-6">
                <div className="flex flex-col lg:gap-4">
                    <div className="flex lg:text-5xl md:text-4xl sm:text-3xl text-lg">
                        <b>Hello</b>, I'm {profile?.first_name} {profile?.last_name}.
                    </div>
                    <div className="lg:text-lg sm:text-base text-xs">
                        Aspiring Software Engineer | Web Developer
                    </div>
                </div>

                <div className={clsx("lg:text-xl sm:text-lg text-sm w-full ", isDarkTheme ? "text-white" : "text-gray-500")}>
                    {profile?.introduction}
                </div>
            </div>

            <motion.div
                className="flex gap-4"
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
                    <Button className={clsx("cursor-pointer sm:w-50", isDarkTheme ? "bg-white text-black" : "")}>
                        <> View my projects </>
                        <ArrowRightIcon />
                    </Button>
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 1 }}
                >
                    <Button className={clsx("cursor-pointer sm:w-50", isDarkTheme ? "bg-white text-black" : "")}>
                        <> Download CV </>
                        <ArrowDownTrayIcon />
                    </Button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}