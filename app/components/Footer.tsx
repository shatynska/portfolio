import { useLocale } from "next-intl";
import { getTranslator } from "next-intl/server";
import Link from "next-intl/link";
import Cell from "../components/Cell";

export default async function Footer() {
  const locale = useLocale();
  const t = await getTranslator(locale, "Index");
  return (
    <footer>
      <section className="flex flex-col md:h-24 md:flex-row">
        <Cell className="h-24 items-center bg-primary-900 text-base text-primary-100">
          <Link href="/contact" className="text-lg font-semibold">
            {t("Contact me")}
          </Link>
        </Cell>
        <Cell className="bg-primary-300" />
        <Cell className="order-first border border-primary-200 bg-primary-50 md:hidden lg:order-none lg:block" />
      </section>
      <section className="flex flex-col md:h-24 md:flex-row">
        <Cell className="hidden bg-primary-300 md:block " />
        <Cell className="hidden border border-primary-200 bg-primary-50 lg:block" />
        <Cell className="items-center bg-primary-600 text-sm text-primary-100">
          © 2023 {t("Helen") + "\u00A0" + t("Shatynska")}
        </Cell>
      </section>
    </footer>
  );
}
