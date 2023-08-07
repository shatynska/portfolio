import { useLocale } from "next-intl";
import { getTranslator } from "next-intl/server";
import Image from "next/image";
import logoImage from "/public/logo.svg";

export default async function Logo() {
  const locale = useLocale();
  const t = await getTranslator(locale, "Index");

  return (
    <div className="m-4 flex gap-2">
      <Image src={logoImage} alt={t("logo")} height={40} width={40} />
      <div>
        {t("Web")}
        <br />
        {t("Developer")}
      </div>
    </div>
  );
}
