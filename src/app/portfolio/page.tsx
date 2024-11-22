import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/Components/ui/sheet";
import { projects } from "@/__data__/portfolio";
import Image from "next/image";
import { Button } from "@/Components/ui/button";
import { Eye, Github } from "lucide-react";
import { Badge } from "@/Components/ui/badge";
export default function page() {
  return (
    <div className=" mx-auto max-w-4xl px-4 space-y-8 ">
      <h2 className="text-2xl text-center">My Projects</h2>

      <section className=" grid md:grid-cols-2 gap-4 lg:gap-10 py-10">
        {projects.map((item, idx) => (
          <Sheet key={idx}>
            <SheetTrigger>
              <div className="group relative cursor-pointer rounded-md border shadow-lg">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10"></div>
                <Image
                  alt={item.title}
                  src={item.thumbnail}
                  width={900}
                  height={800}
                  className="h-64 w-full    group-hover:object-right duration-500 ease-in-out transition-all rounded-md  object-cover object-left-top"
                />
              </div>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto sm:max-w-[800px] z-[9999]">
              <SheetHeader>
                <SheetTitle className="text-2xl font-bold">
                  {item.title}
                </SheetTitle>
              </SheetHeader>
              <SheetDescription className="mt-4 text-base">
                {item.description}
              </SheetDescription>
              <div className="mt-6">
                <Image
                  alt={item.title}
                  src={item.thumbnail}
                  width={800}
                  height={800}
                  className="h-full w-full rounded-md object-cover"
                />
              </div>
              <div className="mt-4 flex md:flex-row flex-col gap-2">
                <Button variant="default" asChild>
                  <a target="_blank" href={item.liveLink}>
                    <Eye className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a target="_blank" href={item.codeLink}>
                    <Github className="mr-2 h-4 w-4" /> View Code
                  </a>
                </Button>
              </div>
              <div className="mt-6">
                <h3 className="mb-2 text-lg font-semibold">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {item.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <h3 className="mb-2 text-lg font-semibold">Key Features</h3>
                <ul className="list-disc space-y-1 pl-5">
                  {item.features.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        ))}
      </section>
    </div>
  );
}
