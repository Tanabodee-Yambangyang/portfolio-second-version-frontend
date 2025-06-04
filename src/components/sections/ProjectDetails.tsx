"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
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

export default function ProjectDetails({ project }: ProjectCardProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="cursor-pointer w-full text-xs text-white bg-black py-2">
            View Details
          </Button>
        </DialogTrigger>

        <DialogContent className="flex flex-col items-center justify-center w-full sm:max-w-3xl p-6 xl:px-12">
          <DialogHeader>
            <DialogTitle className="text-lg">{project.name}</DialogTitle>
          </DialogHeader>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1 mt-2 mb-3 text-xs text-black">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-0.5 bg-gray-100 rounded-sm"
              >
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
                    className="relative w-full h-48 md:h-56 rounded-md overflow-hidden cursor-pointer group"
                    onClick={() => setSelectedImage(image)}
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
                    <div className="absolute inset-0 flex items-center justify-center bg-black opacity-0 group-hover:opacity-45 z-10 transition-opacity duration-300">
                      <ArrowsPointingOutIcon className="w-8 h-8 text-white opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="cursor-pointer" />
            <CarouselNext className="cursor-pointer" />
          </Carousel>
          <p className="text-xs text-gray-500 text-center xl:hidden">
            Tap the image to view the full image.
          </p>
          <p className="text-xs text-gray-500 text-center hidden xl:flex">
            Click on the image to view the full image.
          </p>
          {/* Tabs */}
          <Tabs defaultValue="overview" className="w-full mt-5">
            <div className="flex gap-2 w-full">
              <TabsList className="text-xs">
                <TabsTrigger value="overview" className="cursor-pointer">Overview</TabsTrigger>
                <TabsTrigger value="my-responsibilities" className="cursor-pointer">My Responsibilities</TabsTrigger>
              </TabsList>
              <Button asChild className="cursor-pointer text-xs text-white bg-black py-2">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-white sm:mr-2" />
                  <div className="hidden sm:flex"> Repository </div>
                </a>
              </Button>
            </div>
            <TabsContent
              value="overview"
              className="pt-3 text-sm leading-relaxed md:max-h-30 max-h-25 overflow-y-auto pr-2"
            >
              {project.description}
            </TabsContent>

            <TabsContent
              value="my-responsibilities"
              className="pt-3 md:max-h-30 max-h-25 overflow-y-auto pr-2"
            >
              <ul className="list-disc ml-4 space-y-1 text-sm leading-relaxed">
                {project.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>

          {/* Footer */}
          <DialogFooter className="sm:justify-start mt-4">
            <DialogClose asChild>
              <Button type="button" variant="secondary" className="cursor-pointer text-xs px-3 py-1">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Image Full Preview Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-screen-xl max-h-screen overflow-auto p-0">

          <DialogHeader>
            <DialogTitle className="sr-only">Image Preview</DialogTitle>
          </DialogHeader>

          {selectedImage && (
            <div className="relative w-full h-[80vh]">
              <Image
                src={selectedImage}
                alt="Full Preview"
                fill
                className="object-contain"
                priority
              />
            </div>
          )}
          <DialogFooter className="sm:justify-center sm:pb-6">
            <DialogClose asChild>
              <Button type="button" variant="secondary" className="cursor-pointer text-xs px-3 py-1">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
