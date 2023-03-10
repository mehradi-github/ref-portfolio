import { RefObject } from "react";
type nearestIndexType = (
  currentPosition: number,
  sectionPositionArray: RefObject<HTMLElement>[],
  startIndex: number,
  endIndex: number
) => number;

const nearestIndex: nearestIndexType = (
  currentPosition: number,
  sectionPositionArray: RefObject<HTMLElement>[],
  startIndex: number,
  endIndex: number
) => {
  if (startIndex === endIndex) return startIndex;
  else if (startIndex === endIndex - 1) {
    if (
      Math.abs(
        sectionPositionArray[startIndex].current!.offsetTop - currentPosition
      ) <
      Math.abs(
        sectionPositionArray[endIndex].current!.offsetTop - currentPosition
      )
    )
      return startIndex;
    else return endIndex;
  } else {
    var nextNearest = ~~((startIndex + endIndex) / 2);
    var a = Math.abs(
      sectionPositionArray[nextNearest].current!.offsetTop - currentPosition
    );
    var b = Math.abs(
      sectionPositionArray[nextNearest + 1].current!.offsetTop - currentPosition
    );
    if (a < b) {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        startIndex,
        nextNearest
      );
    } else {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        nextNearest,
        endIndex
      );
    }
  }
};

export default nearestIndex;
