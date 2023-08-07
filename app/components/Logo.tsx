import { useLocale } from "next-intl";
import { getTranslator } from "next-intl/server";
import Image from "next/image";
import logoImage from "/public/logo.svg";
import Link from "next/link";

export default async function Logo() {
  const locale = useLocale();
  const t = await getTranslator(locale, "Index");

  return (
    <Link href="/" title={t("Home page")}>
      <div className="flex gap-2 px-10">
        <Image src={logoImage} alt={t("Logo")} height={40} width={40} />
        <div>
          {t("Web")}
          <br />
          {t("Developer")}
        </div>
      </div>
    </Link>
  );
}
