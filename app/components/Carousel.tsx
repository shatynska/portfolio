"use client";

import "keen-slider/keen-slider.min.css";
import CarouselNavigationContainer from "./CarouselNavigationContainer";
import keenSlider from "@/lib/keen-slider";
import { useProjectsCarouselContext } from "@/hooks/useProjectsCarouselContext";

export default function Carousel({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const sliderRef = keenSlider();
  const { loaded, instanceRefInContext } = useProjectsCarouselContext();

  return (
    <div className={className}>
      <div className="navigation-wrapper">
        <div
          ref={sliderRef}
          className="keen-slider fill-primary-800 [&>*:nth-child(3n)]:divide-primary-700  [&>*:nth-child(3n)]:bg-primary-800 [&>*:nth-child(3n)]:fill-primary-50 [&>*:nth-child(3n)]:text-primary-100 [&>*:nth-child(3n+1)]:divide-primary-50 [&>*:nth-child(3n+1)]:bg-primary-300 [&>*:nth-child(3n+2)]:divide-primary-300 [&>*:nth-child(3n+2)]:bg-primary-50"
        >
          {children}
        </div>
      </div>
      {loaded && instanceRefInContext.current && (
        <CarouselNavigationContainer />
      )}
    </div>
  );
}
