import Image from "next/image";
import Cell from "./Cell";
import { prisma } from "@/lib/prisma";

export default async function Project({ projectId }: { projectId?: number }) {
  const project = await prisma.project.findUnique({
    where: {
      id: projectId,
    },
    include: {
      roles: {
        include: {
          role: true,
        },
      },
    },
  });
  return (
    <Cell
      key={project?.id}
      className="keen-slider__slide flex h-144 gap-10 text-sm"
    >
      <Image
        src={project?.image || "/default.jpg"}
        alt={project?.title + "picture"}
        width="384"
        height="192"
        className="h-48 w-96 overflow-clip object-contain"
      />
      <section className="flex flex-col gap-5 leading-6">
        <div>{project?.type}</div>
        <h3>{project?.title}</h3>
        <div>
          Roles:&nbsp;
          {project?.roles.map((role) => (
            <span className="after:content-[',\a0'] last:content-none">
              {role.role.title}
            </span>
          ))}
        </div>
        <div>Stack: {project?.stack}</div>
      </section>
    </Cell>
  );
}
