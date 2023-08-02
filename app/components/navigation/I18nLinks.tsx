"use client";

import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import NavLinks from "./NavLinks";

export default function I18nLinks() {
  const locale = useLocale();

  const pathname = usePathname();
  const pathnameWithoutLocale = pathname.replace(locale, "/");

  const navLinks = [
    {
      name: "UA",
      href: pathnameWithoutLocale,
      locale: "ua",
      title: "Українська",
    },
    { name: "EN", href: pathnameWithoutLocale, locale: "en", title: "English" },
  ];

  return (
    <NavLinks
      className="flex h-24 items-center justify-center gap-8 font-semibold"
      params={{ locale: locale, navLinks: navLinks }}
    />
  );
}
