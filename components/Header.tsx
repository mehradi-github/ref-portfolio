import React, { FC, useState } from "react";
import { IoInformationCircle, IoMenu, IoClose } from "react-icons/io5";
import tw from "tailwind-styled-components";

const Header: FC = () => {
  const [isOpen, setisOpen] = useState(false);

  interface LinksProps {
    $isOpen: boolean;
  }
  const Links = tw.div<LinksProps>`
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
  return (
    <nav className="relative bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-3 mx-auto md:flex">
        <div className="flex items-center justify-between">
          <a href="">
            <IoInformationCircle className="w-auto h-10 sm:h-14 text-blue-500 mr-4" />
          </a>
          <div className="text-gray-500 font-bold text-xl"> Profile</div>
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
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
        <Links $isOpen={isOpen}>
          <div className="flex flex-col px-2 -mx-4 mt-2 md:flex-row md:mx-10 md:py-0">
            <a
              href="#"
              className="px-2.5 pt-2 pb-4 text-gray-700 transition-colors duration-300 transform  dark:text-gray-200 hover:border-b-4 hover:border-indigo-500 dark:hover:border-indigo-700 md:mx-2"
            >
              Home
            </a>
            <a
              href="#"
              className="px-2.5 pt-2 pb-4 text-gray-700 transition-colors duration-300 transform  dark:text-gray-200 hover:border-b-4 hover:border-indigo-500 dark:hover:border-indigo-700 md:mx-2"
            >
              About
            </a>
            <a
              href="#"
              className="px-2.5 pt-2 pb-4 text-gray-700 transition-colors duration-300 transform  dark:text-gray-200 hover:border-b-4 hover:border-indigo-500 dark:hover:border-indigo-700 md:mx-2"
            >
              Contact
            </a>
          </div>
        </Links>
      </div>
    </nav>
  );
};
export default Header;
