import { useTranslations } from 'next-intl';
import Cell from './Cell';

export default function PrimaryHeading() {
  const t = useTranslations('Index');

  return (
    <section className="flex flex-col md:h-24 md:flex-row">
      <Cell className="bg-primary-200"></Cell>
      <Cell className="h-24 bg-primary-600 text-center text-2xl font-semibold text-primary-100">
        <h1>{t('Projects')}</h1>
      </Cell>
      <Cell className="hidden bg-primary-50 lg:block"></Cell>
    </section>
  );
}
