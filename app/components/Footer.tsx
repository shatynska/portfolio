import Image from "next/image";
import Cell from "../components/Cell";
import MainNavigation from "./MainNavigation";

export default function Footer() {
  return (
    <footer>
      <section className="flex flex-col md:h-24 md:flex-row">
        <Cell className="h-24 items-center bg-primary-900 text-base text-primary-100">
          <button className="font-bo text-lg  hover:opacity-80">
            Contact me
          </button>
        </Cell>
        <Cell className=" bg-primary-300"></Cell>
        <Cell className="hidden bg-primary-50 lg:block"></Cell>
      </section>
      <section className="flex flex-col md:h-24 md:flex-row">
        <Cell className="hidden bg-primary-300 md:block "></Cell>
        <Cell className="hidden bg-primary-50 lg:block"></Cell>
        <Cell className="items-center bg-primary-600 text-sm text-primary-100">
          © 2023 Helen Shatynska
        </Cell>
      </section>
    </footer>
  );
}
