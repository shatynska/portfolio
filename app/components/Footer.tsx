import Cell from "../components/Cell";
import MainNavigation from "./MainNavigation";

export default function Footer() {
  return (
    <footer>
      <section className="hidden lg:flex">
        <Cell className="h-18 items-center bg-primary-900 text-primary-100">
          Contact me &gt;
        </Cell>
        <Cell className="h-18 bg-primary-300"></Cell>
        <Cell className="hidden h-18 border-r-2 bg-primary-50 lg:block"></Cell>
      </section>
      <MainNavigation className="flex flex-col lg:hidden" />
      <section className="flex">
        <Cell className="hidden h-18 bg-primary-300 lg:block "></Cell>
        <Cell className="hidden h-18 bg-primary-50 lg:block"></Cell>
        <Cell className="h-18 items-center bg-primary-500 text-sm text-primary-100">
          © 2023 Helen Shatynska
        </Cell>
      </section>
    </footer>
  );
}
