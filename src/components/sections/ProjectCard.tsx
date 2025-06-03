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
import clsx from "clsx";

import { Button } from "@/components/ui/button";

import { ProjectCardProps } from "@/types/sections";

export default function ProjectCard({ project, isDarkTheme }: ProjectCardProps) {
    return (
        <Card className="w-full h-full p-6 flex flex-col justify-between">
            <CardHeader className="p-0 mb-2">
                <CardTitle className="md:text-base text-sm">{project.name}</CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col items-center gap-4 p-0">
                <div className="relative w-full h-60 overflow-hidden rounded-lg">
                    <Image
                        src={project.images[0]}
                        alt={project.slug}
                        fill
                        className="object-cover"
                        priority
                        quality={95}
                    />
                </div>
                <div className="md:text-base text-sm line-clamp-2">
                    {project.description}
                </div>
            </CardContent>

            <CardFooter className="p-0 pt-4">
                <Button
                    className="cursor-pointer w-full text-sm text-white bg-black"
                >
                    View Details
                </Button>
            </CardFooter>
        </Card>
    );
}
