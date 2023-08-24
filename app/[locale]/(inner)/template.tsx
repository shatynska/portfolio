import HamburgerMenu from "@/app/components/navigation/HamburgerMenu";

export default async function InnerTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <HamburgerMenu />
    </>
  );
}
