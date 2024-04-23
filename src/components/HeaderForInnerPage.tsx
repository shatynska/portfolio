import Cell from './Cell';
import Logo from './Logo';

export default function HeaderForInnerPage() {
  return (
    <header className="flex flex-col md:flex-row">
      <Cell background="darker" className="flex-row items-center gap-4 text-sm">
        <Logo />
      </Cell>
      <Cell className="hidden md:block" />
      <Cell background="light" className="hidden lg:block" />
    </header>
  );
}
