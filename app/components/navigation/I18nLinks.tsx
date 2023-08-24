"use client";

import { useLocale } from "next-intl";
import { usePathname } from "next-intl/client";
import NavLinks from "./NavLinks";

export default function I18nLinks() {
  const locale = useLocale();

  const pathname = usePathname();

  const navLinks = [
    {
      name: "UA",
      href: pathname,
      locale: "ua",
      title: "Українська",
    },
    { name: "EN", href: pathname, locale: "en", title: "English" },
  ];

  return (
    <NavLinks
      className="flex h-24 items-center justify-center gap-8 font-semibold"
      params={{ locale: locale, navLinks: navLinks }}
    />
  );
}
