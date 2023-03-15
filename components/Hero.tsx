import React, { FC, useRef } from "react";
import HeroParticle from "./HeroParticle";
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoInstagram,
} from "react-icons/io5";
import Image from "next/image";
import useCursorOver from "@/hooks/useCursorOver";

interface P {
  sctionRef: React.LegacyRef<HTMLElement> | undefined;
}
const Hero: FC<P> = ({ sctionRef }) => {
  const fllowRefs: React.RefObject<HTMLAnchorElement>[] = [
    useRef<HTMLAnchorElement>(null),
    useRef<HTMLAnchorElement>(null),
    useRef<HTMLAnchorElement>(null),
    useRef<HTMLAnchorElement>(null),
    useRef<HTMLAnchorElement>(null),
  ];

  useCursorOver(fllowRefs);

  return (
    <section ref={sctionRef} id="hero" className="min-h-screen">
      <div className="container mx-auto flex flex-col items-center justify-center lg:mt-10 sm:pt-10 sm:pb-16">
        <p className="block text-base font-bold mt-4 lg:mt-0 text-center">
          Hello, My name is
        </p>
        <h1 className="block text-6xl md:text-8xl font-bold leading-loose my-4 md:my-16 text-center ">
          Sadiq <span className="text-indigo-600">Mehradi</span>
        </h1>
        <h2 className="text-xl font-semibold text-center">
          Software Engineer and Senior Frontend Developer
        </h2>
        <div className="w-auto flex flex-row items-center justify-center mt-24 z-30">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            aria-label="Github"
            ref={fllowRefs[0]}
          >
            <IoLogoGithub className="text-4xl text-gray-800 dark:text-gray-100 mr-4" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            aria-label="Youtube"
            ref={fllowRefs[1]}
          >
            <IoLogoYoutube className="text-4xl text-gray-800 dark:text-gray-100 mr-4" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            aria-label="Instagram"
            ref={fllowRefs[2]}
          >
            <IoLogoInstagram className="text-4xl text-gray-800 dark:text-gray-100 mr-4" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            aria-label="Linkedin"
            ref={fllowRefs[3]}
          >
            <IoLogoLinkedin className="text-4xl text-gray-800 dark:text-gray-100 mr-4" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            aria-label="Twitter"
            ref={fllowRefs[4]}
          >
            <IoLogoTwitter className="text-4xl text-gray-800 dark:text-gray-100 mr-4" />
          </a>
        </div>
      </div>
      <div className="">
        <Image
          width={75}
          height={75}
          src="./assets/images/reactjs-icon.svg"
          alt="reactjs"
          className="absolute hidden sm:block sm:top-[120px] sm:left-[450px]  md:top-[170px] md:left-[420px] lg:top-[80px] lg:left-[450px]   xl:top-[90px] xl:left-[470px]   animate-updown"
        />
        <Image
          width={75}
          height={75}
          src="./assets/images/redux.svg"
          alt="redux"
          className="absolute hidden lg:block lg:top-[180px] lg:left-[300px] xl:top-[180px] xl:left-[330px] animate-updown"
        />
        <Image
          width={65}
          height={65}
          src="./assets/images/typescriptlang-icon.svg"
          alt="typescript"
          className="absolute hidden sm:block sm:top-[120px] sm:left-[140px] md:top-[100px] md:left-[180px] lg:top-[130px] lg:left-[140px] xl:top-[100px] xl:left-[150px] animate-updown"
        />
        <Image
          width={75}
          height={75}
          src="./assets/images/tailwindcss.svg"
          alt="tailwindcss"
          className="absolute hidden xl:block xl:top-[250px] xl:left-[80px]  animate-updown"
        />

        <Image
          width={75}
          height={75}
          src="./assets/images/sass-1.svg"
          alt="sass"
          className="absolute hidden sm:block sm:top-[360px] sm:left-[310px]  md:top-[420px] md:left-[600px]  lg:top-[200px] lg:left-[700px] xl:top-[200px] xl:left-[800px] animate-updown"
        />
        <Image
          width={75}
          height={75}
          src="./assets/images/w3_html5-icon.svg"
          alt="html5"
          className="absolute hidden md:block md:top-[120px] md:left-[630px] lg:top-[170px] lg:left-[900px] xl:top-[200px] xl:left-[1100px]  animate-updown"
        />
        <Image
          width={75}
          height={75}
          src="./assets/images/w3_css-official.svg"
          alt="css3"
          className="absolute hidden lg:block lg:top-[90px] lg:left-[770px] xl:top-[90px] xl:left-[930px] animate-updown"
        />
        <Image
          width={100}
          height={100}
          src="./assets/images/nodejs-1.svg"
          alt="nodejs"
          className="absolute hidden lg:block lg:top-[360px] lg:left-[850px] xl:top-[350px] xl:left-[900px] animate-updown"
        />
        <Image
          width={50}
          height={50}
          src="./assets/images/logo-javascript.svg"
          alt="javascript"
          className="absolute hidden xl:block xl:top-[450px] xl:left-[750px] animate-updown"
        />

        <Image
          width={60}
          height={60}
          src="./assets/images/graphql-logo-2.svg"
          alt="graphql"
          className="absolute hidden lg:block lg:top-[450px] lg:left-[700px]  xl:top-[450px] xl:left-[450px]  animate-updown"
        />
        <Image
          width={150}
          height={150}
          src="./assets/images/jest-2.svg"
          alt="jest"
          className="absolute hidden xl:block  xl:top-[430px] xl:left-[1100px] animate-updown"
        />

        <Image
          width={65}
          height={65}
          src="./assets/images/kubernetes-icon.svg"
          alt="kubernetes"
          className="absolute hidden lg:block lg:top-[350px] lg:left-[200px] xl:top-[350px] xl:left-[250px] animate-updown"
        />

        <Image
          width={80}
          height={80}
          src="./assets/images/docker-icon.svg"
          alt="docker"
          className="absolute hidden md:block md:top-[420px] md:left-[200px] lg:top-[450px] lg:left-[350px]  xl:top-[570px] xl:left-[200px]  animate-updown"
        />
        <Image
          width={75}
          height={75}
          src="./assets/images/aws-2.svg"
          alt="aws"
          className="absolute hidden xl:block xl:top-[570px] xl:left-[950px] animate-updown"
        />
        <Image
          width={60}
          height={60}
          src="./assets/images/scrum-1.svg"
          alt="scrum"
          className="absolute hidden xl:block  xl:top-[450px] xl:left-[75px] animate-updown"
        />
      </div>

      <HeroParticle />
    </section>
  );
};
export default Hero;
