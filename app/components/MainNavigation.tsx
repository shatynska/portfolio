import Image from "next/image";
import Link from "next/link";
import Cell from "./Cell";

export default function MainNavigation({ className }: { className?: string }) {
  return (
    <Cell
      className={`h-144 border-x-2 bg-primary-50 bg-[url("/backgrounds/lines.svg")] ${className}`}
    >
      <nav className="flex h-24 items-center justify-center gap-8 font-semibold">
        <Link href="">UA</Link>
        <Link href="">EN</Link>
        <Link href="">PL</Link>
      </nav>
      <div className="flex h-24 justify-center gap-8">
        <Image src="/icons/phone.svg" height="32" width="32" alt="phone icon" />
        <Image src="/icons/email.svg" height="32" width="32" alt="email icon" />
        <Image src="/icons/skype.svg" height="32" width="32" alt="skype icon" />
        <Image
          src="/icons/address.svg"
          height="32"
          width="32"
          alt="address icon"
        />
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
      <div className="flex h-24 justify-center gap-8">
        <Image
          src="/icons/linkedin.svg"
          height="32"
          width="32"
          alt="phone icon"
        />
        <Image
          src="/icons/github.svg"
          height="32"
          width="32"
          alt="email icon"
        />
      </div>
    </Cell>
  );
}
