// "use client";
import { prisma } from "@/lib/prisma";
import Carousel from "../components/Carousel";
import Project from "../components/Project";

export default async function Projects() {
  // const projects = await prisma.project.findMany({
  //   select: {
  //     id: true,
  //   },
  // });

  return (
    <div></div>
    // <Carousel className="flex w-screen max-w-112 flex-col overflow-hidden md:w-192 md:max-w-none lg:w-288 ">
    //   {projects.map((project) => (
    //     <Project projectId={project.id} />
    //   ))}
    // </Carousel>
  );
}
