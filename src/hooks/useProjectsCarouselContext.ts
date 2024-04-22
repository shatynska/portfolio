import { ProjectsCarouselContext } from "@/contexts/ProjectsCarouselContext";
import { useContext } from "react";

export const useProjectsCarouselContext = () => {
  const context = useContext(ProjectsCarouselContext);

  if (!context) {
    throw new Error(
      "useProjectsCarouselContext must be used within the ProjectsCarouselContextProvider"
    );
  }

  return context;
};
