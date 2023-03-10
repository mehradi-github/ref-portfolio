import nearestIndex from "@/utilits/nearestIndex";
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
//import useScrollSpy from "react-use-scrollspy";

interface P {
  refs: React.RefObject<HTMLElement>[];
}
const Header: FC<P> = ({ refs }) => {
  const navbarRef = useRef<HTMLElement>(null);
  const [isOpen, setisOpen] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const underlineNav = useRef<HTMLSpanElement>(null);
  // const navbarOffset = 150;
  // const activeIndex = useScrollSpy({
  //   sectionElementRefs: refs,
  //   offsetPx: -240,
  // });

  const navRefs: React.RefObject<HTMLAnchorElement>[] = [
    useRef<HTMLAnchorElement>(null),
    useRef<HTMLAnchorElement>(null),
    useRef<HTMLAnchorElement>(null),
    useRef<HTMLAnchorElement>(null),
    useRef<HTMLAnchorElement>(null),
  ];

  interface LinksProps {
    $isOpen: boolean;
  }
  const TwLink = tw.a`
hover:text-blue-500 
px-2.5 
pb-2 
text-gray-700 
transition-all 
duration-300 
transform  
dark:text-gray-200 

active:border-indigo-500 
active:border-indigo-700 
dark:active:border-gray-100 
md:mx-2`;

  const TwLinks = tw.div<LinksProps>`
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

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleScroll = (e: Event) => {
    var index = nearestIndex(window.scrollY, refs, 0, refs.length - 1);
    setActiveIndex(index);
  };

  useEffect(() => {
    setMounted(true);
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const animateUnderlineNav = () => {
    navbarRef.current!.setAttribute(
      "data-state",
      activeIndex > 0 ? "scroll" : ""
    );

    const e = navRefs[activeIndex];
    var left = e.current?.offsetLeft;
    var width = e.current?.offsetWidth;
    underlineNav.current!.style.left = left + "px";
    underlineNav.current!.style.width = width + "px";

    console.log("activeIndex:", activeIndex, "left:", left, "width:", width);
  };

  useEffect(() => {
    animateUnderlineNav();
  });

  // useEffect(() => {
  //   var navbar = navbarRef.current;
  //   // if (window.pageYOffset > navbarOffset)
  //   //   navbar?.setAttribute("data-state", "scroll");
  //   // else navbar?.setAttribute("data-state", "");

  //   window.addEventListener("scroll", () => {
  //     if (window.pageYOffset >= navbarOffset)
  //       navbar?.setAttribute("data-state", "scroll");
  //     else navbar?.setAttribute("data-state", "");
  //   });
  // }, []);

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
        <TwLinks $isOpen={isOpen}>
          <div className="">
            <ul className="flex flex-col px-2-mx-4 md:flex-row md:mx-10 md:py-0">
              <li className="py-2">
                <TwLink ref={navRefs[0]} href="#hero">
                  Home
                </TwLink>
              </li>
              <li className="py-2">
                <TwLink ref={navRefs[1]} href="#about">
                  About
                </TwLink>
              </li>
              <li className="py-2">
                <TwLink ref={navRefs[2]} href="#portfolio">
                  Portfolio
                </TwLink>
              </li>
              <li className="py-2">
                <TwLink ref={navRefs[3]} href="#skills">
                  Skills
                </TwLink>
              </li>
              <li className="py-2">
                <TwLink ref={navRefs[4]} href="#contact">
                  Contact
                </TwLink>
              </li>
            </ul>
            <span
              ref={underlineNav}
              className=" transition-all duration-500 ease-in-out absolute bottom-1 h-1 bg-indigo-700   hidden  md:block "
            />
          </div>
          {renderThemeChanger()}
        </TwLinks>
      </div>
    </nav>
  );
};
export default Header;
