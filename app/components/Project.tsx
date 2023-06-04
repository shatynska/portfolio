import Image from "next/image";
import Cell from "./Cell";
import { prisma } from "@/lib/prisma";

export default async function Project({ projectId }: { projectId?: number }) {
  const project = await prisma.project.findFirst({
    where: {
      id: projectId,
    },
  });
  return (
    <article className="flex flex-col lg:flex-row" key={project?.id}>
      <Cell className="cell-md items-center border-b-2 border-primary-50 bg-primary-300">
        <Image
          src={project?.image || "/default.jpg"}
          alt={project?.title + "picture"}
          fill
          className="object-contain"
        />
      </Cell>
      <Cell className="cell-md bg-primary-800 text-primary-100 lg:order-last">
        <h3>{project?.title}</h3>
        <p className="text-sm">
          {/* {project?.types.map((type) => (
          {type.title}
          ))} */}
        </p>
      </Cell>
      <Cell className="cell-md border-b-2 bg-primary-50">
        <p className="text-sm">
          {/* {project?.roles.map((role) => (
          {role.title}
          ))} */}
        </p>
        <p className="text-sm">Stack: {project?.stack}</p>
      </Cell>
    </article>
  );
}
