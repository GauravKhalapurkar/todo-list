import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const AppContent = () => {
  const todoList = useSelector((state) => state.todo.todoList);

  const filterStatus = useSelector((state) => state.todo.filterStatus);

  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  const filterTodoList = sortedTodoList.filter((item) => {
    if (filterStatus === "all") {
      return true;
    }
    return item.status === filterStatus;
  });

  /**overflow-y-auto */

  return (
    <div className="max-w-[800px] mx-auto h-screen ">
      {filterTodoList.length > 0 ? (
        filterTodoList.map((todo) => <TodoItem key={todo.key} todo={todo} />)
      ) : (
        <div className="bg-bg-2 px-4 py-4 my-2 rounded-md border-2 border-bg-3 text-white">
          Hurray! No Todos.
        </div>
      )}
    </div>
  );
};

export default AppContent;
