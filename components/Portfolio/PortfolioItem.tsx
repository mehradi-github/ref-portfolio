import React, { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AiFillPlayCircle } from "react-icons/ai";

const PortfolioItem: FC = () => {
  const [isActive, setIsActive] = useState("");
  const refItem = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleCursorEnter = (e: MouseEvent) => {
      setIsActive("active");
    };
    const handleCursorLeave = (e: MouseEvent) => {
      setIsActive("");
    };
    refItem.current?.addEventListener("mouseenter", handleCursorEnter);
    refItem.current?.addEventListener("mouseleave", handleCursorLeave);

    return () => {
      refItem.current?.removeEventListener("mouseenter", handleCursorEnter);
      refItem.current?.removeEventListener("mouseleave", handleCursorLeave);
    };
  }, []);

  return (
    <div
      ref={refItem}
      className="relative text-center mb-10 overflow-hidden cursor-pointer w-full border-gray-200 border-2 "
    >
      <Image
        height={180}
        width={180}
        src="/assets/images/profile.jpg"
        alt="profile"
        className="mx-auto w-full"
      />
      {/* footer */}
      <div
        data-state={isActive}
        className="absolute w-full bottom-0 opacity-70 bg-gray-300 py-4 px-0 transition-all duration-[0.4s] ease-in-out 
        data-[state=active]:opacity-0
        data-[state=active]:visible
        data-[state=active]:translate-y-full
        "
      >
        <a href="#">
          <h3 className="mb-1 ">Profile</h3>
        </a>
        <h5 className="font-semibold text-lg mb-0 text-gray-600">
          Next.js and TailwindCSS
        </h5>
      </div>
      {/* hover */}
      <div
        data-state={isActive}
        className="absolute w-full top-0 h-full flex justify-center items-center py-0 px-8 bg-gradient-to-br from-purple-600 to-indigo-600  opacity-0 visible -z-10 transition-all duration-[0.4s] ease-in-out scale-90
        data-[state=active]:opacity-75
        data-[state=active]:visible
        data-[state=active]:z-0
        data-[state=active]:scale-100
        "
      >
        <div className=" w-full text-white ">
          <ul className=" mb-0">
            <li key="1" className="inline-block">
              <a href="#">
                <AiFillPlayCircle className="w-16 h-16 cursor-pointer animate-scale" />
              </a>
            </li>
          </ul>
          <div
            data-state={isActive}
            className="divide-y divide-solid divide-white w-full block mx-0 my-5 scale-100 transition-all duration-[0.6s] ease-linear
          data-[state=active]:scale-100
          "
          ></div>
          <a href="#" className="text-sm  my-0 mx-1">
            <h3
              data-state={isActive}
              className="text-lg font-semibold mt-0 translate-y-5 transition-all duration-500 ease-linear
            data-[state=active]:translate-y-0
            "
            >
              Profile
            </h3>
          </a>
          <h5
            data-state={isActive}
            className="font-semibold text-sm mb-0  translate-y-20 transition-all duration-700 ease-linear
           data-[state=active]:translate-y-0
          "
          >
            Next.js and TailwindCSS
          </h5>
        </div>
      </div>
    </div>
  );
};
export default PortfolioItem;
