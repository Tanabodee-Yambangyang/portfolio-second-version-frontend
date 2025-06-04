'use client';

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid"
import clsx from "clsx";

export default function GoToTopBtn() {
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (scrollTop / windowHeight) * 100;
            setScrollPercent(scrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div
            className={clsx("fixed bottom-6 right-6 z-50 rounded-full p-4 bg-gray-100 shadow-md cursor-pointer transition-opacity duration-300",
                scrollPercent > 15 ? "opacity-100" : "opacity-0 pointer-events-none")}
            onClick={scrollToTop}
        >
            <ArrowUpIcon className="w-6 h-6 text-black" />
        </div>
    );
}