import { useLocale } from "next-intl";
import NavLinks from "./NavLinks";

export default function I18nLinks() {
  const locale = useLocale();

  const navLinks = [
    { name: "UA", href: "/", locale: "ua", title: "Українська" },
    { name: "EN", href: "/", locale: "en", title: "English" },
  ];

  return (
    <NavLinks
      className="flex h-24 items-center justify-center gap-8 font-semibold"
      params={{ locale: locale, navLinks: navLinks }}
    />
  );
}
