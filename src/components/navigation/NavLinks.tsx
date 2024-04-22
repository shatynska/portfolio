'use client';

import { Link, locales, usePathname } from '@/navigation';

export type NavLink = {
  name: string;
  href: string;
  title?: string;
  locale?: (typeof locales)[number];
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
          isActive = pathname === link.href;
        }

        if (!isActive) {
          return (
            <Link
              href={link.href}
              title={link.title}
              locale={link.locale}
              key={link.title}
            >
              {link.name}
            </Link>
          );
        } else if (link.href !== '/' || link.locale) {
          return (
            <span className="opacity-70" key={link.title}>
              {link.name}
            </span>
          );
        }
      })}
    </nav>
  );
}
