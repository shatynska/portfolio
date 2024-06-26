import PrimaryHeading from '@/components/PrimaryHeading';
import SecondaryHeading from '@/components/SecondaryHeading';
import Project from '@/components/projects/Project';
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
        className="divide-background-700 bg-background-800 fill-background text-background"
      />
    </main>
  );
}
