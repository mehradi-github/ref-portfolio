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
      <div className="container mx-auto flex flex-col items-center justify-center lg:mt-10 sm:pt-5 sm:pb-16">
        <p className="block text-base font-bold mt-4 lg:mt-0">
          Hello, My name is
        </p>
        <h1 className="block text-6xl md:text-8xl font-bold leading-loose my-4 md:my-16 ">
          Sadiq <span className="text-indigo-600">Mehradi</span>
        </h1>
        <h2 className="text-xl font-semibold">
          Software Engineer and Senior Frontend Developer
        </h2>
        <div className="w-auto flex flex-row items-center justify-center mt-24 z-50">
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
          className="absolute top-[100px] left-[430px] animate-updown"
        />
        <Image
          width={75}
          height={75}
          src="./assets/images/redux.svg"
          alt="redux"
          className="absolute top-[200px] left-[300px] animate-updown"
        />
        <Image
          width={65}
          height={65}
          src="./assets/images/typescriptlang-icon.svg"
          alt="typescript"
          className="absolute top-[130px] left-[140px] animate-updown"
        />
        <Image
          width={75}
          height={75}
          src="./assets/images/tailwindcss.svg"
          alt="tailwindcss"
          className="absolute top-[300px] left-[80px] animate-updown"
        />

        <Image
          width={75}
          height={75}
          src="./assets/images/sass-1.svg"
          alt="sass"
          className="absolute top-[200px] left-[800px] animate-updown"
        />
        <Image
          width={75}
          height={75}
          src="./assets/images/w3_html5-icon.svg"
          alt="html5"
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
          alt="nodejs"
          className="absolute top-[400px] left-[950px] animate-updown"
        />
        <Image
          width={50}
          height={50}
          src="./assets/images/logo-javascript.svg"
          alt="javascript"
          className="absolute top-[500px] left-[850px] animate-updown"
        />

        <Image
          width={60}
          height={60}
          src="./assets/images/graphql-logo-2.svg"
          alt="graphql"
          className="absolute top-[450px] left-[300px]  animate-updown"
        />
        <Image
          width={150}
          height={150}
          src="./assets/images/jest-2.svg"
          alt="jest"
          className="absolute top-[450px] left-[1000px] animate-updown"
        />

        <Image
          width={65}
          height={65}
          src="./assets/images/kubernetes-icon.svg"
          alt="kubernetes"
          className="absolute top-[400px] left-[160px] animate-updown"
        />

        <Image
          width={80}
          height={80}
          src="./assets/images/docker-icon.svg"
          alt="docker"
          className="absolute  top-[570px] left-[200px]  animate-updown"
        />
        <Image
          width={75}
          height={75}
          src="./assets/images/aws-2.svg"
          alt="aws"
          className="absolute top-[570px] left-[950px] animate-updown"
        />
        <Image
          width={60}
          height={60}
          src="./assets/images/scrum-1.svg"
          alt="scrum"
          className="absolute  top-[500px] left-[75px] animate-updown"
        />
      </div>

      <HeroParticle />
    </section>
  );
};
export default Hero;
