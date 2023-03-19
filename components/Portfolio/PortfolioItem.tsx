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
    <div ref={refItem} className="relative w-full  border-gray-200 border-2 ">
      <Image
        height={180}
        width={180}
        src="/assets/images/profile.jpg"
        alt="profile"
        className="mx-auto"
      />
      <div className="bg-gray-300 bottom-0 py-4 transition-all duration-500 ease-linear text-center">
        <a href="#">
          <h3 className="text-gray-700 font-semibold text-lg ">Profile</h3>
        </a>
        <h5>Next.js and TailwindCSS</h5>
      </div>
      <div
        data-state={isActive}
        className="w-full h-full top-0 hidden   opacity-0 -z-10 transition-all duration-[4s] ease-linear px-8 invisible translate-y-0 
        data-[state=active]:-translate-y-full
        data-[state=active]:block 
        data-[state=active]:visible
        data-[state=active]:opacity-80
        data-[state=active]:z-0
        
        "
      >
        <div className="absolute top-0 left-0 w-full h-full bg-indigo-500 text-white text-center py-2 flex flex-col justify-center items-center">
          <ul className="">
            <li key="1" className="flex justify-center">
              <a href="#">
                <AiFillPlayCircle className="w-16 h-16 cursor-pointer animate-scale" />
              </a>
            </li>
          </ul>
          <div className="divide-x-2 border-white"></div>
          <a href="#">
            <h3 className=" font-semibold text-lg my-2">Profile</h3>
          </a>
          <h5 className="">Next.js and TailwindCSS</h5>
        </div>
      </div>
    </div>
  );
};
export default PortfolioItem;
