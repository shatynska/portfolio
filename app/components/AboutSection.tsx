import Image from "next/image";
import Cell from "../components/Cell";

export default function AboutSection() {
  return (
    <section className="flex">
      <Cell className="cell-lg border-l-2 bg-primary-50">
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
      <Cell className="cell-lg bg-primary-900 text-primary-100">
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
      <Cell className="cell-lg">
        <Image src="/decoration.jpg" alt="decoration element" fill={true} />
      </Cell>
    </section>
  );
}
