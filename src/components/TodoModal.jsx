import React from "react";
import { MdOutlineClose } from "react-icons/md";

const TodoModal = ({ openModal, setOpenModal }) => {
  return (
    openModal && (
      <div className="w-[100%] h-[100%] bg-[#00000080] top-0 fixed flex justify-center items-center">
        <div className="bg-bg-2 w-[90%] max-w-[500px] flex justify-center items-center rounded-md relative p-12 ">
          <div
            onClick={() => {
              setOpenModal(false);
            }}
            className="bg-gray-1 text-black absolute top-[-40px] right-0 p-2 rounded-md cursor-pointer transition-all hover:bg-[#e32525]"
          >
            <MdOutlineClose />
          </div>
          <form className="w-full text-black-1 text-2xl">
            <h1 className="font-bold">Add Task</h1>
            <div className="flex flex-col py-1">
              <label htmlFor="title" className="text-sm text-black-1 py-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="p-2 text-sm rounded-md"
              />
            </div>
            <div className="flex flex-col py-1">
              <label htmlFor="status" className="text-sm text-black-1 py-2">
                Status
              </label>
              <select
                name="status"
                id="status"
                className="p-2 text-sm rounded-md"
              >
                <option value="incomplete">Incomplete</option>
                <option value="complete">Complete</option>
              </select>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-primaryPurple text-[#ffffff] font-semibold  text-sm"
              >
                Add Task
              </button>
              <button
                type="button"
                onClick={() => {
                  setOpenModal(false);
                }}
                className="px-4 py-2 ml-2 rounded-md bg-bg-3 text-sm"
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
