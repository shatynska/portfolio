import Cell from "../components/Cell";

export default function CarouselNavigation({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <section className="flex flex-col md:h-24 md:flex-row">
      <Cell className="hidden bg-primary-50 md:block"></Cell>
      <Cell className="h-24 bg-primary-700 p-10 text-primary-100">
        {children}
      </Cell>
      <Cell className="bg-primary-300 md:hidden lg:block"></Cell>
    </section>
  );
}
