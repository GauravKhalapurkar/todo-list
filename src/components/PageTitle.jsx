import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { updateTitle } from "../slices/todoSlice";

const PageTitle = () => {
  useEffect(() => {
    const todoTitle = window.localStorage.getItem("todoTitle");
    setHeading(JSON.parse(todoTitle).heading);
    document.title = JSON.parse(todoTitle).heading;
  }, []);

  let [heading, setHeading] = useState("Todo List");
  let [counter, setCounter] = useState(0);
  let [counterVisibility, setCounterVisibility] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const todoTitle = window.localStorage.getItem("todoTitle");
    console.log(JSON.parse(todoTitle).heading);

    setHeading(e.target.value);
    setCounterVisibility(true);
    setCounter(e.target.value.length);
  };

  const handleBlur = () => {
    if (heading === "") {
      setHeading("Todo List");
    }

    dispatch(updateTitle({ heading }));

    const todoTitle = window.localStorage.getItem("todoTitle");
    console.log("esfef: ", JSON.parse(todoTitle).heading);

    setHeading(JSON.parse(todoTitle).heading);
    document.title = JSON.parse(todoTitle).heading;

    setCounterVisibility(false);

    toast.success("Title updated!");
  };

  return (
    <div className="max-w-[800px] mx-auto text-center py-12">
      <input
        value={heading}
        maxLength={24}
        onChange={(e) => handleChange(e)}
        onBlur={() => handleBlur()}
        className="w-full bg-bg-1 text-center font-extrabold text-5xl  text-bg-3 cursor-pointer "
        type="text"
      />
      {counterVisibility && (
        <p className="text-bg-3 font-bold text-right">{counter}/24</p>
      )}
    </div>
  );
};

export default PageTitle;
