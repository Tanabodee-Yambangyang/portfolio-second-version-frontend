import clsx from "clsx";

import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { EducationCardProps } from "@/types/sections";

export default function EducationCard({ educationData, isDarkTheme }: EducationCardProps) {
    return (
        <Card className={clsx("w-full", isDarkTheme ? "bg-black text-white" : "")}>
            <CardHeader>
                <CardTitle className="md:text-base text-xs">
                    {educationData.degrees} of {educationData.faculty} in {educationData.major}
                </CardTitle>
                <CardDescription className={clsx(isDarkTheme ? "text-white" : "")}>{educationData.university}</CardDescription>
            </CardHeader>
            <CardFooter>
                <div>{educationData.period}</div>
            </CardFooter>
        </Card>
    );
};
