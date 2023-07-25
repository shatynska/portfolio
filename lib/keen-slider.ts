import { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import { useProjectsCarouselContext } from "@/hooks/useProjectsCarouselContext";
import checkCurrentSlideNumber from "./checkCurrentSlideNumber";

export default function keenSlider() {
  const {
    paused,
    pausedRef,
    setCurrentSlide,
    setLoaded,
    setCurrentSlideNumber,
    setTotalNumberOfSlides,
    setInstanceRefInContext,
  } = useProjectsCarouselContext();

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
      created(slider) {
        setLoaded(true);
        setTotalNumberOfSlides(slider.slides.length);
        setInstanceRefInContext(instanceRef);
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

  return sliderRef;
}
