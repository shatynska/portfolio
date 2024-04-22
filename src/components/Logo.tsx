import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import logoImage from '/public/logo.svg';

export default function Logo() {
  const t = useTranslations('Index');

  return (
    <Link href="/" title={t('Home page')}>
      <div className="flex gap-2 px-10">
        <Image src={logoImage} alt={t('Logo')} height={40} width={40} />
        <div>
          {t('Web')}
          <br />
          {t('Developer')}
        </div>
      </div>
    </Link>
  );
}
