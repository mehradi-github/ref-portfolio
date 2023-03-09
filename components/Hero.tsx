import React, { FC } from "react";
interface P {
  sctionRef: React.LegacyRef<HTMLElement> | undefined;
}
const Hero: FC<P> = ({ sctionRef }) => {
  return (
    <section ref={sctionRef} id="hero" className="min-h-screen bg-indigo-500">
      Hero
    </section>
  );
};
export default Hero;
