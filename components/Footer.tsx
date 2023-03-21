import React, { FC } from "react";

interface P {
  sctionRef: React.LegacyRef<HTMLElement> | undefined;
}
const Footer: FC<P> = ({ sctionRef }) => {
  return (
    <section
      ref={sctionRef}
      id="contact"
      className="bg-[url('/assets/images/bg.svg')] bg-no-repeat bg-cover min-h-screen bg-gray-800"
    >
      <div className=""></div>
      <div className=" w-1/4 uppercase tracking-wider bg-gradient-to-r from-blue-400 to-pink-500  font-extrabold text-4xl text-white m-5 py-2 px-1 text-center ">
        Get in touch
      </div>
    </section>
  );
};
export default Footer;
