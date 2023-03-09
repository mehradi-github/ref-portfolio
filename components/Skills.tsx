import React, { FC } from "react";

interface P {
  sctionRef: React.LegacyRef<HTMLElement> | undefined;
}
const Skills: FC<P> = ({ sctionRef }) => {
  return (
    <section ref={sctionRef} id="skills" className="min-h-screen">
      Skills
    </section>
  );
};
export default Skills;
