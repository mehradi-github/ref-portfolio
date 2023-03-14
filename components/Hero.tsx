import React, { FC } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import HeroParticle from "./HeroParticle";
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoInstagram,
} from "react-icons/io5";
import Image from "next/image";
interface P {
  sctionRef: React.LegacyRef<HTMLElement> | undefined;
}
const Hero: FC<P> = ({ sctionRef }) => {
  return (
    <section ref={sctionRef} id="hero" className="min-h-screen">
      <div className="container mx-auto flex flex-col items-center justify-center lg:mt-10 only-md:mt-10 sm:pt-24 sm:pb-16">
        <p className="block text-base font-bold mt-4 lg:mt-0">
          Hello, My name is
        </p>
        <h1 className="block text-6xl md:text-8xl font-bold leading-loose my-4 md:my-16 ">
          Sadiq <span className="text-indigo-600">Mehradi</span>
        </h1>
        <h2 className="text-xl font-semibold">
          Software Engineer and Senior Frontend Developer
        </h2>
        <div className="w-auto flex flex-row items-center justify-center mt-24">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            aria-label="Github"
          >
            <IoLogoGithub className="text-4xl text-gray-800 mr-4" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            aria-label="Youtube"
          >
            <IoLogoYoutube className="text-4xl text-gray-800 mr-4" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            aria-label="Instagram"
          >
            <IoLogoInstagram className="text-4xl text-gray-800 mr-4" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            aria-label="Linkedin"
          >
            <IoLogoLinkedin className="text-4xl text-gray-800 mr-4" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            aria-label="Twitter"
          >
            <IoLogoTwitter className="text-4xl text-gray-800 mr-4" />
          </a>
        </div>
      </div>
      <span className="absolute top-[150px] left-[100px] animate-updown">
        <Image
          width={75}
          height={75}
          src="./assets/images/w3_css-official.svg"
          alt="css3"
        />
      </span>

      <HeroParticle />
    </section>
  );
};
export default Hero;
