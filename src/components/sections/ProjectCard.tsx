import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import Image from 'next/image';

import { Button } from "@/components/ui/button";

import { ProjectCardProps } from "@/types/sections";

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card className="w-full p-8">
            <CardHeader>
                <CardTitle className="md:text-base text-xs">{project.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <Image
                    src="/profile_pic.jpg"
                    width={500}
                    height={500}
                    alt={project.slug}
                />
            </CardContent>
            <CardFooter>

            </CardFooter>
        </Card>
    );
}