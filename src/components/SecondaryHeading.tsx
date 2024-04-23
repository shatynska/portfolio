import { useTranslations } from 'next-intl';
import Cell from './Cell';

export default function SecondaryHeading({ heading }: { heading: string }) {
  const t = useTranslations('Index');

  return (
    <section className="flex flex-col md:flex-row">
      <Cell />
      <Cell background="light" className="hidden lg:block" />
      <Cell
        background="dark"
        className="text-center text-xl font-semibold md:order-first lg:order-none"
      >
        <h2>{t(heading)}</h2>
      </Cell>
    </section>
  );
}
