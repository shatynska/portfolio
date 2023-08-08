import React from "react";
import MainNavigation from "./MainNavigation";

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
        <div className="relative flex h-24 w-24 transform items-center justify-center overflow-hidden transition-all duration-200">
          <div className="flex h-6 w-7 origin-center transform flex-col justify-around overflow-hidden transition-all duration-300">
            <div className="burger h-[3px] w-7 origin-left transform bg-primary-500 transition-all duration-300"></div>
            <div className="burger h-[3px] w-7 origin-left transform bg-primary-500 transition-all duration-300"></div>
            <div className="burger h-[3px] w-7 transform bg-primary-500 transition-all delay-75 duration-300"></div>

            <div className="cross absolute top-3 flex w-0 -translate-x-10 transform items-center justify-between transition-all duration-500">
              <div className="cross-line-up absolute h-[3px] w-7 rotate-0 transform bg-primary-400 transition-all delay-300 duration-500"></div>
              <div className="cross-line-down absolute h-[3px] w-7 -rotate-0 transform bg-primary-400 transition-all delay-300 duration-500"></div>
            </div>
          </div>
        </div>
      </label>
      <div className="absolute -z-10 -mr-[100%] flex w-0 flex-col items-end transition-all duration-300 peer-checked:mr-0 peer-checked:w-full">
        <MainNavigation />
        <div className="absolute left-0 top-0 -z-50 m-0 h-screen w-full bg-primary-900 opacity-90"></div>
      </div>
    </section>
  );
}
