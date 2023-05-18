import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="cell-lg">
        <Image
          src="/developer.jpg"
          alt="Web developer picture"
          fill={true}
          priority
        />
      </div>
      <div className="cell-lg bg-primary-200 bg-[url('/backgrounds/line.svg')]"></div>
      <div className="cell-lg border-r-2 bg-[url('/backgrounds/lines.svg')]"></div>
      <div className="cell-lg border-l-2">
        <p>
          Web developer focused on&nbsp;backend with&nbsp;frontend background
          based in&nbsp;Ukraine.
        </p>
        <p>
          Main technology stack used: PHP, Laravel, MySQL, TypeScript, Next.js.
        </p>
      </div>
      <div className="cell-lg bg-primary-900 text-primary-100">
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
      </div>
      <div className="cell-lg">
        <Image src="/decoration.jpg" alt="decoration element" fill={true} />
      </div>
    </main>
  );
}
