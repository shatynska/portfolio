import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Cell from './Cell';

export default function AboutSection() {
  const t = useTranslations('Index');

  return (
    <section className="flex flex-col md:flex-row [&_p:not(:first-child)]:mt-4">
      <Cell className="border border-primary-200 bg-primary-50 px-10 py-16 md:h-144 [&>p:not(:first-child)]:mt-4">
        <p>{t('About_paragraph_1')}</p>
        <p>{t('About_paragraph_2')}</p>
        <p>{t('About_paragraph_3')}</p>
      </Cell>
      <Cell className="justify-start bg-primary-900 px-10 py-16 text-primary-100 md:h-144 [&_div]:mt-8">
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
      <Cell className="hidden h-144 lg:flex">
        <Image src="/decoration.jpg" alt="decoration element" fill={true} />
      </Cell>
    </section>
  );
}
