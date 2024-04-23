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
      <section className="flex flex-col md:h-24 md:flex-row">
        <Cell className="hidden bg-primary-300 md:block " />
        <Cell className="hidden border border-primary-200 bg-primary-50 lg:block" />
        <Cell className="items-center bg-primary-600 text-sm text-primary-100">
          © {currentYear} {t('Helen') + '\u00A0' + t('Shatynska')}
        </Cell>
      </section>
    </footer>
  );
}
