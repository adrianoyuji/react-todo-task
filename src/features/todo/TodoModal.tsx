import Modal from "app/components/Modal";
import { AppDispatch } from "app/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onCloseTodoModal, selectTodoSlice } from "./todoSlice";

const TodoModal = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { showTodoModal } = useSelector(selectTodoSlice);
  const handleCloseModal = () => dispatch(onCloseTodoModal());

  return (
    <Modal show={showTodoModal} onClose={handleCloseModal}>
      <h3>placeholder</h3>
    </Modal>
  );
};

export default TodoModal;
