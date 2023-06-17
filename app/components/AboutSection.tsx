import Image from "next/image";
import Cell from "../components/Cell";

export default function AboutSection() {
  return (
    <section className="flex flex-col md:flex-row">
      <Cell className="bg-primary-50 px-10 py-16 md:h-144 [&>p:not(:first-child)]:mt-4">
        <p>
          I'm a full-stack web developer from Ukraine. I like to create designs
          and work on front-end tasks.
        </p>
        <p>
          However, my core interest is in the backend: developing clear basic
          logic, suitable architecture, and solving different problems.
        </p>
        <p>
          The main technologies I use are PHP, Laravel, MySQL, TypeScript,
          Next.js.
        </p>
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
