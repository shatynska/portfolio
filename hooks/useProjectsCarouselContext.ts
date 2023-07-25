import { useContext } from "react";
import { ProjectsCarouselContext } from "@/contexts/ProjectsCarouselContext";

export const useProjectsCarouselContext = () => {
  const context = useContext(ProjectsCarouselContext);

  if (!context) {
    throw new Error(
      "useProjectsCarouselContext must be used within the ProjectsCarouselContextProvider"
    );
  }

  return context;
};
