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
      className="flex h-144 content-start gap-10 border-primary-50 bg-primary-300 text-sm"
    >
      <Image
        src={project?.image || "/default.jpg"}
        alt={project?.title + "picture"}
        width="384"
        height="192"
        className="object-contain"
      />
      <section>
        <p>{project?.type}</p>
        <h3>{project?.title}</h3>
        <p>
          Roles:&nbsp;
          {project?.roles.map((role) => role.role.title + " ")}
        </p>
        <p>Stack: {project?.stack}</p>
      </section>
    </Cell>
  );
}
