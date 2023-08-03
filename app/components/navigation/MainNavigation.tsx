import Image from "next/image";
import Link from "next/link";
import Cell from "../Cell";
import I18nLinks from "./I18nLinks";
import PartsLinks from "./MainLinks";
import ContactLinks from "./ContactLinks";

export default function MainNavigation({ className }: { className?: string }) {
  return (
    <Cell
      className={`h-144 divide-y-2 divide-primary-300 bg-primary-50 ${className}`}
    >
      <I18nLinks />
      <ContactLinks />
      <PartsLinks />
      <div className="flex h-24 items-center justify-center gap-8  ">
        <Link
          href="https://www.linkedin.com/in/shatynska/"
          target="_blank"
          title="Linkedin profile"
        >
          <Image
            src="/icons/linkedin.svg"
            height="32"
            width="32"
            alt="Linkedin icon"
          />
        </Link>
        <Link
          href="https://github.com/shatynska"
          target="_blank"
          title="GitHub profile"
        >
          <Image
            src="/icons/github.svg"
            height="32"
            width="32"
            alt="GitHub icon"
          />
        </Link>
      </div>
    </Cell>
  );
}
