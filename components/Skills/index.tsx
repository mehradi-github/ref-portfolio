import React, { FC, Fragment } from "react";
import SkillCard from "./SkillCard";
import SkillSlider from "./SkillSlider";

interface P {
  sctionRef: React.LegacyRef<HTMLElement> | undefined;
}
const Skills: FC<P> = ({ sctionRef }) => {
  return (
    <section ref={sctionRef} id="skills" className="w-full p-5 pt-20">
      <h1 className="text-xl font-bold mx-auto w-full p-5 mb-10 text-center ">
        Skills
      </h1>
      <div className=" w-full h-auto mx-auto animate-[slideInLeft_1s_ease-in-out_1]">
        <div className=" flex flex-row justify-center items-start flex-wrap ">
          {[
            {
              title: "Scripts & Libraries",
              items: [
                "TypeScript",
                "JavaScript (ES)",
                "React.js",
                "Next.js",
                "Redux Toolkit",
                "RTK Query",
              ],
              percentage: 97,
              pathColor: "#aa6ffa",
            },
            {
              title: "Testings",
              items: [
                "Unit tests (TDD)",
                "Jest",
                "React Testing Library",
                "Mocha",
                "sinon-chai",
                "E2E testing (Cypress)",
              ],
              percentage: 95,
              pathColor: "#aa6ffa",
            },
            {
              title: "UI/UX",
              items: [
                "Sass",
                "TailwindCSS",
                "HTML5",
                "CSS3",
                "Storybook.js",
                "MUI, Bootstrap",
              ],
              percentage: 92,
              pathColor: "#aa6ffa",
            },
            {
              title: "APIs & Patterns",
              items: [
                "GraphQL",
                "REST APIs",
                "Node.js",
                "NestJS",
                "SOLID",
                "Design Patterns",
              ],
              percentage: 85,
              pathColor: "#aa6ffa",
            },
            {
              title: "CI/CD & Agile",
              items: [
                "Kubernetes",
                "Docker",
                "Git",
                "Jenkins",
                "Ansible (AWS)",
                "Agile (Scrum)",
              ],
              percentage: 78,
              pathColor: "#aa6ffa",
            },
          ].map((v, i) => (
            <SkillCard
              key={i}
              percentage={v.percentage}
              title={v.title}
              items={v.items}
              pathColor={v.pathColor}
            />
          ))}
        </div>
      </div>
      <SkillSlider />
    </section>
  );
};
export default Skills;
