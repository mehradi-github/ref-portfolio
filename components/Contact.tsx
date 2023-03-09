import React, { FC } from "react";

interface P {
  sctionRef: React.LegacyRef<HTMLElement> | undefined;
}
const Contact: FC<P> = ({ sctionRef }) => {
  return (
    <section ref={sctionRef} id="contact" className="min-h-screen bg-gray-800">
      Get In Touch
    </section>
  );
};
export default Contact;
