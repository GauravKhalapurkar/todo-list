import { format } from "date-fns/esm";
import React, { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux/es/exports";
import { deleteTodo } from "../slices/todoSlice";
import toast from "react-hot-toast";
import TodoModal from "./TodoModal";

const TodoItem = ({ todo }) => {
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success("Todo deleted successfully!");
  };

  const handleUpdate = () => {
    setUpdateModalOpen(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center px-4 py-2 my-2 bg-bg-2 text-white border-2 border-bg-3   rounded-md ">
        <div className="flex">
          []
          <div className="px-2">
            <p
              className={
                todo.status === "complete" && "line-through opacity-70"
              }
            >
              {todo.title}
            </p>
            <p>{format(new Date(todo.time), "p, dd/MM/yyyy")}</p>
          </div>
        </div>
        <div className="flex">
          <div
            onClick={handleDelete}
            className="bg-bg-1 border-2 border-bg-3 text-black-2 p-2 mx-1 rounded-md hover:bg-bg-3 cursor-pointer"
          >
            <MdDelete />
          </div>
          <div
            onClick={handleUpdate}
            className="bg-bg-1 border-2 border-bg-3 text-black-2 p-2 mx-1 rounded-md hover:bg-bg-3 cursor-pointer"
          >
            <MdEdit />
          </div>
        </div>
      </div>

      <TodoModal
        heading="Update"
        openModal={updateModalOpen}
        setOpenModal={setUpdateModalOpen}
      />
    </div>
  );
};

export default TodoItem;
