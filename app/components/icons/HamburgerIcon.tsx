export default function HamburgerIcon() {
  return (
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
  );
}
