"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import CarouselNavigationContainer from "./CarouselNavigationContainer";
import keenSlider from "@/lib/keen-slider";

export default function Carousel({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const {
    sliderRef,
    instanceRef,
    loaded,
    paused,
    setPaused,
    currentSlideNumber,
    setCurrentSlideNumber,
    checkCurrentSlideNumber,
  } = keenSlider();

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
                className="cursor-pointer hover:opacity-80"
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
                  className={`h-6 w-5 transform  cursor-pointer border-r-0 border-transparent border-l-primary-50 transition-all duration-200 hover:opacity-80 ${
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
                className="cursor-pointer  hover:opacity-80"
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
