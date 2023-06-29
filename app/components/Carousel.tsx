"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import CarouselNavigationContainer from "./CarouselNavigationContainer";

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

  function checkCurrentSlideNumber(
    currentSlideNumber: number,
    totalNumberOfSlides: number
  ): number {
    return currentSlideNumber <= totalNumberOfSlides
      ? currentSlideNumber >= 1
        ? currentSlideNumber
        : totalNumberOfSlides - currentSlideNumber
      : currentSlideNumber - totalNumberOfSlides;
  }

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused, pausedRef]);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 1,
      loop: true,
      slides: {
        perView: "auto",
      },
      breakpoints: {
        "(min-width: 768px)": {
          initial: 0,
        },
        "(min-width: 1152px)": {
          initial: 1,
          slides: {
            perView: "auto",
            origin: "center",
          },
        },
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
        slider.on("animationEnded", () => {
          setCurrentSlideNumber(
            checkCurrentSlideNumber(
              slider?.track.details.rel + 1,
              slider.track.details.slides.length
            )
          );
          nextTimeout();
        });
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
          <div className="flex items-center justify-between">
            <div className=" flex w-28 items-center justify-between">
              <span>Project</span>
              <span>
                {currentSlideNumber} / {instanceRef.current?.slides.length}
              </span>
            </div>
            <div className="flex w-36 items-center justify-between">
              <Image
                src="icons/previous.svg"
                width={32}
                height={32}
                alt="previous icon"
                title="Switch to the previous project"
                className="cursor-pointer"
                onClick={(e: any) => {
                  e.stopPropagation();
                  instanceRef.current?.prev();
                  setCurrentSlideNumber(
                    checkCurrentSlideNumber(
                      currentSlideNumber - 1,
                      Number(instanceRef.current?.slides.length)
                    )
                  );
                }}
              />
              <div className="flex w-12 justify-center">
                <button
                  className={`h-6 w-5 transform cursor-pointer border-r-0 border-transparent border-l-primary-50 transition-all duration-200 ${
                    paused
                      ? " ml-3 border-y-[12px] border-l-[18px] border-solid "
                      : " border-y-0 border-l-[20px] border-double"
                  }`}
                  onClick={(e: any) => {
                    e.stopPropagation();
                    setPaused(!paused);
                    if (paused) instanceRef.current?.next();
                  }}
                  title={`${paused ? "Start" : "Pause"} auto switch`}
                ></button>
              </div>
              <Image
                src="icons/next.svg"
                width={32}
                height={32}
                alt="next icon"
                title="Switch to the next project"
                className="cursor-pointer"
                onClick={(e: any) => {
                  e.stopPropagation();
                  instanceRef.current?.next();
                  setCurrentSlideNumber(
                    checkCurrentSlideNumber(
                      currentSlideNumber + 1,
                      Number(instanceRef.current?.slides.length)
                    )
                  );
                }}
              />
            </div>
          </div>
        </CarouselNavigationContainer>
      )}
    </div>
  );
}
