import React from "react";
import MainNavigation from "./MainNavigation";
import HamburgerIcon from "../icons/HamburgerIcon";

export default function Hamburger({ className }: { className?: string }) {
  return (
    <section
      className={`fixed left-0 top-0 z-50 flex w-full flex-row justify-end lg:left-auto lg:max-w-288 ${className}`}
    >
      <input id="menu-toggle" className="peer hidden" type="checkbox" />
      <label
        htmlFor="menu-toggle"
        className="fixed cursor-pointer mix-blend-difference hover:opacity-80 peer-checked:[&_.burger]:translate-x-10 peer-checked:[&_.cross-line-down]:-rotate-45 peer-checked:[&_.cross-line-up]:rotate-45 peer-checked:[&_.cross]:w-12 peer-checked:[&_.cross]:translate-x-0"
      >
        <HamburgerIcon />
      </label>
      <div className="absolute -z-10 -mr-[100%] flex w-0 flex-col items-end transition-all duration-300 peer-checked:mr-0 peer-checked:w-full">
        <MainNavigation />
        <div className="absolute left-0 top-0 -z-50 m-0 h-screen w-full bg-primary-900 opacity-90"></div>
      </div>
    </section>
  );
}
