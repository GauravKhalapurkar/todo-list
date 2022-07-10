import React from "react";
import Button, { Spinner } from "./Button";
import TodoModal from "../components/TodoModal.jsx";

const Header = () => {
  return (
    <div>
      <div className="max-w-[800px] mx-auto flex justify-between ">
        <Button type="button">ADD</Button>
        <Spinner id="status">
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </Spinner>
      </div>
      <TodoModal className="" />
    </div>
  );
};

export default Header;
