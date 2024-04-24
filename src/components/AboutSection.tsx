import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Cell from './Cell';

export default function AboutSection() {
  const t = useTranslations('Index');

  return (
    <section className="flex flex-col md:flex-row [&_p:not(:first-child)]:mt-4">
      <Cell
        height="large"
        className="h-auto border py-16 md:py-12 [&>p:not(:first-child)]:mt-4"
      >
        <p>{t('About_paragraph_1')}</p>
        <p>{t('About_paragraph_2')}</p>
        <p>{t('About_paragraph_3')}</p>
      </Cell>
      <Cell
        height="large"
        background="darker"
        className="h-auto justify-start py-16 md:py-12 [&_div]:mt-8"
      >
        <h2 className="text-2xl font-semibold">{t('Skills')}</h2>
        <ul>
          <li>JavaScript, TypeScript</li>
          <li>Node.js, NestJS</li>
          <li>React, Next.js</li>
          <li>PostgreSQL, Prisma, Drizzle</li>
          <li>REST API, Unit tests</li>
          <li>HTML, CSS, Tailwind</li>
          <li>Git, GitHub Actions, CI/CD</li>
          <li>Docker, Linux, VPS</li>
          <li>UI/UX Design, Figma</li>
        </ul>
      </Cell>
      <Cell height="large" background="light" className="hidden lg:flex">
        <Image src="/decoration.jpg" alt="decoration element" fill={true} />
      </Cell>
    </section>
  );
}
