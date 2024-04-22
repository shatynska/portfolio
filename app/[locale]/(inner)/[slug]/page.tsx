import PrimaryHeading from '@/app/components/PrimaryHeading';
import SecondaryHeading from '@/app/components/SecondaryHeading';
import Project from '@/app/components/projects/Project';
import { unstable_setRequestLocale } from 'next-intl/server';

export default function Page({
  params: { slug, id = 1, locale },
}: {
  params: { slug: string; id?: number; locale: string };
}) {
  unstable_setRequestLocale(locale);

  const secondaryHeading = slug[0].toUpperCase() + slug.slice(1);
  return (
    <main>
      <PrimaryHeading />
      <SecondaryHeading heading={secondaryHeading} />
      <Project
        projectId={id}
        className=" divide-primary-700  bg-primary-800 fill-primary-50 text-primary-100"
      />
    </main>
  );
}
