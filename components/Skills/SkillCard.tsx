import useVisibilitySection from "@/hooks/useVisibilitySection";
import React, { FC, useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar/";
import "react-circular-progressbar/dist/styles.css";
// import VisibilitySensor from "react-visibility-sensor";
interface P {
  title: string;
  items: string[];
  percentage: number;
  pathColor?: string;
}
const SkillCard: FC<P> = ({ title, items, percentage, pathColor }) => {
  const [present, setPresent] = useState(0);
  let reveal = useVisibilitySection(3);
  useEffect(() => {
    setPresent(reveal === "exit" ? 0 : percentage);
  }, [reveal]);
  return (
    <div className="flex flex-col justify-center items-start w-full sm:w-5/12 lg:w-3/12 xl:w-2/12  h-full border-[1px] border-solid border-gray-300 shadow-xl m-2">
      <div className="mb-5 mt-10 self-center w-1/3 sm:w-2/3 only-md:w-1/3 h-auto">
        <CircularProgressbar
          value={present}
          text={`${present}%`}
          strokeWidth={5}
          styles={buildStyles({
            rotation: 0,
            textSize: "20px",
            pathTransitionDuration: 1,
            pathColor,
            textColor: "#051441",
            trailColor: "#f1f1fa",
          })}
        />
      </div>
      <div className="pb-5 flex flex-col px-3 w-full">
        <h1 className="py-5 text-center text-xl font-bold">{title}</h1>
        <div>
          <ul className="pl-5 font-semibold">
            {items.map((v, i) => (
              <li key={i} className="list-disc">
                {v}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SkillCard;
