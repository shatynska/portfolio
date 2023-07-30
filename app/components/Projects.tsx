import { ProjectsCarouselContextProvider } from "@/contexts/ProjectsCarouselContext";
import Carousel from "../components/Carousel";
import Project from "../components/Project";
import { db } from "@/drizzle/";
import { projects } from "@/drizzle/schema";

export default async function Projects() {
  const allProjects = await db.select().from(projects);

  return (
    <ProjectsCarouselContextProvider>
      <Carousel className="flex w-screen max-w-112 flex-col overflow-hidden md:w-192 md:max-w-none lg:w-288 ">
        {allProjects.map((project) => (
          <Project projectId={project.id} />
        ))}
      </Carousel>
    </ProjectsCarouselContextProvider>
  );
}
