'use client';

import { useProjectsCarouselContext } from '@/hooks/useProjectsCarouselContext';
import checkCurrentSlideNumber from '@/lib/checkCurrentSlideNumber';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Cell from '../Cell';

export default function CarouselNavigation() {
  const {
    paused,
    setPaused,
    currentSlideNumber,
    setCurrentSlideNumber,
    totalNumberOfSlides,
    instanceRefInContext,
  } = useProjectsCarouselContext();

  const t = useTranslations('Index');

  return (
    <section className="flex flex-col md:flex-row">
      <Cell className="hidden border md:block" />
      <Cell background="mediumDark" className="p-10">
        <div className="flex items-center justify-around">
          <div className=" flex w-24 items-center justify-between">
            <span>{t('Project')}</span>
            <span>
              {currentSlideNumber} / {totalNumberOfSlides}
            </span>
          </div>
          <div className="flex w-32 items-center justify-between">
            <Image
              src="icons/previous.svg"
              width={32}
              height={32}
              alt="previous icon"
              title="Switch to the previous project"
              className="cursor-pointer hover:opacity-80"
              onClick={(e: any) => {
                e.stopPropagation();
                instanceRefInContext.current?.prev();
                setCurrentSlideNumber(
                  checkCurrentSlideNumber(
                    currentSlideNumber - 1,
                    totalNumberOfSlides,
                  ),
                );
              }}
            />
            <div className="flex w-12 justify-center">
              <button
                className={`h-6 w-5 transform  cursor-pointer border-r-0 border-transparent border-l-background transition-all duration-200 hover:opacity-80 ${
                  paused
                    ? ' ml-3 border-y-[12px] border-l-[18px] border-solid '
                    : ' border-y-0 border-l-[20px] border-double'
                }`}
                onClick={(e: any) => {
                  e.stopPropagation();
                  setPaused(!paused);
                  if (paused) instanceRefInContext.current?.next();
                }}
                title={`${paused ? 'Start' : 'Pause'} auto switch`}
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
                instanceRefInContext.current?.next();
                setCurrentSlideNumber(
                  checkCurrentSlideNumber(
                    currentSlideNumber + 1,
                    totalNumberOfSlides,
                  ),
                );
              }}
            />
          </div>
        </div>
      </Cell>
      <Cell background="light" className="hidden lg:block" />
    </section>
  );
}
