import React, { useState } from "react";
import Button, { Spinner } from "./Button";
import TodoModal from "../components/TodoModal.jsx";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className="max-w-[800px] mx-auto flex justify-between ">
        <button
          type="button"
          onClick={() => setOpenModal(true)}
          className="px-4 py-2 rounded-md bg-primaryPurple text-[#ffffff] font-semibold  text-sm"
        >
          Add Task
        </button>
        <Spinner id="status">
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </Spinner>
      </div>
      <TodoModal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default Header;
