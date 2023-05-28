import Cell from "../components/Cell";

export default function Footer() {
  return (
    <footer>
      <section className="flex flex-col md:flex-row">
        <Cell className="cell-sm items-center bg-primary-900 text-primary-100">
          Contact me &gt;
        </Cell>
        <Cell className="cell-sm bg-primary-300"></Cell>
        <Cell className="cell-sm hidden border-r-2 bg-primary-50 lg:block"></Cell>
      </section>
      <section className="flex flex-col-reverse md:flex-row">
        <Cell className="cell-sm hidden bg-primary-300 lg:block "></Cell>
        <Cell className="cell-sm hidden bg-primary-50 md:block"></Cell>
        <Cell className="cell-sm items-center bg-primary-500 text-sm text-primary-100">
          © 2023 Helen Shatynska
        </Cell>
      </section>
    </footer>
  );
}
