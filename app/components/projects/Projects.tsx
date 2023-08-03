import { ProjectsCarouselContextProvider } from "@/contexts/ProjectsCarouselContext";
import Carousel from "./Carousel";
import Project from "./Project";
import { db } from "@/drizzle/";
import { projects } from "@/drizzle/schema";
import { notFound } from "next/navigation";

export default async function Projects() {
  let allProjects;

  try {
    allProjects = await db.select().from(projects);
  } catch {}

  return (
    <>
      {allProjects && (
        <ProjectsCarouselContextProvider>
          <Carousel className="flex w-screen max-w-112 flex-col overflow-hidden md:w-192 md:max-w-none lg:w-288 ">
            {allProjects.map((project) => (
              <Project projectId={project.id} />
            ))}
          </Carousel>
        </ProjectsCarouselContextProvider>
      )}
    </>
  );
}
