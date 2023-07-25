"use client";

import {
  useState,
  createContext,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";

export type ProjectCarouselType = {
  currentSlide: number;
  setCurrentSlide: Dispatch<SetStateAction<number>>;
  loaded: boolean;
  setLoaded: Dispatch<SetStateAction<boolean>>;
  currentSlideNumber: number;
  setCurrentSlideNumber: Dispatch<SetStateAction<number>>;
  paused: boolean;
  setPaused: Dispatch<SetStateAction<boolean>>;
  pausedRef: any;
  totalNumberOfSlides: number;
  setTotalNumberOfSlides: Dispatch<SetStateAction<number>>;
  instanceRefInContext: any;
  setInstanceRefInContext: Dispatch<SetStateAction<any>>;
};

export const ProjectsCarouselContext = createContext<
  ProjectCarouselType | undefined
>(undefined);

export const ProjectsCarouselContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [currentSlideNumber, setCurrentSlideNumber] = useState(2);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(paused);
  const [totalNumberOfSlides, setTotalNumberOfSlides] = useState(0);
  const [instanceRefInContext, setInstanceRefInContext] = useState(null);

  const data = {
    currentSlide: currentSlide,
    setCurrentSlide,
    loaded,
    setLoaded,
    currentSlideNumber,
    setCurrentSlideNumber,
    paused,
    setPaused,
    pausedRef,
    totalNumberOfSlides,
    setTotalNumberOfSlides,
    instanceRefInContext,
    setInstanceRefInContext,
  };

  return (
    <ProjectsCarouselContext.Provider value={data}>
      {children}
    </ProjectsCarouselContext.Provider>
  );
};
