import Image from "next/image";
import Link from "next/link";
import Cell from "./Cell";

export default function MainNavigation({ className }: { className?: string }) {
  return (
    <Cell
      className={`h-144 divide-y-2 divide-primary-300 bg-primary-50 ${className}`}
    >
      <nav className="flex h-24 items-center justify-center gap-8 font-semibold">
        <Link href="">UA</Link>
        <Link href="">EN</Link>
        <Link href="">PL</Link>
      </nav>
      <div className="flex h-24 items-center justify-center gap-8  ">
        <Link href="tel:+380978976847">
          <Image
            src="/icons/phone.svg"
            height="32"
            width="32"
            alt="phone icon"
          />
        </Link>
        <Link href="mailto:helenshatynska@gmail.com">
          <Image
            src="/icons/email.svg"
            height="32"
            width="32"
            alt="email icon"
          />
        </Link>
        <Link href="skype:shatynskaa?userinfo">
          <Image
            src="/icons/skype.svg"
            height="32"
            width="32"
            alt="skype icon"
          />
        </Link>
        <Link href="https://goo.gl/maps/2d9j9b1gmRQEJgwT6">
          <Image
            src="/icons/address.svg"
            height="32"
            width="32"
            alt="address icon"
          />
        </Link>
      </div>
      <nav className="flex h-72 flex-col justify-center gap-8 text-center">
        <h2>
          <Link href="">Design</Link>
        </h2>
        <h2>
          <Link href="">Backend</Link>
        </h2>
        <h2>
          <Link href="">Frontend</Link>
        </h2>
      </nav>
      <div className="flex h-24 items-center justify-center gap-8  ">
        <Link href="https://www.linkedin.com/in/shatynska/">
          <Image
            src="/icons/linkedin.svg"
            height="32"
            width="32"
            alt="phone icon"
          />
        </Link>
        <Link href="https://github.com/shatynska">
          <Image
            src="/icons/github.svg"
            height="32"
            width="32"
            alt="email icon"
          />
        </Link>
      </div>
    </Cell>
  );
}
