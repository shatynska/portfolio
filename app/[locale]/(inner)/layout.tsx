import HeaderForInnerPage from '@/app/components/HeaderForInnerPage';
import { unstable_setRequestLocale } from 'next-intl/server';

export default function InnerLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <HeaderForInnerPage />
      {children}
    </>
  );
}
