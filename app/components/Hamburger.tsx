import React from "react";

export default function Hamburger() {
  return (
    <button className="group fixed lg:hidden right-4 top-4">
      <div className="relative flex h-16 w-16 transform items-center justify-center overflow-hidden bg-primary-600 transition-all duration-200 hover:bg-primary-500">
        <div className="flex h-6 w-8 origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
          <div className="h-0.5 w-8 origin-left transform bg-white transition-all duration-300 group-focus:translate-x-10"></div>
          <div className="h-[2px] w-8 transform rounded bg-white transition-all delay-75 duration-300 group-focus:translate-x-10"></div>
          <div className="h-[2px] w-8 origin-left transform bg-white transition-all delay-150 duration-300 group-focus:translate-x-10"></div>

          <div className="absolute top-3 flex w-0 -translate-x-10 transform items-center justify-between transition-all duration-500 group-focus:w-12 group-focus:translate-x-0">
            <div className="absolute h-[2px] w-8 rotate-0 transform bg-white transition-all delay-300 duration-500 group-focus:rotate-45"></div>
            <div className="absolute h-[2px] w-8 -rotate-0 transform bg-white transition-all delay-300 duration-500 group-focus:-rotate-45"></div>
          </div>
        </div>
      </div>
    </button>
  );
}
