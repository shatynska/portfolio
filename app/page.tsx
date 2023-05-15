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
    </main>
  );
}
