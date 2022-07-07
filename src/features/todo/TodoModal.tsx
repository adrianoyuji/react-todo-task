import Button from "app/components/Button";
import Modal from "app/components/Modal";
import { AppDispatch } from "app/store";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onCloseTodoModal, selectTodoSlice, addNewTodo } from "./todoSlice";

const TodoModal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const { showTodoModal } = useSelector(selectTodoSlice);
  const handleCloseModal = () => dispatch(onCloseTodoModal());
  const titleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (titleRef && showTodoModal) titleRef.current?.focus();
  }, [titleRef, showTodoModal]);

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const handleDescriptionTitle = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setDescription(e.target.value);

  const resetFields = () => {
    setDescription("");
    setTitle("");
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(addNewTodo({ title, description }));
    resetFields();
    handleCloseModal();
  };

  return (
    <Modal title="New Chore" show={showTodoModal} onClose={handleCloseModal}>
      <form onSubmit={handleSubmit} className="form__container">
        <div className="form__group">
          <label htmlFor="todo-title" className="form__input__label">
            Title:
          </label>
          <input
            onChange={handleChangeTitle}
            ref={titleRef}
            id="todo-title"
            type="text"
            value={title}
            className="form__input--text"
          ></input>
        </div>

        <div className="form__group">
          <label htmlFor="todo-description" className="form__input__label">
            Description:
          </label>
          <textarea
            value={description}
            onChange={handleDescriptionTitle}
            id="todo-description"
            className="form__input--textarea"
          ></textarea>
        </div>
        <div className="form__button-group">
          <Button label="Cancel" variant="ghost" />
          <Button type="submit" label="Create" variant="primary" />
        </div>
      </form>
    </Modal>
  );
};

export default TodoModal;
