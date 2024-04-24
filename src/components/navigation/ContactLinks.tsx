import Image from 'next/image';
import Link from 'next/link';

export default function ContactLinks() {
  return (
    <div className="flex h-20 items-center justify-center gap-8  ">
      <Link href="tel:+380978976847" target="_blank" title="Phone number">
        <Image src="/icons/phone.svg" height="32" width="32" alt="Phone icon" />
      </Link>

      <Link
        href="https://wa.me/380978976847"
        target="_blank"
        title="Whatsapp chat"
      >
        <Image
          src="/icons/whatsapp.svg"
          height="32"
          width="32"
          alt="Whatsapp icon"
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
  );
}
