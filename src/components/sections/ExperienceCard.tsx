import {
    Card,
    CardDescription,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ExperienceCardProps } from "@/types/sections";

export default function ExperienceCard({ experience }: ExperienceCardProps) {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="md:text-base text-xs">{experience.position}</CardTitle>
                <CardDescription className="md:text-base text-xs">
                    {experience.company} | {experience.duration}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <b className="md:text-base text-xs">
                    My Responsibilities:
                </b>
                <ul className="list-disc ml-4 md:text-base text-xs">
                    {experience.responsibilities.map((responsibility, index) => (
                        <li key={index}>
                            {responsibility}
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}