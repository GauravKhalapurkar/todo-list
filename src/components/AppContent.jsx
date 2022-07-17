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

  return (
    <div className="max-w-[800px] mx-auto">
      {filterTodoList.length > 0
        ? filterTodoList.map((todo) => <TodoItem key={todo.key} todo={todo} />)
        : "Hurry! No Todos."}
    </div>
  );
};

export default AppContent;
