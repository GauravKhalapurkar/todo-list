import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { updateTitle, setTodoSuccess } from "../slices/todoSlice";

const PageTitle = () => {
  useEffect(() => {
    const todoTitle = window.localStorage.getItem("todoTitle");
    setHeading(JSON.parse(todoTitle).heading);
  }, []);

  let [heading, setHeading] = useState("Todo List");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const todoTitle = window.localStorage.getItem("todoTitle");
    console.log(JSON.parse(todoTitle).heading);

    setHeading(e.target.value);
  };

  const handleBlur = () => {
    if (heading === "") {
      setHeading("Todo List");
    }

    dispatch(updateTitle({ heading }));

    const todoTitle = window.localStorage.getItem("todoTitle");
    console.log("esfef: ", JSON.parse(todoTitle).heading);

    setHeading(JSON.parse(todoTitle).heading);

    toast.success("Title updated!");
  };

  return (
    <div className="w-full text-center font-extrabold text-5xl text-bg-3  py-12">
      <input
        value={heading}
        onChange={(e) => handleChange(e)}
        onBlur={() => handleBlur()}
        className=" bg-bg-1 text-center font-extrabold text-5xl  text-bg-3 cursor-pointer caret-[#00000000] "
        type="text"
      />
    </div>
  );
};

export default PageTitle;
