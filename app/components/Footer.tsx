import Cell from "../components/Cell";

export default function Footer() {
  return (
    <footer>
      <section className="flex">
        <Cell className="cell-sm items-center bg-primary-900 text-primary-100">
          Contact me &gt;
        </Cell>
        <Cell className="cell-sm bg-primary-200"></Cell>
        <Cell className="cell-sm border-r-2 bg-primary-100"></Cell>
      </section>
      <section className="flex">
        <Cell className="cell-sm bg-primary-200"></Cell>
        <Cell className="cell-sm bg-primary-100"></Cell>
        <Cell className="cell-sm items-center bg-primary-500 text-sm text-primary-100">
          © 2023 Helen Shatynska
        </Cell>
      </section>
    </footer>
  );
}
