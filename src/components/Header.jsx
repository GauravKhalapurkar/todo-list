import React, { useState } from "react";
import Button, { Spinner } from "./Button";
import TodoModal from "../components/TodoModal.jsx";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterStatus } from "../slices/todoSlice";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const dispatch = useDispatch();

  const updateFilter = (e) => {
    dispatch(updateFilterStatus(e.target.value));
  };

  return (
    <div>
      <div className="max-w-[800px] mx-auto flex justify-between ">
        <button
          type="button"
          onClick={() => setOpenModal(true)}
          className="px-4 py-2 rounded-md border-2 border-orange text-orange font-semibold  text-sm"
        >
          Add Task
        </button>
        <Spinner id="status" value={filterStatus} onChange={updateFilter}>
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </Spinner>
      </div>
      <TodoModal
        heading="Add"
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </div>
  );
};

export default Header;
