import { useLocale } from "next-intl";
import { getTranslator } from "next-intl/server";
import Image from "next/image";
import Cell from "../components/Cell";

export default async function AboutSection() {
  const locale = useLocale();
  const t = await getTranslator(locale, "Index");

  return (
    <section className="flex flex-col md:flex-row [&_p:not(:first-child)]:mt-4">
      <Cell className="bg-primary-50 px-10 py-16 md:h-144 [&>p:not(:first-child)]:mt-4">
        <p>{t("About_paragraph_1")}</p>
        <p>{t("About_paragraph_2")}</p>
        <p>{t("About_paragraph_3")}</p>
      </Cell>
      <Cell className="justify-start bg-primary-900 px-10 py-16 text-primary-100 md:h-144">
        <h2>Skills</h2>
        <ul>
          <li>PHP, Laravel, Inertia</li>
          <li>REST API</li>
          <li>MySQL, Redis</li>
          <li>Unit test</li>
          <li>JavaScript, TypeScript</li>
          <li>React, Next.js</li>
          <li>HTML, CSS, SASS, Tailwind</li>
          <li>Git, GitHub Actions, CI/CD</li>
          <li>Docker, Linux, VPS</li>
          <li>UI/UX Design</li>
        </ul>
      </Cell>
      <Cell className="hidden h-144 lg:flex">
        <Image src="/decoration.jpg" alt="decoration element" fill={true} />
      </Cell>
    </section>
  );
}
