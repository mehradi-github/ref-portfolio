import React, { FC, Fragment, useEffect } from "react";

const CustomCursor: FC = () => {
  const CursorEffect = () => {};

  useEffect(() => {
    CursorEffect();
  }, []);

  return (
    <Fragment>
      <div className="fixed left-0 top-0 pointer-events-none radius-[50%] translate-z-0 hidden  border-indigo-500 border-solid  border-2 box-border -ml-4 -mt-4 w-8 h-8 z-50 opacity-50 transition-all duration-75 ease-out data-[state=active]:opacity-0" />
      <div className="fixed left-0 top-0 pointer-events-none radius-[50%] translate-z-0 hidden  bg-indigo-500 -ml-1 -mt-1 w-2 h-2  z-50  transition-width  transition-height  transition-margin  transition-opacity duration-300 ease-in-out data-[state=active]:-ml-10 data-[state=active]:-mt-10 data-[state=active]:w-20 data-[state=active]:h-20 data-[state=active]:opacity-30" />
    </Fragment>
  );
};

export default CustomCursor;
