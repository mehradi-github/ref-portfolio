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
      <div className="">
        <Image
          width={75}
          height={75}
          src="./assets/images/reactjs-icon.svg"
          alt="css3"
          className="absolute top-[100px] left-[430px] animate-updown"
        />
        <Image
          width={75}
          height={75}
          src="./assets/images/redux.svg"
          alt="css3"
          className="absolute top-[200px] left-[300px] animate-updown"
        />
        <Image
          width={65}
          height={65}
          src="./assets/images/typescriptlang-icon.svg"
          alt="css3"
          className="absolute top-[130px] left-[140px] animate-updown"
        />
        <Image
          width={75}
          height={75}
          src="./assets/images/tailwindcss.svg"
          alt="css3"
          className="absolute top-[300px] left-[80px] animate-updown"
        />

        <Image
          width={75}
          height={75}
          src="./assets/images/sass-1.svg"
          alt="css3"
          className="absolute top-[200px] left-[800px] animate-updown"
        />
        <Image
          width={75}
          height={75}
          src="./assets/images/w3_html5-icon.svg"
          alt="css3"
          className="absolute top-[250px] left-[1000px] animate-updown"
        />
        <Image
          width={75}
          height={75}
          src="./assets/images/w3_css-official.svg"
          alt="css3"
          className="absolute top-[120px] left-[930px] animate-updown"
        />
        <Image
          width={100}
          height={100}
          src="./assets/images/nodejs-1.svg"
          alt="css3"
          className="absolute top-[400px] left-[950px] animate-updown"
        />
        <Image
          width={50}
          height={50}
          src="./assets/images/logo-javascript.svg"
          alt="css3"
          className="absolute top-[500px] left-[850px] animate-updown"
        />

        <Image
          width={60}
          height={60}
          src="./assets/images/graphql-logo-2.svg"
          alt="css3"
          className="absolute top-[450px] left-[300px]  animate-updown"
        />
        <Image
          width={150}
          height={150}
          src="./assets/images/jest-2.svg"
          alt="css3"
          className="absolute top-[450px] left-[1000px] animate-updown"
        />

        <Image
          width={65}
          height={65}
          src="./assets/images/kubernetes-icon.svg"
          alt="css3"
          className="absolute top-[400px] left-[160px] animate-updown"
        />

        <Image
          width={80}
          height={80}
          src="./assets/images/docker-icon.svg"
          alt="css3"
          className="absolute  top-[570px] left-[200px]  animate-updown"
        />
        <Image
          width={75}
          height={75}
          src="./assets/images/aws-2.svg"
          alt="css3"
          className="absolute top-[570px] left-[950px] animate-updown"
        />
        <Image
          width={60}
          height={60}
          src="./assets/images/scrum-1.svg"
          alt="css3"
          className="absolute  top-[500px] left-[75px] animate-updown"
        />
      </div>

      <HeroParticle />
    </section>
  );
};
export default Hero;
