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
      Get In Touch
    </section>
  );
};
export default Footer;
