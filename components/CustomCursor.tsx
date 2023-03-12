import { ProfileContext } from "@/context/context";
import React, {
  FC,
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const CustomCursor: FC = () => {
  // const [cursorActive, setcursorActive] = useState(false);
  // const [cursorCoordinate, setCursorCoordinate] = useState({ x: 0, y: 0 });
  const [ctx, setCtx] = useContext(ProfileContext);
  const refCursorInner = useRef<HTMLDivElement>(null);
  const refCursorOuter = useRef<HTMLDivElement>(null);
  const CursorEffect = () => {
    if (document.body) {
      window.onmousemove = (e) => {
        refCursorOuter.current!.style.transform =
          "translate(" + e.clientX + "px, " + e.clientY + "px)";
        refCursorInner.current!.style.transform =
          "translate(" + e.clientX + "px, " + e.clientY + "px)";
      };
    }
  };

  // const cursorOver = (ref: RefObject<HTMLElement>) => {
  //   ref.current!.addEventListener("mouseenter", () => {
  //     console.log("mouseenter");
  //     refCursorOuter.current!.setAttribute("data-state", "active");
  //     refCursorInner.current!.setAttribute("data-state", "active");
  //   });
  //   ref.current!.addEventListener("mouseleave", () => {
  //     console.log("mouseleave");
  //     refCursorOuter.current!.setAttribute("data-state", "");
  //     refCursorInner.current!.setAttribute("data-state", "");
  //   });
  // };

  useEffect(() => {
    CursorEffect();
  }, []);

  return (
    <Fragment>
      <div
        data-state={ctx.cursorActive ? "active" : ""}
        ref={refCursorOuter}
        className="hidden md:block fixed left-0 top-0 pointer-events-none rounded-full translate-z-2  border-indigo-500 border-solid  border-2 box-border -ml-4 -mt-4 w-8 h-8 z-50 opacity-50 transition-all duration-75 ease-out data-[state=active]:opacity-0"
      />
      <div
        data-state={ctx.cursorActive ? "active" : ""}
        ref={refCursorInner}
        className="hidden md:block fixed left-0 top-0 pointer-events-none rounded-full translate-z-2  bg-indigo-500 -ml-1 -mt-1 w-2 h-2  z-50  transition-all duration-75  ease-in-out data-[state=active]:duration-300 data-[state=active]:-ml-10 data-[state=active]:-mt-10 data-[state=active]:w-20 data-[state=active]:h-20 data-[state=active]:opacity-30"
      />
    </Fragment>
  );
};

export default CustomCursor;
