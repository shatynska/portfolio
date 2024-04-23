'use client';

import { useRef, useState } from 'react';
import HamburgerIcon from '../icons/HamburgerIcon';
import MainNavigation from './MainNavigation';

export default function HamburgerMenu({ className }: { className?: string }) {
  const [HamburgerChecked, setHamburgerChecked] = useState(false);
  const hamburgerCheckboxRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHamburgerChecked(event.target.checked);
  };

  const handleOutsideClick = () => {
    setHamburgerChecked(false);
    if (hamburgerCheckboxRef.current) {
      hamburgerCheckboxRef.current.checked = false;
    }
  };

  return (
    <section
      className={`fixed left-0 top-0 z-50 flex w-full flex-row justify-end lg:left-auto lg:max-w-288 ${className}`}
    >
      <input
        id="menu-toggle"
        className="peer hidden"
        type="checkbox"
        onChange={handleChange}
        ref={hamburgerCheckboxRef}
      />
      <label
        htmlFor="menu-toggle"
        className="fixed cursor-pointer mix-blend-difference hover:opacity-80 peer-checked:[&_.burger]:translate-x-10 peer-checked:[&_.cross-line-down]:-rotate-45 peer-checked:[&_.cross-line-up]:rotate-45 peer-checked:[&_.cross]:w-12 peer-checked:[&_.cross]:translate-x-0"
      >
        <HamburgerIcon />
      </label>

      <div
        className={`absolute -z-10 flex flex-col items-end transition-all duration-300 ${
          HamburgerChecked ? 'mr-0 w-full' : '-mr-[100%] w-0'
        }`}
      >
        <MainNavigation />

        <div
          className="bg-background-900 absolute left-0 top-0 -z-50 m-0 h-screen w-full opacity-90"
          onClick={handleOutsideClick}
        ></div>
      </div>
    </section>
  );
}
