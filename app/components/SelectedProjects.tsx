import Project from "../components/Project";
import CarouselNavigation from "../components/CarouselNavigation";
import { prisma } from "@/lib/prisma";

export default async function SelectedProjects() {
  const projects = await prisma.project.findMany();

  return (
    <section className="flex w-screen max-w-112 overflow-x-scroll md:w-192 md:max-w-none lg:w-288  [&>*:nth-child(3n)]:bg-primary-800 [&>*:nth-child(3n)]:text-primary-100 [&>*:nth-child(3n+1)]:bg-primary-300 [&>*:nth-child(3n+2)]:bg-primary-50">
      {projects.map((project) => (
        <Project projectId={project.id} />
      ))}

      <CarouselNavigation />
    </section>
  );
}
