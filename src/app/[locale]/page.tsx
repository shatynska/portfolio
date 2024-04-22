import AboutSection from '@/components/AboutSection';
import Header from '@/components/Header';
import HamburgerMenu from '@/components/navigation/HamburgerMenu';
import Projects from '@/components/projects/Projects';
import { unstable_setRequestLocale } from 'next-intl/server';

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <main>
      <Header />
      <AboutSection />
      <Projects />
      <HamburgerMenu className={'lg:hidden'} />
    </main>
  );
}
