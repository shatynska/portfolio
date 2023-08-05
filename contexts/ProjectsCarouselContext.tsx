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
  outOfView: boolean;
  setOutOfView: Dispatch<SetStateAction<boolean>>;
  outOfViewRef: any;
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
  const [outOfView, setOutOfView] = useState(true);
  const outOfViewRef = useRef(outOfView);
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
    outOfView,
    setOutOfView,
    outOfViewRef,
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
