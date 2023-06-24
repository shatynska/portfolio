import React from "react";
import MainNavigation from "./MainNavigation";

export default function Hamburger() {
  return (
    <section className="fixed left-0 top-0 flex w-full flex-row justify-end lg:hidden">
      <input id="menu-toggle" className="hidden" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button group fixed right-2 top-2 cursor-pointer mix-blend-difference hover:opacity-80 lg:hidden">
          <div className="relative flex h-16 w-16 transform items-center justify-center overflow-hidden transition-all duration-200">
            <div className="flex h-6 w-7 origin-center transform flex-col justify-around overflow-hidden transition-all duration-300">
              <div className="h-[3px] w-7 origin-left transform bg-primary-400 transition-all duration-300 group-focus:translate-x-10"></div>
              <div className="h-[3px] w-7 origin-left transform bg-primary-400 transition-all duration-300 group-focus:translate-x-10"></div>
              <div className="h-[3px] w-7 transform bg-primary-400 transition-all delay-75 duration-300 group-focus:translate-x-10"></div>

              <div className="absolute top-3 flex w-0 -translate-x-10 transform items-center justify-between transition-all duration-500 group-focus:w-12 group-focus:translate-x-0">
                <div className="absolute h-[3px] w-7 rotate-0 transform bg-primary-400 transition-all delay-300 duration-500 group-focus:rotate-45"></div>
                <div className="absolute h-[3px] w-7 -rotate-0 transform bg-primary-400 transition-all delay-300 duration-500 group-focus:-rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </label>
      <div className="menu">
        <MainNavigation />
        <div className="absolute left-0 top-0 -z-50 m-0 h-screen w-full bg-primary-900 p-0 opacity-90"></div>
      </div>
    </section>
  );
}
