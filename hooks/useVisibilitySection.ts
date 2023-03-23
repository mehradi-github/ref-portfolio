import { ProfileContext } from "@/context/context";
import { useEffect, useContext, useState } from "react";

const useVisibilitySection = (index: number) => {
  const [ctx] = useContext(ProfileContext);
  const [state, setState] = useState("");

  useEffect(() => {
    // if (ctx.currentSection === index) {
    //   console.log("ok");
    //   setState((current) => (current === "" ? "enter" : "reenter"));
    // } else {
    //   console.log("no");
    //   setState("exit");
    // }
    if (ctx.currentSection === index) {
      setState((current) => (current === "" ? "enter" : "reenter"));
    } else {
      setState((current) => (current === "" ? "" : "exit"));
    }
    console.log(ctx.currentSection, state, index);
  }, [ctx.currentSection]);
  return state;
};
export default useVisibilitySection;
