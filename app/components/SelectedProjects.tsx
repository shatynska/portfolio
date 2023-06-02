import Image from "next/image";
import Project from "../components/Project";
import Cell from "../components/Cell";
import { prisma } from "@/lib/prisma";

export default async function SelectedProjects() {
  const projects = await prisma.project.findMany();

  return (
    <section className="flex w-screen max-w-112 gap-10 overflow-x-scroll md:w-192 md:max-w-none lg:w-auto lg:flex-col lg:gap-0 lg:overflow-auto">
      {projects.map((project) => (
        <Project projectId={project.id} />
      ))}

      <section className="hidden lg:flex">
        <Cell className="h-18 border-l-2 bg-primary-50"></Cell>
        <Cell className="h-18 items-center bg-primary-700 text-primary-100">
          Other projects &gt;
        </Cell>
        <Cell className="h-18 bg-primary-300"></Cell>
      </section>
    </section>
  );
}
