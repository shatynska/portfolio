import { useTranslations } from 'next-intl';
import Cell from './Cell';
import ContactLinks from './navigation/ContactLinks';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

export default function ContactMeSection() {
  const t = useTranslations('Index');

  return (
    <section className="flex flex-col md:flex-row">
      <Cell background="darker" className="items-center font-semibold">
        <Popover>
          <PopoverTrigger>{t('Contact me')}</PopoverTrigger>
          <PopoverContent>
            <ContactLinks />
          </PopoverContent>
        </Popover>
      </Cell>
      <Cell background="light" />
      <Cell className="order-first border md:hidden lg:order-none lg:block" />
    </section>
  );
}
