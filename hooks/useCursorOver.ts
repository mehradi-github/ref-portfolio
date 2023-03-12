import { ProfileContext } from "@/context/context";
import { useState, useEffect, RefObject, useContext } from "react";

const useCursorOver = (refs: RefObject<HTMLDivElement>[]) => {
  const [ctx, setCtx] = useContext(ProfileContext);
  useEffect(() => {
    const handleCursorOver = (e: MouseEvent) => {
      setCtx({ ...ctx, cursorActive: !ctx.cursorActive });
    };
    refs.map((ref) => {
      ref.current!.addEventListener("mouseenter", handleCursorOver);
      ref.current!.addEventListener("mouseleave", handleCursorOver);
    });
    return () => {
      refs.map((ref) => {
        ref.current!.removeEventListener("mouseenter", handleCursorOver);
        ref.current!.removeEventListener("mouseleave", handleCursorOver);
      });
    };
  }, []);
};
export default useCursorOver;
