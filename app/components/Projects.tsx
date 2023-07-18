import Carousel from "../components/Carousel";
import Project from "../components/Project";
import { db } from "@/drizzle/";
import { project } from "@/drizzle/schema";

export default async function Projects() {
  const projects = await db.select().from(project);

  return (
      <Carousel className="flex w-screen max-w-112 flex-col overflow-hidden md:w-192 md:max-w-none lg:w-288 ">
        {projects.map((project) => (
          <Project projectId={project.id} />
        ))}
      </Carousel>
  );
}
