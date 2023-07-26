import { useLocale } from "next-intl";
import { getTranslator } from "next-intl/server";
import NavLinks from "./NavLinks";

export default async function PartsLinks() {
  const locale = useLocale();
  const t = await getTranslator(locale, "Index");

  const navLinks = [
    {
      name: t("Design"),
      href: "/design",
      title: t("UI/UX design parts of projects"),
    },
    {
      name: t("Backend"),
      href: "/backend",
      title: t("Backend parts of projects"),
    },
    {
      name: t("Frontend"),
      href: "/frontend",
      title: t("Frontend parts of projects"),
    },
  ];

  return (
    <NavLinks
      className="flex h-72 flex-col justify-center gap-8 text-center text-2xl font-semibold"
      params={{ locale: locale, navLinks: navLinks }}
    />
  );
}
