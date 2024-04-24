import Cell from '../Cell';
import ContactLinks from './ContactLinks';
import I18nLinks from './I18nLinks';
import MainLinks from './MainLinks';
import SocialMediaLinks from './SocialMediaLinks';

export default function MainNavigation({ className }: { className?: string }) {
  return (
    <Cell height="large" className={`divide-y-2 border px-0 ${className}`}>
      <I18nLinks />
      <ContactLinks />
      <MainLinks />
      <SocialMediaLinks />
    </Cell>
  );
}
