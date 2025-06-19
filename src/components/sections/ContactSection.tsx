import { motion } from "framer-motion";
import clsx from "clsx";

import { ContactSectionProps } from "@/types/sections";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSection({ isDarkTheme, contactData, ref }: ContactSectionProps) {
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

    // handle email click to open Gmail compose
    const handleEmailClick = () => {
        const emailAddress = contactData?.email;
        if (!emailAddress) return;

        const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`;
        window.open(gmailComposeLink, "_blank");
    };

    const contactLinks = [
        {
            href: contactData?.facebook ?? "",
            label: "Facebook",
            icon: <FaFacebook size={40} />,
        },
        {
            href: contactData?.linkedin ?? "",
            label: "LinkedIn",
            icon: <FaLinkedin size={40} />,
        },
        {
            href: contactData?.github ?? "",
            label: "GitHub",
            icon: <FaGithub size={40} />,
        },
        {
            href: `mailto:${contactData?.email}`,
            label: "Email",
            icon: <FaEnvelope size={40} />,
        },
    ];

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col justify-between items-center pb-20"
        >
            <motion.div className="items-center flex flex-col justify-between sm:gap-8 gap-6" variants={containerVariants}>
                <motion.div className="items-center flex flex-col gap-1" variants={fadeUpVariants}>
                    <div className="flex lg:text-5xl md:text-4xl sm:text-3xl text-lg font-semibold" ref={ref}>
                        Contact
                    </div>
                    <div className={clsx("lg:text-lg sm:text-base text-xs",
                        isDarkTheme ? "text-white" : "text-gray-500"
                    )}>
                        Get in touch.
                    </div>
                </motion.div>

                <motion.div className="h-full flex gap-6" variants={fadeUpVariants}>
                    {contactLinks.map(({ href, label, icon }) => {
                        const isEmail = label === "Email";

                        return (
                            <a
                                key={label}
                                href={isEmail ? undefined : href}
                                onClick={isEmail ? handleEmailClick : undefined}
                                target={isEmail ? undefined : "_blank"}
                                rel={isEmail ? undefined : "noopener noreferrer"}
                                aria-label={label}
                                className={clsx(
                                    "transition rounded-lg md:p-4 p-2 cursor-pointer",
                                    isDarkTheme
                                        ? "text-white bg-black hover:text-black hover:bg-white"
                                        : "hover:bg-black hover:text-white bg-gray-100"
                                )}
                            >
                                {icon}
                            </a>
                        );
                    })}
                </motion.div>
            </motion.div>
        </motion.div>
    )
};
