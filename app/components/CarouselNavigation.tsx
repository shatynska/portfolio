import Cell from "../components/Cell";

export default function CarouselNavigation() {
  return (
    <section className="hidden">
      <Cell className="h-18 border-l-2 bg-primary-50"></Cell>
      <Cell className="h-18 items-center bg-primary-700 text-primary-100"></Cell>
      <Cell className="h-18 bg-primary-300"></Cell>
    </section>
  );
}
