import Image from 'next/image';
import Link from 'next/link';

export default function SocialMediaLinks() {
  return (
    <div className="flex h-20 items-center justify-center gap-8  ">
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
  );
}
