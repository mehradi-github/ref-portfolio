import React, { FC, Fragment } from "react";
import SkillSlider from "./SkillSlider";

interface P {
  sctionRef: React.LegacyRef<HTMLElement> | undefined;
}
const Skills: FC<P> = ({ sctionRef }) => {
  return (
    <section ref={sctionRef} id="skills" className="min-h-screen">
      <SkillSlider />
    </section>
  );
};
export default Skills;
