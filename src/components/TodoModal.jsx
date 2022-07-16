import React, { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../slices/todoSlice";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";

const TodoModal = ({ heading, openModal, setOpenModal, todo }) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("incomplete");
  const dispatch = useDispatch();

  useEffect(() => {
    if (heading === "Update" && todo) {
      setTitle(todo.title);
      setStatus(todo.status);
    } else {
      setTitle("");
      setStatus("incomplete");
    }
  }, [heading, todo, openModal]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "") {
      toast.error("Title shouldn't be empty!");
      return;
    }

    if (title && status) {
      if (heading === "Add") {
        dispatch(
          addTodo({
            id: uuid(),
            title,
            status,
            time: new Date().toLocaleString(),
          })
        );
        toast.success("Task Added Successfully!");
      }

      if (heading === "Update") {
        if (todo.title !== title || todo.status !== status) {
          dispatch(
            updateTodo({
              ...todo,
              title,
              status,
            })
          );
        } else {
          toast.error("No changes made!");
        }
      }
      setOpenModal(false);
    }
  };

  return (
    openModal && (
      <div className="w-full h-full bg-[#00000080] top-0 fixed flex justify-center items-center">
        <div className="bg-bg-1 border-2 border-bg-3 w-[90%] max-w-[500px] flex justify-center items-center rounded-md relative p-12 ">
          <div
            onClick={() => {
              setOpenModal(false);
            }}
            className="bg-gray-1 text-black absolute top-[-40px] right-0 p-2 rounded-md cursor-pointer transition-all hover:bg-[#e32525]"
          >
            <MdOutlineClose />
          </div>
          <form
            className="w-full text-black-1 text-2xl"
            onSubmit={(e) => handleSubmit(e)}
          >
            <h1 className="font-bold">{heading} Task</h1>
            <div className="flex flex-col py-1">
              <label htmlFor="title" className="text-sm text-black-1 py-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="p-2 text-sm bg-white rounded-md"
              />
            </div>
            <div className="flex flex-col py-1">
              <label htmlFor="status" className="text-sm text-black-1 py-2">
                Status
              </label>
              <select
                name="status"
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="p-2 text-sm bg-white rounded-md"
              >
                <option value="incomplete">Incomplete</option>
                <option value="complete">Complete</option>
              </select>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="px-4 py-2 rounded-md border-2 border-orange text-orange font-semibold  text-sm"
              >
                {heading} Task
              </button>
              <button
                type="button"
                onClick={() => {
                  setOpenModal(false);
                }}
                className="px-4 py-2 ml-2 rounded-md border-2 border-bg-3 bg-bg-1 text-white text-sm"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default TodoModal;
