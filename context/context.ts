import { createContext, Dispatch, SetStateAction } from "react";

export type ctx = {
  cursorActive: boolean;
  currentSection: number;
  // cursorCoordinate: { x: number; y: number };
};
export const initialContext: ctx = {
  cursorActive: false,
  currentSection: 0,
  // cursorCoordinate: { x: 0, y: 0 },
};
export const ProfileContext = createContext<
  [ctx, Dispatch<SetStateAction<ctx>> | undefined]
>([initialContext, undefined]);
