import React, { FC } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine, ISourceOptions } from "tsparticles-engine";

const HeroParticle: FC = () => {
  const particlesOptions: ISourceOptions = {
    fullScreen: false,
    particles: {
      number: { value: 40, density: { enable: true, value_area: 800 } },
      color: { value: ["#ff5e57", "#409fff", "#50E3C2", "#E86363"] },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0,
          sync: false,
        },
      },
      size: {
        value: 8,
        random: true,
        anim: {
          enable: false,
          speed: 4,
          size_min: 0.3,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 7,
        direction: "top",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 600 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "bubble" },
        onclick: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
        repulse: { distance: 400, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  };
  return (
    <Particles
      className="absolute w-full h-full top-20 left-0 "
      id="hero-particle"
      init={async (engine: Engine) => await loadFull(engine)}
      options={particlesOptions}
    />
  );
};
export default HeroParticle;
