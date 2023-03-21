import React, { FC } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar/";
import "react-circular-progressbar/dist/styles.css";
interface P {
  percentage: number;
  pathColor?: string;
}
const SkillCard: FC<P> = ({ percentage, pathColor }) => {
  return (
    <div className="flex flex-col justify-center items-start w-full sm:w-5/12 md:w-3/12 xl:w-2/12  h-full border-[1px] border-solid border-gray-300 shadow-xl m-2">
      <div className="mb-10 mt-5 self-center w-2/3 h-auto">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
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
    </div>
  );
};
export default SkillCard;
