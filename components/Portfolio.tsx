import React, { FC } from "react";

interface P {
  sctionRef: React.LegacyRef<HTMLElement> | undefined;
}
const Portfolio: FC<P> = ({ sctionRef }) => {
  return (
    <section ref={sctionRef} id="portfolio" className="min-h-screen ">
      Recent Projects
    </section>
  );
};
export default Portfolio;
