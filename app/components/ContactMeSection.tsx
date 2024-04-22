import { Link } from '@/src/navigation';
import { useTranslations } from 'next-intl';
import Cell from './Cell';

export default function ContactMeSection() {
  const t = useTranslations('Index');

  return (
    <section className="flex flex-col md:h-24 md:flex-row">
      <Cell className="h-24 items-center bg-primary-900 text-base text-primary-100">
        <Link href="/contact" className="text-lg font-semibold">
          {t('Contact me')}
        </Link>
      </Cell>
      <Cell className="bg-primary-300" />
      <Cell className="order-first border border-primary-200 bg-primary-50 md:hidden lg:order-none lg:block" />
    </section>
  );
}
