"use client";
import { useState, useEffect } from "react";
import Clock from 'react-live-clock';
import clsx from "clsx";

import { LiveClockProps } from "@/types/liveclock";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function LiveClock({
}: LiveClockProps) {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    const isLargeScreen = useMediaQuery("(min-width: 1280px)");

    const format = isLargeScreen
        ? "dddd, DD MMMM YYYY, hh:mm:ss A"
        : "YYYY-MM-DD, hh:mm:ss A";

    if (!hasMounted) return null;

    return (
        <Clock
            key={format}
            format={format}
            ticking={true}
            className={clsx(isLargeScreen ? "text-base" : "text-sm")}
        />
    );
}