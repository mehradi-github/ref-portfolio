import React, { FC, useEffect, useRef, useState } from "react";
import { FaChevronUp } from "react-icons/fa";
const scrollToTop: FC = () => {
  const [active, setActive] = useState("active");
  const offset = 150;
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const updateStrokeDashoffset = (path: SVGPathElement, pathLength: number) => {
    let scroll = window.pageYOffset;

    if (scroll > offset) {
      setActive("active");
      let height = document.documentElement.scrollHeight - window.innerHeight;
      let progress = pathLength - (scroll * pathLength) / height;
      path.style.strokeDashoffset = progress.toString();
    } else {
      setActive("");
    }
  };
  const clickHandler = (wrap: HTMLDivElement) => {
    wrap.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return false;
    });
  };

  useEffect(() => {
    const wrap = wrapRef.current;
    const path = pathRef.current;

    if (wrap && path) {
      let pathLength = pathRef.current.getTotalLength();
      path.style.strokeDasharray = pathLength.toString();

      updateStrokeDashoffset(path, pathLength);
      window.addEventListener("scroll", () =>
        updateStrokeDashoffset(path, pathLength)
      );
      clickHandler(wrap);
    }
  }, []);

  return (
    <div
      data-state={active}
      ref={wrapRef}
      className="fixed bottom-8 right-8 h-11 w-11 cursor-pointer block rounded-full z-100 opacity-0 invisible translate-y-5 transition-all duration-500 ease-linear mix-blend-difference 
      data-[state=active]:opacity-100 data-[state=active]:visible data-[state=active]:translate-y-0
      "
    >
      <svg
        className="progress-circle svg-content w-full h-full"
        viewBox="-1 -1 102 102"
      >
        <path
          className="fill-none stroke-gray-300 stroke-4 box-border transition-all duration-10 ease-linear"
          ref={pathRef}
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
        />
      </svg>

      <FaChevronUp className="absolute  text-center text-sm m-3 font-bold text-gray-300 left-0 top-0 w-5 h-5 cursor-pointer block z-10 transition-all duration-500 ease-linear " />
    </div>
  );
};
export default scrollToTop;
