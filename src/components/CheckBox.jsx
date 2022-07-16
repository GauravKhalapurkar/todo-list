import React from "react";

const CheckBox = ({ check, handleCheck }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={check}
        onClick={handleCheck}
        className="w-4 h-4 cursor-pointer"
      />
    </div>
  );
};

export default CheckBox;
