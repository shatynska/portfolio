import Image from "next/image";
import Cell from "../components/Cell";
import MainNavigation from "./MainNavigation";

export default function Footer() {
  return (
    <footer>
      <section className="flex flex-col md:flex-row">
        <Cell className="h-18 items-center bg-primary-900 text-base text-primary-100">
          Contact me
        </Cell>
        <Cell className="h-18 bg-primary-300"></Cell>
        <Cell className="hidden h-18 border-r-2 bg-primary-50 lg:block"></Cell>
      </section>
      <section className="flex flex-col md:flex-row">
        <Cell className="hidden h-18 bg-primary-300 md:block "></Cell>
        <Cell className="hidden h-18 bg-primary-50 lg:block"></Cell>
        <Cell className="h-18 items-center bg-primary-500 text-sm text-primary-100">
          © 2023 Helen Shatynska
        </Cell>
      </section>
    </footer>
  );
}
