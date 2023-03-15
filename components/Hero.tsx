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
        <p className="block text-base font-bold mt-4 lg:mt-0">
          Hello, My name is
        </p>
        <h1 className="block text-6xl md:text-8xl font-bold leading-loose my-4 md:my-16 ">
          Sadiq <span className="text-indigo-600">Mehradi</span>
        </h1>
        <h2 className="text-xl font-semibold">
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
          className="absolute hidden md:block md:top-[100px] md:left-[230px] lg:top-[100px] lg:left-[430px]   animate-updown"
        />
        <Image
          width={75}
          height={75}
          src="./assets/images/redux.svg"
          alt="redux"
          className="absolute hidden md:block md:top-[170px] md:left-[150px] lg:top-[200px] lg:left-[300px] animate-updown"
        />
        <Image
          width={65}
          height={65}
          src="./assets/images/typescriptlang-icon.svg"
          alt="typescript"
          className="absolute hidden md:block md:top-[100px] md:left-[60px] lg:top-[130px] lg:left-[140px] animate-updown"
        />
        <Image
          width={75}
          height={75}
          src="./assets/images/tailwindcss.svg"
          alt="tailwindcss"
          className="absolute hidden md:block md:top-[310px] md:left-[20px] lg:top-[300px] lg:left-[80px] animate-updown"
        />

        <Image
          width={75}
          height={75}
          src="./assets/images/sass-1.svg"
          alt="sass"
          className="absolute hidden md:block md:top-[170px] md:left-[420px] lg:top-[200px] lg:left-[800px] animate-updown"
        />
        <Image
          width={75}
          height={75}
          src="./assets/images/w3_html5-icon.svg"
          alt="html5"
          className="absolute hidden md:block md:top-[80px] md:left-[500px] lg:top-[250px] lg:left-[1000px] animate-updown"
        />
        <Image
          width={75}
          height={75}
          src="./assets/images/w3_css-official.svg"
          alt="css3"
          className="absolute hidden md:block md:top-[120px] md:left-[630px] lg:top-[120px] lg:left-[930px] animate-updown"
        />
        <Image
          width={100}
          height={100}
          src="./assets/images/nodejs-1.svg"
          alt="nodejs"
          className="absolute hidden md:block md:top-[420px] md:left-[450px] lg:top-[400px] lg:left-[950px] animate-updown"
        />
        <Image
          width={50}
          height={50}
          src="./assets/images/logo-javascript.svg"
          alt="javascript"
          className="absolute hidden md:block md:top-[330px] md:left-[550px] lg:top-[500px] lg:left-[850px] animate-updown"
        />

        <Image
          width={60}
          height={60}
          src="./assets/images/graphql-logo-2.svg"
          alt="graphql"
          className="absolute hidden md:block md:top-[310px] md:left-[320px]  lg:top-[450px] lg:left-[300px]  animate-updown"
        />
        <Image
          width={150}
          height={150}
          src="./assets/images/jest-2.svg"
          alt="jest"
          className="absolute hidden md:block md:top-[350px] md:left-[630px] lg:top-[450px] lg:left-[1000px] animate-updown"
        />

        <Image
          width={65}
          height={65}
          src="./assets/images/kubernetes-icon.svg"
          alt="kubernetes"
          className="absolute hidden md:block md:top-[420px] md:left-[200px] lg:top-[400px] lg:left-[160px] animate-updown"
        />

        <Image
          width={80}
          height={80}
          src="./assets/images/docker-icon.svg"
          alt="docker"
          className="absolute hidden md:block md:top-[500px] md:left-[100px]  lg:top-[570px] lg:left-[200px]  animate-updown"
        />
        <Image
          width={75}
          height={75}
          src="./assets/images/aws-2.svg"
          alt="aws"
          className="absolute hidden md:block md:top-[500px] md:left-[630px] lg:top-[570px] lg:left-[950px] animate-updown"
        />
        <Image
          width={60}
          height={60}
          src="./assets/images/scrum-1.svg"
          alt="scrum"
          className="absolute hidden md:block  md:top-[400px] md:left-[45px] lg:top-[500px] lg:left-[75px] animate-updown"
        />
      </div>

      <HeroParticle />
    </section>
  );
};
export default Hero;
