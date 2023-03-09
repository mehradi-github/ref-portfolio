import React, { FC } from "react";

interface P {
  sctionRef: React.LegacyRef<HTMLElement> | undefined;
}
const Portfolio: FC<P> = ({ sctionRef }) => {
  return (
    <section
      ref={sctionRef}
      id="portfolio"
      className="min-h-screen bg-indigo-500"
    >
      Recent Projects
    </section>
  );
};
export default Portfolio;
