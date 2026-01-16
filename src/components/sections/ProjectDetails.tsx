"use client";
import clsx from "clsx";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Image from "next/image";
import { ArrowsPointingOutIcon } from "@heroicons/react/24/solid";
import { FaGithub } from "react-icons/fa";

import { ProjectCardProps } from "@/types/sections";

export default function ProjectDetails({ project, isDarkTheme }: ProjectCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={clsx("cursor-pointer w-full text-xs text-white bg-black py-2",
          isDarkTheme ? "border-1 border-white hover:bg-white hover:text-black" : ""
        )}>
          View Details
        </Button>
      </DialogTrigger>

      <DialogContent className={clsx("flex flex-col items-center justify-between w-full landscape-dialog sm:max-w-screen lg:max-w-3xl p-6 pb-18 xl:px-12 max-h-screen overflow-y-auto", isDarkTheme ? "bg-black text-white border-1 border-white" : "")}>
        <DialogHeader>
          <DialogTitle className="text-lg">{project.name}</DialogTitle>
        </DialogHeader>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1 mt-2 mb-3 text-xs text-black">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-2 py-0.5 bg-gray-100 rounded-sm">
              {tech}
            </span>
          ))}
        </div>

        {/* Carousel */}
        <Carousel className="w-full lg:max-w-xl max-w-8/10">
          <CarouselContent>
            {project.images.map((image, index) => (
              <CarouselItem key={index}>
                <div
                  className="relative w-full h-40 sm:h-48 md:h-56 rounded-md overflow-hidden cursor-pointer group"
                  onClick={() => window.open(image, "_blank")}
                >
                  <Image
                    src={image}
                    alt={`${project.name}-${index}`}
                    fill
                    className="object-cover"
                    priority
                    quality={95}
                  />
                  {/* Hover icon overlay */}
                  <div className="hidden absolute inset-0 xl:flex items-center justify-center bg-black opacity-0 group-hover:opacity-45 z-10 transition-opacity duration-300">
                    <ArrowsPointingOutIcon className="w-8 h-8 text-white opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className={clsx("cursor-pointer", isDarkTheme ? "text-black cursor-pointer" : "")} />
          <CarouselNext className={clsx("cursor-pointer", isDarkTheme ? "text-black cursor-pointer" : "")} />
        </Carousel>

        <p className={clsx("text-xs text-gray-500 text-center xl:hidden mt-1", isDarkTheme ? "text-white" : "")}>
          Tap the image to open the full image in a new tab.
        </p>
        <p className={clsx("text-xs text-gray-500 text-center hidden xl:flex mt-1", isDarkTheme ? "text-white" : "")}>
          Click the image to open the full image in a new tab.
        </p>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="w-full mt-5">
          <div className="flex flex-wrap gap-2 w-full">
            <TabsList className="text-xs">
              <TabsTrigger value="overview" className="cursor-pointer">Overview</TabsTrigger>
              <TabsTrigger value="my-responsibilities" className="cursor-pointer">My Responsibilities</TabsTrigger>
            </TabsList>

            <Button asChild className={clsx("cursor-pointer text-xs text-white bg-black py-2", isDarkTheme ? "border-1 border-white" : "")}>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-white sm:mr-2" />
                <div className="hidden sm:flex"> Repository </div>
              </a>
            </Button>
          </div>

          <TabsContent
            value="overview"
            className="pt-3 text-sm leading-relaxed max-h-35 sm:max-h-40 overflow-y-auto pr-2"
          >
            {project.description}
          </TabsContent>

          <TabsContent
            value="my-responsibilities"
            className="pt-3 max-h-35 overflow-y-auto pr-2"
          >
            <ul className="list-disc ml-4 space-y-1 text-sm leading-relaxed">
              {project.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
