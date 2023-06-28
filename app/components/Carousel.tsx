"use client";
import React, { useState, useRef, useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import CarouselNavigationContainer from "./CarouselNavigationContainer";
import Arrow from "./icons/Arrow";

export default function Carousel({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [currentSlideNumber, setCurrentSlideNumber] = useState(1);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(paused);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused, pausedRef]);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 1,
      loop: true,
      slides: {
        perView: "auto",
        origin: "center",
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          if (pausedRef.current) return;
          timeout = setTimeout(() => {
            if (pausedRef.current) return;
            slider.next();
          }, 3000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

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
      {loaded && instanceRef.current && (
        <CarouselNavigationContainer>
          <div className="flex flex-row items-center justify-between">
            Project &nbsp;&nbsp; {currentSlideNumber} /{" "}
            {instanceRef.current?.slides.length}
            <Arrow
              left
              onClick={(e: any) => {
                e.stopPropagation();
                instanceRef.current?.prev();
                setCurrentSlideNumber(
                  Number(instanceRef.current?.slides.length)
                );
              }}
              disabled
            />
            <Arrow
              onClick={(e: any) => {
                e.stopPropagation();
                instanceRef.current?.next();
                setCurrentSlideNumber(currentSlideNumber + 1);
              }}
              disabled
            />
            <Arrow
              onClick={(e: any) => {
                e.stopPropagation();
                setPaused(true);
              }}
              disabled
            />
            <Arrow
              onClick={(e: any) => {
                e.stopPropagation();
                setPaused(false);
                instanceRef.current?.next();
              }}
              disabled
            />
          </div>
        </CarouselNavigationContainer>
      )}
    </div>
  );
}
