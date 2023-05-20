import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin", "cyrillic"] });

export const metadata = {
  title: "Web developer: design, backend and frontend",
  description:
    "Web developer focused on backend with frontend background. Main technology stack used: PHP, Laravel, MySQL, TypeScript, Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
