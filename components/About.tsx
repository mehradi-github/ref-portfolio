import React, { FC } from "react";

interface P {
  sctionRef: React.LegacyRef<HTMLElement> | undefined;
}
const About: FC<P> = ({ sctionRef }) => {
  return (
    <section ref={sctionRef} id="about" className="min-h-screen ">
      About Me
    </section>
  );
};
export default About;
