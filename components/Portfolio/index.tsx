import React, { FC, useState } from "react";
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
          <div className="grid  sm:grid-cols-1   md:grid-cols-2 p-10 gap-5">
            {[
              {
                title: "Profile",
                description: "TypeScript, Next.js and TailwindCSS",
                image: "profile.png",
                height: 765,
                width: 418,
                videoUrl: "gj5Kp95PdGM",
              },
              {
                title: "Mappay",
                description: "React.js, Redux, Sass",
                image: "mappay.png",
                height: 765,
                width: 418,
                videoUrl: "3CzisFnX5Cw",
              },
              {
                title: "Evisa Express",
                description: "JavaScript, Html5, CSS3",
                image: "evisa-express.png",
                height: 765,
                width: 418,
                videoUrl: "_W92Cbh-eM8",
              },
              {
                title: "Bazarzoom Dashboard",
                description: "TypeScript, React.js and Sass",
                image: "bazarzoom-dashboard.png",
                height: 765,
                width: 418,
                videoUrl: "wjShqD4U3K0",
              },
              {
                title: "BazarZoom",
                description: "TypeScript, Next.js and TailwindCSS",
                image: "bazarzoom.png",
                height: 765,
                width: 418,
                videoUrl: "KfIJ3w6yMCg",
              },
              {
                title: "MFA Bot",
                description: "JavaScript, Selenium",
                image: "mfa.png",
                height: 765,
                width: 418,
                videoUrl: "xoVrOq1eFvs",
              },
              {
                title: "SigmaSaham Bot",
                description: "JavaScript, Cypress",
                image: "sigmasaham.png",
                height: 765,
                width: 418,
                videoUrl: "E6JrCLPrWMg",
              },
              {
                title: "Real Estate",
                description: "React.js, TailwindCSS, Html5, CSS3",
                image: "real-estate.png",
                height: 765,
                width: 418,
                videoUrl: "PquUmdXax2I",
              },
              {
                title: "Sampna",
                description: "JavaScript, JWT, Sass, Html5, CSS3",
                image: "sampna.png",
                height: 765,
                width: 418,
                videoUrl: "LMASHrhCDU0",
              },
              {
                title: "Quran V1",
                description: "React.js, Redux, MUI, Html5, CSS3",
                image: "fa-quran-v1.png",
                height: 765,
                width: 418,
                videoUrl: "EIqaO0vEddc",
              },
              {
                title: "Spot",
                description: "JavaScript, Sass, Html5, CSS3",
                image: "spot.png",
                height: 765,
                width: 418,
                videoUrl: "NO1NqAnJmEA",
              },
              {
                title: "Mailchi",
                description: "JavaScript, Sass, Html5, CSS3",
                image: "mailchi.png",
                height: 765,
                width: 418,
                videoUrl: "KUIqmm4Fq_s",
              },
              {
                title: "Wide",
                description: "JavaScript, Sass, Html5, CSS3",
                image: "wide.png",
                height: 765,
                width: 418,
                videoUrl: "H_2jWzwvUTQ",
              },
            ].map((v, i) => (
              <PortfolioItem
                key={i}
                itemKey={i}
                title={v.title}
                description={v.description}
                image={v.image}
                height={v.height}
                width={v.width}
                clickPlay={() => setUrlVideo(v.videoUrl)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
