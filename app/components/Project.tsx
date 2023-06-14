import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import Cell from "./Cell";
import MoreIcon from "./icons/MoreIcon";
import GithubIcon from "./icons/GithubIcon";
import WwwIcon from "./icons/WwwIcon";

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
      <section className="justify-center items-center gap-8 h-24 overflow-hidden flex [&>*]:fill-inherit">

      <Link href={project?.gitHubUrl || ''} className="[&>*]:fill-inherit"  > 
        <MoreIcon/>
      </Link>

      <Link href={project?.gitHubUrl || ''} className="[&>*]:fill-inherit"  > 
        <GithubIcon/>
      </Link>

      <Link href={project?.gitHubUrl || ''} className="[&>*]:fill-inherit"  > 
        <WwwIcon/>
      </Link>


      </section>
    </Cell>
  );
}
