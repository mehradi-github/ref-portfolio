import React, { FC, useState } from "react";
import { IoInformationCircle, IoMenu, IoClose } from "react-icons/io5";

const Header: FC = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <nav className="relative bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-3 mx-auto md:flex">
        <div className="flex items-center justify-between">
          <a href="">
            <IoInformationCircle className="w-auto h-10 sm:h-14 text-blue-500" />
          </a>
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
      </div>
    </nav>
  );
};
export default Header;
