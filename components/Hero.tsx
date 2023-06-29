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
import Typewriter from "react-typewriter-animate";
import "react-typewriter-animate/dist/Typewriter.css";

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
    <section
      ref={sctionRef}
      id="hero"
      className="min-h-screen flex align-middle"
    >
      <div className="container mx-auto flex flex-col items-center justify-center lg:mt-10 sm:pt-10 sm:pb-16">
        <h2 className="block text-base font-bold mt-4 lg:mt-0 text-center">
          Software Engineer <span className="text-indigo-600">&</span> Senior
          Developer
        </h2>
        <h1 className="block text-6xl md:text-8xl font-bold leading-loose my-4 md:my-16 text-center ">
          Sadiq <span className="text-indigo-600">Mehradi</span>
        </h1>
        <h3 className="text-base font-bold text-center pt-14">
          Skills: &nbsp;
          <span className="text-green-600">
            <Typewriter
              dataToRotate={[
                [{ type: "word", text: "Time management" }],
                [{ type: "word", text: "Communication" }],
                [{ type: "word", text: "Adaptability" }],
                [{ type: "word", text: "Problem-solving" }],
                [{ type: "word", text: "Teamwork" }],
                [{ type: "word", text: "Creativity" }],
                [{ type: "word", text: "Leadership" }],
                [{ type: "word", text: "Interpersonal skills" }],
                [{ type: "word", text: "Work ethic" }],
                [{ type: "word", text: "Attention to detail" }],
                [{ type: "word", text: "Active listening " }],
                [{ type: "word", text: "Patience" }],
                [{ type: "word", text: "Open-mindedness " }],
                [{ type: "word", text: "Adaptability" }],
                [{ type: "word", text: "Problem-solving" }],
                [{ type: "word", text: "Critical thinking" }],
                [{ type: "word", text: "Creativity " }],
                [{ type: "word", text: "Accountability" }],
                [{ type: "word", text: "Confidence" }],
                [{ type: "word", text: "Time and project management" }],
              ]}
              loop={true}
            />
          </span>
        </h3>
        <div className="w-auto flex flex-row items-center justify-center mt-14 z-30">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/mehradi-github"
            aria-label="Github"
            ref={fllowRefs[0]}
          >
            <IoLogoGithub className="text-4xl text-gray-800 dark:text-gray-100 mr-4" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/@s.mehradi"
            aria-label="Youtube"
            ref={fllowRefs[1]}
          >
            <IoLogoYoutube className="text-4xl text-gray-800 dark:text-gray-100 mr-4" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/s_mehradi"
            aria-label="Instagram"
            ref={fllowRefs[2]}
          >
            <IoLogoInstagram className="text-4xl text-gray-800 dark:text-gray-100 mr-4" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/mehradi"
            aria-label="Linkedin"
            ref={fllowRefs[3]}
          >
            <IoLogoLinkedin className="text-4xl text-gray-800 dark:text-gray-100 mr-4" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/mehradi_info"
            aria-label="Twitter"
            ref={fllowRefs[4]}
          >
            <IoLogoTwitter className="text-4xl text-gray-800 dark:text-gray-100 mr-4" />
          </a>
        </div>
      </div>
      <div className="-z-10 opacity-10 sm:opacity-20 md:opacity-50 lg:opacity-100 ">
        <Image
          width={75}
          height={75}
          src="/assets/images/reactjs-icon.svg"
          alt="reactjs"
          className="absolute  top-[15%] left-[33%]    animate-updown"
        />
        <Image
          width={75}
          height={75}
          src="/assets/images/redux.svg"
          alt="redux"
          className="absolute  top-[30%] left-[20%]  animate-updown"
        />
        <Image
          width={65}
          height={65}
          src="/assets/images/typescriptlang-icon.svg"
          alt="typescript"
          className="absolute  top-[15%] left-[5%]  animate-updown"
        />
        <Image
          width={75}
          height={75}
          src="/assets/images/tailwindcss.svg"
          alt="tailwindcss"
          className="absolute  top-[45%] left-[5%]   animate-updown"
        />
        <Image
          width={75}
          height={75}
          src="/assets/images/mongodb-icon-1.svg"
          alt="mongodb"
          className="absolute  top-[60%] left-[15%]   animate-updown"
        />

        <Image
          width={75}
          height={75}
          src="/assets/images/sass-1.svg"
          alt="sass"
          className="absolute top-[16%] right-[33%]  animate-updown"
        />
        <Image
          width={75}
          height={75}
          src="/assets/images/w3_html5-icon.svg"
          alt="html5"
          className="absolute top-[30%] right-[20%]  animate-updown"
        />
        <Image
          width={75}
          height={75}
          src="/assets/images/w3_css-official.svg"
          alt="css3"
          className="absolute top-[15%] right-[4%]  animate-updown"
        />
        <Image
          width={100}
          height={100}
          src="/assets/images/nodejs-1.svg"
          alt="nodejs"
          className="absolute top-[60%] right-[15%] animate-updown"
        />
        <Image
          width={50}
          height={50}
          src="/assets/images/logo-javascript.svg"
          alt="javascript"
          className="absolute top-[78%] right-[30%] animate-updown"
        />

        <Image
          width={60}
          height={60}
          src="/assets/images/graphql-logo-2.svg"
          alt="graphql"
          className="absolute  top-[60%] left-[48%]  animate-updown"
        />
        <Image
          width={150}
          height={150}
          src="/assets/images/jest-2.svg"
          alt="jest"
          className="absolute  top-[70%] right-[1%]  animate-updown"
        />
        <Image
          width={50}
          height={50}
          src="/assets/images/postgresql.svg"
          alt="postgresql"
          className="absolute top-[78%] left-[3%]   animate-updown"
        />

        <Image
          width={65}
          height={65}
          src="/assets/images/kubernetes-icon.svg"
          alt="kubernetes"
          className="absolute  top-[77%] left-[30%]  animate-updown"
        />

        <Image
          width={80}
          height={80}
          src="/assets/images/docker-icon.svg"
          alt="docker"
          className="absolute top-[88%] left-[15%] animate-updown"
        />
        <Image
          width={75}
          height={75}
          src="/assets/images/aws-2.svg"
          alt="aws"
          className="absolute top-[90%] right-[15%] animate-updown"
        />
        <Image
          width={60}
          height={60}
          src="/assets/images/scrum-1.svg"
          alt="scrum"
          className="absolute top-[45%] right-[3%]   animate-updown"
        />
      </div>

      <HeroParticle />
    </section>
  );
};
export default Hero;
