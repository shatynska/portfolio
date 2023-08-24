import Hamburger from "@/app/components/navigation/Hamburger";

export default async function InnerTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Hamburger />
    </>
  );
}
