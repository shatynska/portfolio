import Image from "next/image";
import Link from "next/link";

export default function MainNavigation() {
  return (
    <nav className="cell-lg flex w-96 flex-col justify-around justify-items-center border-r-2 border-primary-200 bg-primary-50 bg-[url('/backgrounds/lines.svg')] py-0 font-bold ">
      <div className="flex h-24 items-center justify-center gap-8">
        <Link href="">UA</Link>
        <Link href="">EN</Link>
        <Link href="">PL</Link>
      </div>
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
      <div className="flex h-72 flex-col justify-center gap-8 text-center">
        <h2>
          <Link href="">Design</Link>
        </h2>
        <h2>
          <Link href="">Backend</Link>
        </h2>
        <h2>
          <Link href="">Frontend</Link>
        </h2>
      </div>
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
    </nav>
  );
}
