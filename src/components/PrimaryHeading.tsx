import { useTranslations } from 'next-intl';
import Cell from './Cell';

export default function PrimaryHeading() {
  const t = useTranslations('Index');

  return (
    <section className="flex flex-col md:flex-row">
      <Cell background="light" />
      <Cell background="medium" className="text-center text-2xl font-semibold">
        <h1>{t('Projects')}</h1>
      </Cell>
      <Cell className="hidden lg:block" />
    </section>
  );
}
