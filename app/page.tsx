import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="cell-lg">
        <Image
          src="/developer.jpg"
          alt="Web developer picture"
          fill={true}
          priority
        />
      </div>
    </main>
  );
}
