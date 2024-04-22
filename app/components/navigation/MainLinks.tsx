'use client';

import { locales } from '@/src/navigation';
import { useLocale, useTranslations } from 'next-intl';
import NavLinks from './NavLinks';

export default function PartsLinks() {
  const locale = useLocale();
  const t = useTranslations('Index');

  const navLinks = [
    {
      name: t('Home'),
      href: '/',
      title: t('Home page'),
    },
    {
      name: t('Design'),
      href: '/design',
      title: t('UI/UX design parts of projects'),
    },
    {
      name: t('Backend'),
      href: '/backend',
      title: t('Backend parts of projects'),
    },
    {
      name: t('Frontend'),
      href: '/frontend',
      title: t('Frontend parts of projects'),
    },
  ];

  return (
    <NavLinks
      className="flex h-72 flex-col justify-between p-12 text-center text-2xl font-semibold"
      params={{ locale: locale, navLinks: navLinks }}
    />
  );
}
