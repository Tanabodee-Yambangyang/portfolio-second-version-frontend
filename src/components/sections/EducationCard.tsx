import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { EducationCardProps } from "@/types/sections";

export default function EducationCard({ id, educationData }: EducationCardProps) {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="md:text-base text-xs">{educationData.degrees}'s of {educationData.faculty}, {educationData.major}</CardTitle>
                <CardDescription>{educationData.university}</CardDescription>
            </CardHeader>
            <CardFooter>
                <div>{educationData.period}</div>
            </CardFooter>
        </Card>
    );
};
