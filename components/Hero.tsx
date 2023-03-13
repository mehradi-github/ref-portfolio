import React, { FC } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import HeroParticle from "./HeroParticle";

interface P {
  sctionRef: React.LegacyRef<HTMLElement> | undefined;
}
const Hero: FC<P> = ({ sctionRef }) => {
  return (
    <section ref={sctionRef} id="hero" className="min-h-screen">
      <div>
        loremVeniam do labore id in proident tempor duis non. Occaecat commodo
        dolor tempor eiusmod dolore. Occaecat sit consectetur irure deserunt
        excepteur minim. Deserunt dolore sit Lorem minim ullamco qui dolore quis
        ad consequat ullamco quis minim do. Non duis fugiat occaecat
        reprehenderit laboris amet officia non culpa irure deserunt. Voluptate
        deserunt nulla consectetur laborum ad eiusmod est. Aliqua qui
        consectetur ea incididunt enim. Qui laborum adipisicing labore cillum eu
        eu non. Irure Lorem dolor ex culpa proident ex irure. Sint quis mollit
        cupidatat irure proident duis occaecat labore exercitation eu. Elit sunt
        aliquip duis mollit. Sint sit adipisicing tempor consequat reprehenderit
        consectetur Lorem voluptate laborum proident id fugiat nostrud. Aliquip
        elit magna dolore eu proident dolore do. Nisi do ex nulla esse ut amet
        consequat laboris amet ullamco anim. Dolor Lorem cillum laborum
        consectetur non consequat nisi duis irure anim non. Proident cillum
        tempor culpa ut sunt voluptate eiusmod minim consequat adipisicing.
        Dolore commodo elit eiusmod dolor officia ad in reprehenderit labore ut
        laborum. Cupidatat aute non labore proident Lorem nisi est ipsum quis
        ex. Amet ullamco in pariatur eu officia dolor. Fugiat aliquip id culpa
        minim consequat tempor eiusmod elit sit pariatur. Minim cupidatat qui
        anim exercitation ipsum eiusmod. Labore nostrud ex qui officia id elit
        aute commodo elit proident duis velit eu.
      </div>
      <HeroParticle />
    </section>
  );
};
export default Hero;
