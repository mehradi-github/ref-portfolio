import React, { FC } from "react";
import Image from "next/image";
import useVisibilitySection from "@/hooks/useVisibilitySection";

interface P {
  sctionRef: React.LegacyRef<HTMLElement> | undefined;
}
const About: FC<P> = ({ sctionRef }) => {
  let reveal = useVisibilitySection(1);

  return (
    <section ref={sctionRef} id="about" className=" bg-indigo-600 text-white">
      <div className="container mx-auto overflow-hidden">
        <div className="  flex flex-col md:flex-row  items-center justify-center">
          <div
            data-effect={reveal}
            className="relative w-full h-full md:w-[30%] lg:w-[40%]  data-[effect=enter]:animate-[slideInLeft_1200ms_ease-in-out_1] data-[effect=reenter]:animate-[slideInLeft_1200ms_ease-in-out_1]"
          >
            <div className="absolute hidden lg:block lg:top-[23%] lg:right-[12%] xl:right-[35%] opacity-20 z-10  scale-150">
              <svg
                x="0px"
                y="0px"
                viewBox="0 0 288 288"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="100%"
                id="profile"
              >
                <defs>
                  <linearGradient
                    id="bg-gradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="1000%" style={{ stopColor: "#fff" }}></stop>
                    <stop
                      offset="0%"
                      style={{ stopColor: "transparent" }}
                    ></stop>
                  </linearGradient>
                </defs>
                <path fill="url(#bg-gradient)" d="">
                  <animate
                    repeatCount="indefinite"
                    attributeName="d"
                    dur="12s"
                    values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z; M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4 c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6 c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8 C48.9,198.6,57.8,191,51,171.3z; M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z"
                  />
                </path>
              </svg>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 grid-rows-1 md:grid-rows-3  p-5">
              <div className="lg:row-start-1 lg:col-start-2 hidden lg:inline-block ">
                <div className=" rounded-full border-gray-200 border-8 font-bold bg-indigo-700 w-44 h-44 text-center flex flex-col flex-wrap justify-center items-center  m-auto">
                  Senior Web Developer
                </div>
              </div>
              <div className="row-start-2 lg:col-start-3 lg:col-span-3 z-20">
                <div className="flex justify-center w-full pt-10 md:pt-0">
                  <Image
                    height={180}
                    width={180}
                    src="/assets/images/profile.jpg"
                    alt="profile"
                    className="rounded-full border-gray-200 border-8 "
                  />
                </div>
              </div>
              <div className="lg:row-start-3 lg:col-start-2 col-span-1 hidden lg:inline-block ">
                <div className="rounded-full border-gray-200 border-8 font-bold bg-indigo-700 w-32 h-32 text-center flex flex-col justify-center items-center  m-auto">
                  <div className="text-2xl pb-2 bt-0">8+ </div>
                  <div className="text-sm">Years Of Experience</div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-effect={reveal}
            className="relative data-[effect=reenter]:animate-[slideInRight_1200ms_ease-in-out_1] data-[effect=enter]:animate-[slideInRight_1200ms_ease-in-out_1] w-full p-5  pb-10 md:pb-5 md:w-[70%] lg:w-[60%] flex flex-col flex-wrap justify-center items-start mx-5 py-5"
          >
            <div className="text-2xl font-bold py-5"> About Me</div>
            <div className="text-left ">
              A Software Engineer and senior developer with 8+ years of
              professional software programming, proficiency in developing
              modular Cloud-based applications with React.js (Typescript),
              Redux, testable (TDD, E2E testing) and scalable (K8S) web
              solutions by living CI/CD culture. Able to work in a
              cross-functional Scrum team and bridge the gap between client
              needs and technology. A strong foundation in computer science and
              a wide range of experience in agile software development.
            </div>
            <div className=" my-10">
              <a
                className="w-auto h-auto px-10 py-3  rounded-xl border-white border-4"
                href="https://www.linkedin.com/in/mehradi"
                target="_blank"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
