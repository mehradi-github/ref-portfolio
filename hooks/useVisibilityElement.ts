import { ProfileContext } from "@/context/context";
import { useEffect, useContext, useState, RefObject } from "react";

const useVisibilityElement = (ref: RefObject<HTMLElement>) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setCurrentPosition((window.innerHeight * 3) / 4 + window.scrollY);
  });

  useEffect(() => {
    const diff = currentPosition - ref.current!.offsetTop;
    setIsVisible(
      diff > 0 && diff < ref.current!.offsetHeight + window.innerHeight
    );
  }, [currentPosition]);

  return isVisible;
};
export default useVisibilityElement;
