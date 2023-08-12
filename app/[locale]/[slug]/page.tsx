import PrimaryHeading from "@/app/components/PrimaryHeading";
import SecondaryHeading from "@/app/components/SecondaryHeading";
import Project from "@/app/components/projects/Project";

export default function Page({
  params: { slug, id = 1},
}: {
  params: { slug: string; id?: number};
}) {
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
