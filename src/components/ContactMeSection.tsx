import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import Cell from './Cell';

export default function ContactMeSection() {
  const t = useTranslations('Index');

  return (
    <section className="flex flex-col md:flex-row">
      <Cell background="darker" className="items-center text-base">
        <Link href="/contact" className="text-lg font-semibold">
          {t('Contact me')}
        </Link>
      </Cell>
      <Cell background="light" />
      <Cell className="order-first border md:hidden lg:order-none lg:block" />
    </section>
  );
}
