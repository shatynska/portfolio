import Project from "../components/Project";
import CarouselNavigation from "../components/CarouselNavigation";
import { prisma } from "@/lib/prisma";

export default async function SelectedProjects() {
  const projects = await prisma.project.findMany();

  return (
    <section className="flex w-screen max-w-112 overflow-x-scroll md:w-192 md:max-w-none lg:w-auto lg:overflow-auto">
      {projects.map((project) => (
        <Project projectId={project.id} />
      ))}

      <CarouselNavigation />
    </section>
  );
}
