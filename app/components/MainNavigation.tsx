import Image from "next/image";
import Link from "next/link";
import Cell from "./Cell";
import Internationalization from "./Internationalization";
import { useLocale } from "next-intl";

export default function MainNavigation({ className }: { className?: string }) {
  return (
    <Cell
      className={`h-144 divide-y-2 divide-primary-300 bg-primary-50 ${className}`}
    >
      <Internationalization params={{ locale: useLocale() }} />
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
      <nav className="flex h-72 flex-col justify-center gap-8 text-center">
        <h2>
          <Link href="" title="UI/UX design parts of projects">
            Design
          </Link>
        </h2>
        <h2>
          <Link href="" title="Backend parts of projects">
            Backend
          </Link>
        </h2>
        <h2>
          <Link href="" title="Frontend parts of projects">
            Frontend
          </Link>
        </h2>
      </nav>
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
