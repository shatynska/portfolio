import Image from "next/image";
import Link from "next/link";
import Cell from "../Cell";
import I18nLinks from "./I18nLinks";
import PartsLinks from "./MainLinks";

export default function MainNavigation({ className }: { className?: string }) {
  return (
    <Cell
      className={`h-144 divide-y-2 divide-primary-300 bg-primary-50 ${className}`}
    >
      <I18nLinks />
      <div className="flex h-24 items-center justify-center gap-8  ">
        <Link href="tel:+380978976847" target="_blank" title="Phone number">
          <Image
            src="/icons/phone.svg"
            height="32"
            width="32"
            alt="Phone icon"
          />
        </Link>
        <Link
          href="mailto:helenshatynska@gmail.com"
          target="_blank"
          title="E-mail"
        >
          <Image
            src="/icons/email.svg"
            height="32"
            width="32"
            alt="E-mail icon"
          />
        </Link>
        <Link
          href="skype:shatynskaa?userinfo"
          target="_blank"
          title="Skype profile"
        >
          <Image
            src="/icons/skype.svg"
            height="32"
            width="32"
            alt="Skype icon"
          />
        </Link>
        <Link
          href="https://goo.gl/maps/2d9j9b1gmRQEJgwT6"
          target="_blank"
          title="Location on Google Maps"
        >
          <Image
            src="/icons/address.svg"
            height="32"
            width="32"
            alt="Address icon"
          />
        </Link>
      </div>
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
