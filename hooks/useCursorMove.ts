import { useState, useEffect } from "react";

const useCursorMove = () => {
  const [cursorCoordinate, setCursorCoordinate] = useState({
    x: "0px",
    y: "0px",
  });
  useEffect(() => {
    const handleCursorMove = (e: MouseEvent) => {
      setCursorCoordinate({ x: e.clientX + "px", y: e.clientY + "px" });
    };
    window.addEventListener("mousemove", handleCursorMove);
    return () => {
      window.removeEventListener("mousemove", handleCursorMove);
    };
  }, []);
  console.log("mousemove", cursorCoordinate);
  return cursorCoordinate;
};
export default useCursorMove;
