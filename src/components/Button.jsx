import React from "react";

const Spinner = ({ children, id, ...rest }) => {
  return (
    <select className="px-4 py-2  rounded-md bg-bg-3" {...rest}>
      {children}
    </select>
  );
};

export { Spinner };
