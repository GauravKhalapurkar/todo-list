import React, { Children } from "react";

const Button = ({ children, type, bgColor, ...rest }) => {
  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      className="px-4 py-2  rounded-md bg-bg-3 hover:bg-bg-3"
      style={bgColor}
      {...rest}
    >
      {children}
    </button>
  );
};

const Spinner = ({ children }) => {
  return <select className="px-4 py-2  rounded-md bg-bg-3">{children}</select>;
};

export { Spinner };
export default Button;
