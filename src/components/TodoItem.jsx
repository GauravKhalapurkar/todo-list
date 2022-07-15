import { format } from "date-fns/esm";
import React from "react";
import { MdDelete } from "react-icons/md";

const TodoItem = ({ todo }) => {
  return (
    <div className="flex justify-between items-center  px-4 py-2 my-2 bg-   rounded-md ">
      <div className="flex">
        []
        <div className="px-2">
          <p
            className={todo.status === "complete" && "line-through opacity-70"}
          >
            {todo.title}
          </p>
          <p>{format(new Date(todo.time), "p, dd/MM/yyyy")}</p>
        </div>
      </div>
      <div className="bg-gray-1 text-black-2 p-2   ">
        <MdDelete />
      </div>
    </div>
  );
};

export default TodoItem;
