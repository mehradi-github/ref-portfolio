import { createContext, Dispatch, SetStateAction } from "react";

export type ctx = {
  cursorActive: boolean;
  // cursorCoordinate: { x: number; y: number };
};

export const ProfileContext =
  createContext<[ctx, Dispatch<SetStateAction<ctx>>]>(null);
