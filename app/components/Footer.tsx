import Cell from "../components/Cell";

export default function Footer() {
  return (
    <footer>
      <section className="flex">
        <Cell className="cell-sm items-center bg-primary-900 text-primary-100">
          Contact me
        </Cell>
        <Cell className="cell-sm border-b-2 border-primary-100 bg-primary-200"></Cell>
        <Cell className="cell-sm border-r-2"></Cell>
      </section>
      <section className="flex">
        <Cell className="cell-sm border-b-2 border-primary-100 bg-primary-200"></Cell>
        <Cell className="cell-sm border-b-2"></Cell>
        <Cell className="cell-sm items-center bg-primary-500 text-sm text-primary-100">
          © 2023 Helen Shatynska
        </Cell>
      </section>
    </footer>
  );
}