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
        className="md:bg-background-200 md:text-background-900 h-screen max-h-192 min-h-128 gap-44 bg-[url('/backgrounds/line-dark.svg')] bg-contain bg-center bg-no-repeat px-14  pb-24 font-semibold md:bg-[url('/backgrounds/line.svg')] md:pb-0"
      >
        <h1 className="text-[2.5rem] leading-[3.25rem]">
          {t('Web')}
          <br />
          {t('Developer')}
        </h1>
        <div className="text-right text-[2.5rem] leading-[3.25rem]">
          {t('Helen')}
          <br />
          {t('Shatynska')}
        </div>
      </Cell>
      <Cell height="large" className="md:order-first">
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
