import { ProfileContext } from "@/context/context";
import { useEffect, RefObject, useContext } from "react";

const useCursorOver = (refs: RefObject<HTMLElement>[]) => {
  const [ctx, setCtx] = useContext(ProfileContext);
  useEffect(() => {
    const handleCursorEnter = (e: MouseEvent) => {
      setCtx!({ ...ctx, cursorActive: true });
      console.log("enter");
    };
    const handleCursorLeave = (e: MouseEvent) => {
      setCtx!({ ...ctx, cursorActive: false });
      console.log("leave");
    };
    refs.map((ref) => {
      ref.current?.addEventListener("mouseenter", handleCursorEnter);
      ref.current?.addEventListener("mouseleave", handleCursorLeave);
    });
    return () => {
      refs.map((ref) => {
        ref.current?.removeEventListener("mouseenter", handleCursorEnter);
        ref.current?.removeEventListener("mouseleave", handleCursorLeave);
      });
    };
  }, []);
};
export default useCursorOver;
