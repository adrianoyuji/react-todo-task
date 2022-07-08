import Button from "app/components/Button";
import { AppDispatch } from "app/store";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteChore, updateChore } from "./choreSlice";
import { Chore } from "./types";

interface Props {
  chore: Chore;
}

const ChoreDetails = ({ chore }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();
  const [editMode, setEditMode] = useState(() =>
    location.pathname.includes("edit")
  );
  const [title, setTitle] = useState(chore.title);
  const [description, setDescription] = useState(chore.description);

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const handleDescriptionTitle = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setDescription(e.target.value);

  const handleToggleEditMode = () => setEditMode((prev) => !prev);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(updateChore({ title, description, id: chore.id }));
    navigate("/chores");
  };

  const handleDeleteChore = () => {
    dispatch(deleteChore(chore.id));
    navigate("/chores");
  };

  const handleCancelEdit = () => {
    setTitle(chore.title);
    setDescription(chore.description);
    handleToggleEditMode();
  };

  return (
    <form onSubmit={handleSubmit} className="form__container">
      <div className="form__group">
        <label htmlFor="chore-title" className="form__input__label">
          Title:
        </label>
        <input
          disabled={!editMode}
          onChange={handleChangeTitle}
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
          disabled={!editMode}
          value={description}
          onChange={handleDescriptionTitle}
          id="chore-description"
          className="form__input--textarea"
        ></textarea>
      </div>

      <div className="form__button-group">
        {editMode ? (
          <>
            <Button type="submit" label="Save" variant="primary" />
            <Button label="Cancel" variant="ghost" onClick={handleCancelEdit} />
          </>
        ) : (
          <>
            <Button
              label="Delete"
              variant="ghost"
              onClick={handleDeleteChore}
            />
            <Button
              label="Edit"
              variant="primary"
              onClick={handleToggleEditMode}
            />
          </>
        )}
      </div>
    </form>
  );
};

export default ChoreDetails;
