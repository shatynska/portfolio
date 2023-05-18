import Image from "next/image";
import Link from "next/link";

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
      <div className="cell-lg justify-around bg-primary-200 bg-[url('/backgrounds/line.svg')]">
        <h1 className="text-[2.5rem] leading-[3.25rem] font-bold">
          Web
          <br />
          Developer
        </h1>
        <div className="text-[2.5rem] leading-[3.25rem] font-bold text-right">
          Helen
          <br />
          Shatynska
        </div>
      </div>
      <div className="cell-lg p-0 justify-around justify-items-center border-r-2 bg-[url('/backgrounds/lines.svg')]">
        <div className="flex justify-center items-center gap-8 h-24">
          <Link href="">UA</Link>
          <Link href="">EN</Link>
          <Link href="">PL</Link>
        </div>
        <div className="flex justify-center gap-8 h-24">
          <Image
            src="/icons/phone.svg"
            height="32"
            width="32"
            alt="phone icon"
          ></Image>
          <Image
            src="/icons/email.svg"
            height="32"
            width="32"
            alt="email icon"
          ></Image>
          <Image
            src="/icons/skype.svg"
            height="32"
            width="32"
            alt="skype icon"
          ></Image>
          <Image
            src="/icons/address.svg"
            height="32"
            width="32"
            alt="address icon"
          ></Image>
        </div>
        <div className="flex flex-col justify-center gap-8 h-72">
          <h2 className="text-center">
            <Link href="">Design</Link>
          </h2>
          <h2 className="text-center">
            <Link href="">Backend</Link>
          </h2>
          <h2 className="text-center">
            <Link href="">Frontend</Link>
          </h2>
        </div>
        <div className="flex justify-center gap-8 h-24">
          <Image
            src="/icons/linkedin.svg"
            height="32"
            width="32"
            alt="phone icon"
          ></Image>
          <Image
            src="/icons/github.svg"
            height="32"
            width="32"
            alt="email icon"
          ></Image>
        </div>
      </div>
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
