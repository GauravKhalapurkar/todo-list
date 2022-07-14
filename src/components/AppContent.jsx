import React from "react";
import { useSelector } from "react-redux";

const AppContent = () => {
  const todoList = useSelector((state) => state.todo.todoList);
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  return (
    <div className="max-w-[800px] mx-auto">
      {sortedTodoList.length > 0
        ? sortedTodoList.map((todo) => todo.title)
        : "Hurry! No Todos."}
    </div>
  );
};

export default AppContent;
