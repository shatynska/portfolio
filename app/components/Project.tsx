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
          id: "desc",
        },
      },
    },
  });

  return (
    <Cell
      key={project?.id}
      className="keen-slider__slide flex h-144 divide-y-2 px-0 text-sm"
    >
      <section className="flex h-48 w-full justify-center overflow-hidden pb-8 pt-16">
        {project?.image && (
          <Image
            src={project.image}
            alt={project?.title + "picture"}
            width="384"
            height="192"
            className="object-contain"
          />
        )}
      </section>

      <section className="flex h-72 w-full flex-col gap-4 p-10 leading-6 ">
        <div className="h-8">{project?.type}</div>
        <h3 className="flex h-16 items-center overflow-hidden">
          {project?.title}
        </h3>
        <div className="h-8 truncate">
          Roles:&nbsp;
          {project?.roles.map((role) => (
            <span
              key={role.role.id}
              className="[&:not(:last-child)]:after:content-[',\a0']"
            >
              {role.role.title}
            </span>
          ))}
        </div>
        <div className="h-16 overflow-hidden">Stack: {project?.stack}</div>
      </section>

      <section className="flex h-24 items-center  justify-center gap-8 overflow-hidden [&>*]:fill-inherit">
        {project?.gitHubUrl && (
          <Link
            href={project?.gitHubUrl || ""}
            target="_blank"
            className="[&>*]:fill-inherit"
          >
            <GithubIcon />
          </Link>
        )}

        {project?.url && (
          <Link
            href={project.url}
            target="_blank"
            className="[&>*]:fill-inherit"
          >
            <WwwIcon />
          </Link>
        )}
      </section>
    </Cell>
  );
}
