'use client';

import { useProjectsCarouselContext } from '@/hooks/useProjectsCarouselContext';
import keenSlider from '@/lib/keen-slider';
import 'keen-slider/keen-slider.min.css';
import { ErrorBoundary } from 'react-error-boundary';
import { useInView } from 'react-intersection-observer';
import CarouselNavigation from './CarouselNavigation';

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
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <div className={className} ref={inViewRef}>
        <div className="navigation-wrapper">
          <div
            ref={sliderRef}
            className="keen-slider fill-background-800 [&>*:nth-child(3n)]:divide-background-700  [&>*:nth-child(3n)]:bg-background-800 [&>*:nth-child(3n+1)]:bg-background-200 [&>*:nth-child(3n+2)]:divide-background-100 [&>*:nth-child(3n+2)]:border-background-100 [&>*:nth-child(3n+1)]:divide-background-50 [&>*:nth-child(3n)]:fill-background [&>*:nth-child(3n)]:text-background [&>*:nth-child(3n+2)]:border [&>*:nth-child(3n+2)]:bg-background"
          >
            {children}
          </div>
        </div>
        {loaded && instanceRefInContext.current && <CarouselNavigation />}
      </div>
    </ErrorBoundary>
  );
}
