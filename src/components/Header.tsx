import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Cell from './Cell';
import MainNavigation from './navigation/MainNavigation';
import developerImage from '/public/developer.jpg';

export default function Header() {
  const t = useTranslations('Index');

  return (
    <header className="flex flex-col md:flex-row">
      <Cell
        height="large"
        background="darkest"
        className="md:bg-background-200 md:text-background-900 h-screen max-h-192 min-h-128 gap-40 px-12 pb-20 text-[2.75rem] font-medium leading-[4rem] md:gap-36 md:bg-[url('/backgrounds/line.svg')] md:bg-auto md:bg-center md:bg-no-repeat md:px-16 md:pb-0 md:text-4xl md:font-semibold md:leading-[3rem]"
      >
        <h1>
          {t('Web')}
          <br />
          {t('Developer')}
        </h1>
        <div className="text-right">
          {t('Helen')}
          <br />
          {t('Shatynska')}
        </div>
      </Cell>
      <Cell
        height="large"
        className="h-screen max-h-160 min-h-128 md:order-first"
      >
        <Image
          src={developerImage}
          alt={t('Web developer picture')}
          placeholder="blur"
          className="object-cover"
          fill
          priority
        />
      </Cell>
      <MainNavigation className="hidden lg:flex " />
    </header>
  );
}
