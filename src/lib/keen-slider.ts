/* eslint-disable react-hooks/rules-of-hooks */
import { useProjectsCarouselContext } from '@/hooks/useProjectsCarouselContext';
import { useKeenSlider } from 'keen-slider/react';
import { useEffect } from 'react';
import checkCurrentSlideNumber from './checkCurrentSlideNumber';

export default function keenSlider() {
  const {
    paused,
    pausedRef,
    outOfView,
    outOfViewRef,
    setCurrentSlide,
    setLoaded,
    setCurrentSlideNumber,
    setTotalNumberOfSlides,
    setInstanceRefInContext,
  } = useProjectsCarouselContext();

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused, pausedRef]);

  useEffect(() => {
    outOfViewRef.current = outOfView;
  }, [outOfView, outOfViewRef]);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        perView: 'auto',
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
          if (pausedRef.current || outOfViewRef.current) return;
          timeout = setTimeout(() => {
            if (pausedRef.current || outOfViewRef.current) return;
            slider.next();
          }, 4000);
        }

        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', () => {
          setCurrentSlideNumber(
            checkCurrentSlideNumber(
              slider?.track.details.rel + 1,
              slider.track.details.slides.length,
            ),
          );
          nextTimeout();
        });
        slider.on('updated', nextTimeout);
      },
    ],
  );

  return sliderRef;
}
