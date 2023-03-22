import React, { FC } from "react";
import { Londrina_Outline } from "next/font/google";
import {
  IoMailSharp,
  IoLogoSkype,
  IoLogoLinkedin,
  IoLogoXing,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoInstagram,
} from "react-icons/io5";
import { BsTelegram, BsDiscord } from "react-icons/bs";
import { VscLaw } from "react-icons/vsc";

const Londrina = Londrina_Outline({ weight: "400", subsets: ["latin"] });
interface P {
  sctionRef: React.LegacyRef<HTMLElement> | undefined;
}
const Footer: FC<P> = ({ sctionRef }) => {
  return (
    <section
      ref={sctionRef}
      id="contact"
      className="bg-[url('/assets/images/bg.svg')] bg-no-repeat bg-cover  bg-gray-800 
      text-white
      "
    >
      <div className="flex flex-row justify-center items-start pt-14">
        <div className="w-1/3 uppercase text-4xl tracking-wider  p-5 self-center">
          <h1 className="w-10/12 bg-gradient-to-r from-blue-400 to-pink-500  font-extrabold mb-0 py-2 px-1 text-center ">
            Get in touch
          </h1>
          <div className={`${Londrina.className}  mt-0`}>and follow me</div>
        </div>
        <div className="w-1/3">
          <h2 className="">Contact Me</h2>
          <div className="pt-5">
            <ul>
              <li className="flex flex-row items-center justify-start mt-5">
                <IoLogoSkype className="text-2xl text-white mr-2" />{" "}
                Skype:&nbsp;
                <a href="https://join.skype.com/invite/Je4MWRIGs9Nf">
                  mehradi.skype
                </a>
              </li>
              <li className="flex flex-row items-center justify-start mt-5">
                <BsTelegram className="text-2xl text-white mr-2" />{" "}
                Telegram:&nbsp;
                <a href="https://t.me/smehradi">smehradi</a>
              </li>
              <li className="flex flex-row items-center justify-start mt-5">
                <IoMailSharp className="text-2xl text-white mr-2" />{" "}
                Email:&nbsp;
                <a href="mailto:mehradi.jobs@gmail.com">
                  mehradi.jobs@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/3">
          <h2 className="">Follow Me</h2>
          <div className="flex flex-row items-center justify-start mt-10 text-4xl text-white">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/mehradi-github"
              aria-label="Github"
            >
              <IoLogoGithub className=" mr-4" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/@devtv2404"
              aria-label="Youtube"
            >
              <IoLogoYoutube className=" mr-4" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/s_mehradi"
              aria-label="Instagram"
            >
              <IoLogoInstagram className=" mr-4" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/mehradi"
              aria-label="Linkedin"
            >
              <IoLogoLinkedin className=" mr-4" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.xing.com/profile/Sadiq_Mehradi"
              aria-label="Xing"
            >
              <IoLogoXing className=" mr-4" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/mehradi_info"
              aria-label="Twitter"
            >
              <IoLogoTwitter className=" mr-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full p-5">
        <div className="w-full border-t-[1px] border-gray-50 mt-10 border-solid"></div>

        <div className="flex flex-row items-center justify-center text-white text-sm pt-5">
          <VscLaw className="text-lg mx-2" /> MIT license, designed by &nbsp;
          <a className="text-blue-400" href="https://github.com/mehradi-github">
            Sadiq Mehradi.
          </a>
        </div>
      </div>
    </section>
  );
};
export default Footer;
