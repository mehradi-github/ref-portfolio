import React, { FC } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
interface P {
  sctionRef: React.LegacyRef<HTMLElement> | undefined;
}
const Portfolio: FC<P> = ({ sctionRef }) => {
  return (
    <section ref={sctionRef} id="portfolio" className="min-h-screen pt-20">
      <div className="flex flex-col justify-center ">
        <h1 className="text-xl font-bold mx-auto w-full p-5 mb-10 text-center ">
          Recent projects
        </h1>
        <div className="container mx-auto">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="10px">
              <div className="w-60 h-80 border-4 border-gray-300 ">A </div>
              <div className="w-60 h-60 border-4 border-gray-300 ">B </div>
              <div className="w-60 h-40 border-4 border-gray-300 ">Y </div>
              <div className="w-60 h-60 border-4 border-gray-300 ">Z </div>
              <div className="w-60 h-80 border-4 border-gray-300 ">A1 </div>
              <div className="w-60 h-60 border-4 border-gray-300 ">B1 </div>
              <div className="w-60 h-40 border-4 border-gray-300 ">Y1 </div>
              <div className="w-60 h-60 border-4 border-gray-300 ">Z1</div>
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
