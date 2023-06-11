import Cell from "../components/Cell";

export default function CarouselNavigation({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <section className="flex md:h-24 flex-col md:flex-row">
      <Cell className="hidden border-l-2 bg-primary-50 md:block"></Cell>
      <Cell className="h-24 items-center bg-primary-700 text-primary-100">
        {children}
      </Cell>
      <Cell className="bg-primary-300 md:hidden lg:block"></Cell>
    </section>
  );
}
