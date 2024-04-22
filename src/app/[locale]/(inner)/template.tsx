import HamburgerMenu from '@/components/navigation/HamburgerMenu';

export default function InnerTemplate({
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
