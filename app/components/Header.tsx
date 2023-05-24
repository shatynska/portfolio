import Image from "next/image";
import Cell from "../components/Cell";
import MainNavigation from "../components/MainNavigation";
import developerImage from "/public/developer.jpg";

export default function Header() {
  return (
    <header className="flex">
      <Cell className="cell-lg">
        <Image
          src={developerImage}
          alt="Web developer picture"
          placeholder="blur"
          className="object-cover"
          fill
          priority
        />
      </Cell>
      <Cell className="cell-lg justify-around gap-20 bg-primary-200 bg-[url('/backgrounds/line.svg')]">
        <h1 className="text-[2.5rem] font-bold leading-[3.25rem]">
          Web
          <br />
          Developer
        </h1>
        <div className="text-right text-[2.5rem] font-bold leading-[3.25rem]">
          Helen
          <br />
          Shatynska
        </div>
      </Cell>
      <MainNavigation />
    </header>
  );
}
