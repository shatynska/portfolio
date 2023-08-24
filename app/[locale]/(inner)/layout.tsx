import HeaderForInnerPage from "@/app/components/HeaderForInnerPage";

export default async function InnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderForInnerPage />
      {children}
    </>
  );
}
