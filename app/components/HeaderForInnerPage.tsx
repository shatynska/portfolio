import Cell from './Cell';
import Logo from './Logo';

export default function HeaderForInnerPage() {
  return (
    <header className="flex flex-col md:h-24 md:flex-row">
      <Cell className="h-24 flex-row gap-4 bg-primary-900 text-sm text-primary-100">
        <Logo />
      </Cell>
      <Cell className="hidden bg-primary-50 md:block"></Cell>
      <Cell className="hidden bg-primary-200 lg:block"></Cell>
    </header>
  );
}
