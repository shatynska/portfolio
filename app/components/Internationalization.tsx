import Link from "next-intl/link";

export default function Internationalization() {
  return (
    <nav className="flex h-24 items-center justify-center gap-8 font-semibold">
      <Link href="/" locale="ua" title="Українська">
        UA
      </Link>
      <Link href="/" locale="en" title="English">
        EN
      </Link>
    </nav>
  );
}
