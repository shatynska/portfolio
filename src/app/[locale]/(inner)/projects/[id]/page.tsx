import PrimaryHeading from '@/components/PrimaryHeading';
import Project from '@/components/projects/Project';
import { unstable_setRequestLocale } from 'next-intl/server';

export default function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <main>
      <PrimaryHeading />
      <Project
        projectId={1}
        className=" divide-background-700  bg-background-800 text-background-50 fill-background"
      />
    </main>
  );
}
