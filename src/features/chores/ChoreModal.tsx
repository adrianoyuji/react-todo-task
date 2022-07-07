import Button from "app/components/Button";
import Modal from "app/components/Modal";
import { AppDispatch } from "app/store";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onCloseChoreModal, selectChoreSlice, addNewChore } from "./choreSlice";

const ChoreModal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const { showChoreModal } = useSelector(selectChoreSlice);
  const titleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (titleRef && showChoreModal) titleRef.current?.focus();
  }, [titleRef, showChoreModal]);

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const handleDescriptionTitle = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setDescription(e.target.value);

  const resetFields = () => {
    setDescription("");
    setTitle("");
  };

  const handleCloseModal = () => {
    resetFields();
    dispatch(onCloseChoreModal());
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(addNewChore({ title, description }));
    handleCloseModal();
  };

  return (
    <Modal title="New Chore" show={showChoreModal} onClose={handleCloseModal}>
      <form onSubmit={handleSubmit} className="form__container">
        <div className="form__group">
          <label htmlFor="chore-title" className="form__input__label">
            Title:
          </label>
          <input
            onChange={handleChangeTitle}
            ref={titleRef}
            id="chore-title"
            type="text"
            value={title}
            className="form__input--text"
          ></input>
        </div>

        <div className="form__group">
          <label htmlFor="chore-description" className="form__input__label">
            Description:
          </label>
          <textarea
            value={description}
            onChange={handleDescriptionTitle}
            id="chore-description"
            className="form__input--textarea"
          ></textarea>
        </div>
        <div className="form__button-group">
          <Button label="Cancel" variant="ghost" onClick={handleCloseModal} />
          <Button type="submit" label="Create" variant="primary" />
        </div>
      </form>
    </Modal>
  );
};

export default ChoreModal;
