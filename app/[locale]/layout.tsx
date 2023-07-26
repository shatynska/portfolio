import { NextIntlClientProvider } from "next-intl";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin", "cyrillic"] });

export const metadata = {
  title: "Web developer: design, backend and frontend",
  description:
    "Web developer focused on backend with frontend background. Main technology stack used: PHP, Laravel, MySQL, TypeScript, Next.js.",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className={manrope.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
