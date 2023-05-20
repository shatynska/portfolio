import Image from "next/image";
import Cell from "../components/Cell";

export default function AboutSection() {
  return (
    <section className="flex">
      <Cell className="cell-lg border-l-2">
        <p>
          Web developer focused on&nbsp;backend with&nbsp;frontend background
          based in&nbsp;Ukraine.
        </p>
        <p>
          Main technology stack used: PHP, Laravel, MySQL, TypeScript, Next.js.
        </p>
      </Cell>
      <Cell className="cell-lg bg-primary-900 text-primary-100">
        <h2>Skills</h2>
        <ul>
          <li>PHP</li>
          <li>Laravel</li>
          <li>REST API</li>
          <li>MySQL, Redis</li>
          <li>Unit test</li>
          <li>JavaScript, TypeScript</li>
          <li>React, Next.js</li>
          <li>HTML, CSS, SASS, Tailwind</li>
          <li>Git, GitHub Actions, CI/CD</li>
          <li>Docker, Linux, VPS</li>
        </ul>
      </Cell>
      <Cell className="cell-lg">
        <Image src="/decoration.jpg" alt="decoration element" fill={true} />
      </Cell>
    </section>
  );
}
