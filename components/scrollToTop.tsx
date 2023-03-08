import React, { FC, useRef, useState } from "react";
import { FaChevronUp } from "react-icons/fa";
const scrollToTop: FC = () => {
  const [active, setActive] = useState("active");
  //   const wrapRef = useRef<HTMLElement>(null);
  //   const pathRef = useRef<HTMLElement>(null);
  return (
    <div
      data-state={active}
      //   ref={wrapRef}
      className="fixed bottom-8 right-8 h-11 w-11 cursor-pointer block rounded-full z-100 opacity-0 invisible translate-y-5 transition-all duration-500 ease-linear mix-blend-difference 
      data-[state=active]:opacity-100 data-[state=active]:visible data-[state=active]:translate-y-0
      "
    >
      <svg
        className="progress-circle svg-content w-full h-full"
        viewBox="-1 -1 102 102"
      >
        <path
          className="fill-none stroke-gray-300 stroke-4 box-border transition-all duration-500 ease-linear"
          // ref={pathRef}
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
        />
      </svg>

      <FaChevronUp className="absolute  text-center text-sm m-3 font-bold text-gray-300 left-0 top-0 w-5 h-5 cursor-pointer block z-10 transition-all duration-500 ease-linear " />
    </div>
  );
};
export default scrollToTop;
