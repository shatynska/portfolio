import React from "react";
import MainNavigation from "./MainNavigation";

export default function Hamburger() {
  return (
    <section className="top-nav">
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <div className="menu">
        <MainNavigation />
      </div>
      <div className="bg-gray-700 opacity-50 w-full h-full"></div>
    </section>
  );
}
