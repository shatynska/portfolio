import PrimaryHeading from "@/app/components/PrimaryHeading";
import Project from "@/app/components/projects/Project";

export default function Page() {

  return (
    <main>
      <PrimaryHeading />
      <Project
        projectId={1}
        className=" divide-primary-700  bg-primary-800 fill-primary-50 text-primary-100"
      />
    </main>
  );
}
