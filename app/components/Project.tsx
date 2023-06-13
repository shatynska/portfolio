import Image from "next/image";
import Cell from "./Cell";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

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
        orderBy: {
          id: 'desc',
        },
      },
    },
  });

  return (
    <Cell
      key={project?.id}
      className="keen-slider__slide flex h-144 text-sm divide-y-2 px-0"
    >
      <Image
        src={project?.image || "/default.jpg"}
        alt={project?.title + "picture"}
        width="384"
        height="192"
        className="h-44 w-96 overflow-hidden object-none"
      />
      <section className="flex flex-col h-72 leading-6 p-10 gap-4">
        <div className="h-8">{project?.type}</div>
        <h3 className="h-16 flex items-center overflow-hidden">{project?.title}</h3>
        <div className="h-8 truncate">
          Roles:&nbsp;
          {project?.roles.map((role) => (
            <span className="after:content-[',\a0'] last:content-none">
              {role.role.title}
            </span>
          ))}
        </div>
        <div className="h-16 overflow-hidden">Stack: {project?.stack}</div>
      </section>
      <section className="justify-center inline-block items-center gap-8 h-24 overflow-hidden flex">
      <Link href={project?.gitHubUrl || ''}  >      
        <Image
            src="/icons/github.svg"
            height="32"
            width="32"
            alt="github icon"
          />
      </Link>
      </section>
    </Cell>
  );
}
