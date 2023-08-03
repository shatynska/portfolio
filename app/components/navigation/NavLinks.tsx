"use client";

import { usePathname } from "next/navigation";
import Link from "next-intl/link";

type NavLink = {
  name: string;
  href: string;
  title?: string;
  locale?: string;
};

export default function NavLinks({
  className,
  params: { locale, navLinks },
}: {
  className?: string;
  params: { locale: string; navLinks: NavLink[] };
}) {
  const pathname = usePathname();

  return (
    <nav className={className}>
      {navLinks.map((link) => {
        let isActive;

        if (link.locale) {
          isActive = locale.match(link.locale);
        } else {
          isActive = pathname.includes(link.href);
        }

        if (!isActive) {
          return (
            <Link href={link.href} title={link.title} locale={link.locale}>
              {link.name}
            </Link>
          );
        } else {
          return <span className="font-extrabold">{link.name}</span>;
        }
      })}
    </nav>
  );
}