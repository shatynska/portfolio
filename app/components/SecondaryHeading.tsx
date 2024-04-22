import { useTranslations } from 'next-intl';
import Cell from './Cell';

export default function SecondaryHeading({ heading }: { heading: string }) {
  const t = useTranslations('Index');

  return (
    <section className="flex flex-col md:h-24 md:flex-row">
      <Cell className="bg-primary-50"></Cell>
      <Cell className="hidden bg-primary-200 lg:block"></Cell>
      <Cell className="h-24 bg-primary-800 text-center text-xl font-semibold text-primary-100 md:order-first lg:order-none">
        <h2>{t(heading)}</h2>
      </Cell>
    </section>
  );
}
