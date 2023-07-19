"use client";

import Link from "next-intl/link";

export default function Internationalization({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const navLinks = [
    { name: "UA", href: "/", locale: "ua", title: "Українська" },
    { name: "EN", href: "/", locale: "en", title: "English" },
  ];

  return (
    <nav className="flex h-24 items-center justify-center gap-8 font-semibold">
      {navLinks.map((link) => {
        const isActive = locale.match(link.locale);
        if (!isActive) {
          return (
            <Link href={link.href} title={link.title} locale={link.locale}>
              {link.name}
            </Link>
          );
        } else {
          return <span className="font-extrabold">{link.name}</span>;
        }
      })}
    </nav>
  );
}
