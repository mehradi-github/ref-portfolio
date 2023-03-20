import React, { FC, Fragment } from "react";
import Progressbar from "./SkillCard";
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
      <div className=" w-full h-auto container mx-auto">
        <div className=" flex flex-row justify-center items-center flex-wrap ">
          {[
            { percentage: 60 },
            { percentage: 85 },
            { percentage: 95 },
            { percentage: 92 },
            { percentage: 57 },
          ].map((v, i) => (
            <Progressbar key={i} percentage={v.percentage} />
          ))}
        </div>
      </div>
      <SkillSlider />
    </section>
  );
};
export default Skills;
