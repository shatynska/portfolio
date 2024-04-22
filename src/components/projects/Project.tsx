import { localeForSchema } from '@/constants';
import { PartOfProject, Role } from '@/types';
import { db } from '@/drizzle/index';
import { projects } from '@/drizzle/schema';
import { eq } from 'drizzle-orm';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Cell from '../Cell';
import LinksOfProject from './LinksOfProject';
import RolesOfProject from './RolesOfProject';

type TitleForSchema = {
  titleEn: string;
  titleUa: string;
};

type DescriptionForSchema = {
  descriptionEn: string;
  descriptionUa: string;
};

export default async function Project({
  projectId,
  className,
}: {
  projectId: number;
  className?: string;
}) {
  const locale = useLocale();

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

  const titleForSchema =
    `title${localeForSchema[locale]}` as keyof TitleForSchema;

  const descriptionForSchema =
    `description${localeForSchema[locale]}` as keyof DescriptionForSchema;

  let roles: Role[] = [];

  let partsOfProject: PartOfProject[] = [];

  project?.projectsToRoles.forEach((role) => {
    roles.push({ id: role.roleId, title: role.role[titleForSchema] });

    if (role.active)
      partsOfProject.push({
        id: role.roleId,
        title: role.role[titleForSchema],
        description: role[descriptionForSchema],
      });
  });

  const title = project?.[titleForSchema];

  const type = project?.types[titleForSchema];

  return (
    <Cell
      key={project?.id}
      className={`keen-slider__slide flex h-144 divide-y-2 px-0 text-sm ${className}`}
    >
      <section className="flex h-48 w-full justify-center overflow-hidden pb-8 pt-16">
        {project?.image && (
          <Image
            src={project.image}
            alt={title + 'picture'}
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
        {/* TODO Use useTranslations fro "stack" in separate component */}
        <div className="h-16 overflow-hidden">Stack: {project?.stack}</div>
      </section>

      <LinksOfProject
        moreInfo={partsOfProject}
        gitHubUrl={project?.gitHubUrl}
        url={project?.url}
      />
    </Cell>
  );
}
