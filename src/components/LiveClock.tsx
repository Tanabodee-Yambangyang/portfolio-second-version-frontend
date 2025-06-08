"use client";
import { useState, useEffect } from "react";
import clsx from "clsx";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import weekday from "dayjs/plugin/weekday";
import updateLocale from "dayjs/plugin/updateLocale";

import { LiveClockProps } from "@/types/liveclock";
import useMediaQuery from "@/hooks/useMediaQuery";

dayjs.extend(localizedFormat);
dayjs.extend(weekday);
dayjs.extend(updateLocale);

export default function LiveClock({}: LiveClockProps) {
    const [time, setTime] = useState(dayjs());
    const isLargeScreen = useMediaQuery("(min-width: 1280px)");

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(dayjs());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const format = isLargeScreen
        ? "dddd, DD MMMM YYYY, hh:mm:ss A"
        : "YYYY-MM-DD, hh:mm:ss A";

    return (
        <span className={clsx(isLargeScreen ? "text-base" : "text-sm")}>
            {time.format(format)}
        </span>
    );
}