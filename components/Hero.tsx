import React, { FC } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import HeroParticle from "./HeroParticle";

interface P {
  sctionRef: React.LegacyRef<HTMLElement> | undefined;
}
const Hero: FC<P> = ({ sctionRef }) => {
  return (
    <section ref={sctionRef} id="hero" className="min-h-screen">
      <div className="container mx-auto flex sm:flex-col items-center justify-center lg:mt-10 only-md:mt-10 sm:pt-24 sm:pb-16">
        <p className="block text-base font-bold">Hello, My name is</p>
        <h1 className="block text-8xl font-bold font-poppins">Sadiq Mehradi</h1>
        <h2>Software Engineer and Senior Frontend Developer</h2>
      </div>
      {/* <HeroParticle /> */}
    </section>
  );
};
export default Hero;
