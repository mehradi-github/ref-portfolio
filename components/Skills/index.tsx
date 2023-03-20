import React, { FC, Fragment } from "react";
import SkillSlider from "./SkillSlider";

interface P {
  sctionRef: React.LegacyRef<HTMLElement> | undefined;
}
const Skills: FC<P> = ({ sctionRef }) => {
  return (
    <section ref={sctionRef} id="skills" className="min-h-screen pt-20">
      <h1 className="text-xl font-bold mx-auto w-full p-5 mb-10 text-center ">
        Skills
      </h1>
      <SkillSlider />
    </section>
  );
};
export default Skills;
