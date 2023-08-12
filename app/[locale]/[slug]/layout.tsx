import HeaderForInnerPage from "@/app/components/HeaderForInnerPage";
import Hamburger from "@/app/components/navigation/Hamburger";

export default async function InnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderForInnerPage />
      {children}
      <Hamburger />
    </>
  );
}
