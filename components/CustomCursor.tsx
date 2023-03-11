import React, { FC, Fragment, useEffect } from "react";

const CustomCursor: FC = () => {
  const CursorEffect = () => {};

  useEffect(() => {
    CursorEffect();
  }, []);

  return (
    <Fragment>
      <div className="fixed left-0 top-0 pointer-events-none radius-[50%] translate-z-0 hidden " />
      <div className="cur cur-inner" />
    </Fragment>
  );
};

export default CustomCursor;
