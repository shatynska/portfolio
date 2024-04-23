import Image from 'next/image';
import Link from 'next/link';
import Cell from '../Cell';
import ContactLinks from './ContactLinks';
import I18nLinks from './I18nLinks';
import MainLinks from './MainLinks';

export default function MainNavigation({ className }: { className?: string }) {
  return (
    <Cell height="large" className={`divide-y-2 border ${className}`}>
      <I18nLinks />
      <ContactLinks />
      <MainLinks />
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
