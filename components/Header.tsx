import { useTheme } from "next-themes";
import React, { FC, useEffect, useState, useRef } from "react";
import {
  IoInformationCircle,
  IoMenu,
  IoClose,
  IoSunny,
  IoMoon,
} from "react-icons/io5";
import tw from "tailwind-styled-components";

const Header: FC = () => {
  const navbarRef = useRef<HTMLElement>(null);
  const [isOpen, setisOpen] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) navbar?.setAttribute("data-state", "scroll");
    else navbar?.setAttribute("data-state", "");

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300)
        navbar?.setAttribute("data-state", "scroll");
      else navbar?.setAttribute("data-state", "");
    });
  }, [navbarRef]);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <IoSunny
          className="w-6 h-6 text-yellow-500 "
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <IoMoon
          className="w-6 h-6 text-gray-500 "
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <nav
      ref={navbarRef}
      className="relative bg-white shadow dark:bg-gray-800 data-[state=scroll]:nav-scroll"
    >
      <div className="container px-6 py-3 mx-auto md:flex">
        <div className="flex items-center justify-between">
          <a href="">
            <IoInformationCircle className="w-auto h-10 sm:h-14 text-blue-500 mr-4" />
          </a>
          <div className="text-gray-500 font-bold text-xl"> Profile</div>
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setisOpen(!isOpen)}
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              {isOpen ? (
                <IoClose className="w-10 h-10" />
              ) : (
                <IoMenu className="w-10 h-10" />
              )}
            </button>
          </div>
        </div>
        <NavLinks $isOpen={isOpen}>
          <div className="flex flex-col px-2-mx-4 mt-2 md:flex-row md:mx-10 md:py-0">
            <NavLink href="#hero">Home</NavLink>
            <NavLink data-state="ok" href="#about">
              About
            </NavLink>
            <NavLink href="#portfolio">Portfolio</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
          {renderThemeChanger()}
        </NavLinks>
      </div>
    </nav>
  );
};
export default Header;

interface LinksProps {
  $isOpen: boolean;
}
const NavLink = tw.a`
data-[state=ok]:text-red-600 
hover:text-blue-500 
px-2.5 
pt-2 
pb-4 
text-gray-700 
transition-all 
duration-300 
transform  
dark:text-gray-200 
border-b-4 
border-white
dark:border-gray-800 
active:border-indigo-500 
active:border-indigo-700 
dark:active:border-gray-100 
md:mx-2`;

const NavLinks = tw.div<LinksProps>`
  ${(p) =>
    p.$isOpen ? "translate-x-0 opacity-100 " : "opacity-0 -translate-x-full"}
  absolute 
  inset-x-0 
  z-20 
  w-full
  px-6 
  py-4 
  transition-all 
  duration-300 
  ease-in-out 
  bg-white 
  dark:bg-gray-800 
  md:mt-0 
  md:p-0 
  md:top-0 
  md:relative 
  md:opacity-100 
  md:translate-x-0 
  md:flex 
  md:items-center 
  md:justify-between
  `;
