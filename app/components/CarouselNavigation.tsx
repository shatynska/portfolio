import Cell from "../components/Cell";

export default function CarouselNavigation({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <section className="flex flex-col md:flex-row">
      <Cell className="hidden h-18 border-l-2 bg-primary-50 md:block"></Cell>
      <Cell className="h-18 items-center bg-primary-700 text-primary-100">
        {children}
      </Cell>
      <Cell className="md:hidden h-18 bg-primary-300 lg:block"></Cell>
    </section>
  );
}
