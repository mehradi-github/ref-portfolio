import React, { FC, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ModalVideo from "react-modal-video";
import "node_modules/react-modal-video/scss/modal-video.scss";
import PortfolioItem from "./PortfolioItem";
interface P {
  sctionRef: React.LegacyRef<HTMLElement> | undefined;
}
const Portfolio: FC<P> = ({ sctionRef }) => {
  const [urlVideo, setUrlVideo] = useState("");
  return (
    <section ref={sctionRef} id="portfolio" className="min-h-screen pt-20">
      <ModalVideo
        channel="youtube"
        isOpen={urlVideo !== ""}
        videoId={urlVideo}
        onClose={() => setUrlVideo("")}
      />
      <div className="flex flex-col justify-center ">
        <h1 className="text-xl font-bold mx-auto w-full p-5 mb-10 text-center ">
          Recent projects
        </h1>
        <div className="container mx-auto">
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 900: 2 }}>
            <Masonry gutter="10px">
              {[
                {
                  title: "Profile",
                  description: "Next.js and TailwindCSS",
                  image: "profile.png",
                  height: 1216,
                  width: 664,
                  videoUrl: "L61p2uyiMSo",
                },
              ].map((v, i) => (
                <PortfolioItem
                  key={i}
                  title={v.title}
                  description={v.description}
                  image={v.image}
                  height={v.height}
                  width={v.width}
                  clickPlay={() => setUrlVideo(v.videoUrl)}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
