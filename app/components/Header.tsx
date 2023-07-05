import { getTranslator } from "next-intl/server";
import Image from "next/image";
import Cell from "../components/Cell";
import MainNavigation from "../components/MainNavigation";
import developerImage from "/public/developer.jpg";

export default async function Header({ params: {locale}, } : { params: { locale: string }; }) {
  const t = await getTranslator(locale, "Index");

  return (
    <header className="flex flex-col md:flex-row">
      <Cell className="h-screen max-h-192 min-h-128 gap-44 bg-primary-950 bg-[url('/backgrounds/line-dark.svg')] bg-contain bg-center bg-no-repeat px-14 pb-24 font-semibold text-primary-50 md:h-144 md:bg-primary-300 md:bg-[url('/backgrounds/line.svg')] md:pb-0 md:text-primary-900">
        <h1 className="text-[2.5rem] leading-[3.25rem]">
          {t("Web")}
          <br />
          {t("Developer")}
        </h1>
        <div className="text-right text-[2.5rem] leading-[3.25rem]">
          {t("Helen")}
          <br />
          {t("Shatynska")}
        </div>
      </Cell>
      <Cell className="h-144 md:order-first">
        <Image
          src={developerImage}
          alt={t("Web developer picture")}
          placeholder="blur"
          className="object-cover"
          fill
          priority
        />
      </Cell>
      <MainNavigation className="hidden lg:flex " />
    </header>
  );
}
