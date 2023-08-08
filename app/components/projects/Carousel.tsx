"use client";

import "keen-slider/keen-slider.min.css";
import CarouselNavigation from "./CarouselNavigation";
import keenSlider from "@/lib/keen-slider";
import { useProjectsCarouselContext } from "@/hooks/useProjectsCarouselContext";
import { useInView } from "react-intersection-observer";

export default function Carousel({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const sliderRef = keenSlider();
  const { loaded, instanceRefInContext, paused, setOutOfView } =
    useProjectsCarouselContext();

  const [inViewRef] = useInView({
    threshold: 1,
    onChange: (inView) => {
      setOutOfView(!inView);
      if (inView && !paused) instanceRefInContext.current?.next();
    },
  });

  return (
    <div className={className} ref={inViewRef}>
      <div className="navigation-wrapper">
        <div
          ref={sliderRef}
          className="keen-slider fill-primary-800 [&>*:nth-child(3n)]:divide-primary-700  [&>*:nth-child(3n)]:bg-primary-800 [&>*:nth-child(3n)]:fill-primary-50 [&>*:nth-child(3n)]:text-primary-100 [&>*:nth-child(3n+1)]:divide-primary-50 [&>*:nth-child(3n+1)]:bg-primary-300 [&>*:nth-child(3n+2)]:divide-primary-300 [&>*:nth-child(3n+2)]:border [&>*:nth-child(3n+2)]:border-primary-200 [&>*:nth-child(3n+2)]:bg-primary-50"
        >
          {children}
        </div>
      </div>
      {loaded && instanceRefInContext.current && <CarouselNavigation />}
    </div>
  );
}
