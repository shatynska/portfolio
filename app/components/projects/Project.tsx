import { db } from "@/drizzle/";
import { projects } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { useLocale } from "next-intl";
import { getTranslator } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import Cell from "../Cell";
import RolesOfProject from "./RolesOfProject";
import MoreIcon from "../icons/MoreIcon";
import GithubIcon from "../icons/GithubIcon";
import WwwIcon from "../icons/WwwIcon";

export default async function Project({ projectId }: { projectId: number }) {
  const locale = useLocale();
  const t = await getTranslator(locale, "Index");
  const localeForSchema = locale[0].toUpperCase() + locale.substring(1);

  const project = await db.query.projects.findFirst({
    where: eq(projects.id, projectId),
    with: {
      types: true,
      projectsToRoles: {
        with: {
          role: true,
        },
      },
    },
  });

  const roles = project?.projectsToRoles.map((role) => role.role);

  const title =
    project?.[`title${localeForSchema}` as keyof typeof project.types];
  const type =
    project?.types[`title${localeForSchema}` as keyof typeof project.types];

  return (
    <Cell
      key={project?.id}
      className="keen-slider__slide flex h-144 divide-y-2 px-0 text-sm"
    >
      <section className="flex h-48 w-full justify-center overflow-hidden pb-8 pt-16">
        {project?.image && (
          <Image
            src={project.image}
            alt={project?.titleEn + "picture"}
            width="384"
            height="192"
            className="object-contain"
          />
        )}
      </section>

      <section className="flex h-72 w-full flex-col gap-4 p-10 leading-6 ">
        <div className="h-8">{type}</div>
        <h3 className="flex h-16 items-center overflow-hidden">{title}</h3>
        <RolesOfProject roles={roles} />
        <div className="h-16 overflow-hidden">
          {t("Stack")}: {project?.stack}
        </div>
      </section>

      <section className="flex h-24 items-center  justify-center gap-8 overflow-hidden [&>*]:fill-inherit">
        {project?.gitHubUrl && (
          <Link
            href={project?.gitHubUrl || ""}
            target="_blank"
            className="[&>*]:fill-inherit"
            title="GitHub repository"
          >
            <GithubIcon />
          </Link>
        )}

        {project?.url && (
          <Link
            href={project.url}
            target="_blank"
            className="[&>*]:fill-inherit"
            title="URL address"
          >
            <WwwIcon />
          </Link>
        )}
      </section>
    </Cell>
  );
}