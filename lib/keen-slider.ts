import { useState, useRef, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";

export default function keenSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [currentSlideNumber, setCurrentSlideNumber] = useState(2);
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

  return {
    sliderRef,
    instanceRef,
    loaded,
    paused,
    setPaused,
    currentSlideNumber,
    setCurrentSlideNumber,
    checkCurrentSlideNumber,
  };
}
