'use client';

import { usePathname } from '@/navigation';
import { useTranslations } from 'next-intl';
import Cell from './Cell';
import ContactMeSection from './ContactMeSection';

export default function Footer() {
  const t = useTranslations('Index');

  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      {pathname !== '/contact' && <ContactMeSection />}
      <section className="flex flex-col md:flex-row">
        <Cell background="light" className="hidden md:block " />
        <Cell className="hidden border lg:block" />
        <Cell background="medium" className="items-center text-sm">
          © {currentYear} {t('Helen') + '\u00A0' + t('Shatynska')}
        </Cell>
      </section>
    </footer>
  );
}
