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
      <div className="cell-lg bg-primary-200"></div>
      <div className="cell-lg border-r-2"></div>
      <div className="cell-lg border-l-2">
        <p>
          Web developer focused on&nbsp;backend with&nbsp;frontend background
          based in&nbsp;Ukraine.
        </p>
        <p>
          Main technology stack used: PHP, Laravel, MySQL, TypeScript, Next.js.
        </p>
      </div>
      <div className="cell-lg bg-primary-900"></div>
      <div className="cell-lg">
        <Image src="/decoration.jpg" alt="decoration element" fill={true} />
      </div>
    </main>
  );
}
