import React from "react";
import "./style.scss";
import { Chore } from "../types";
import Menu from "app/components/Menu";
import { useDispatch } from "react-redux";
import { AppDispatch } from "app/store";
import { deleteChore } from "../choreSlice";

const ChoreItem = ({ description, id, title }: Chore) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteChore = () => dispatch(deleteChore(id));

  return (
    <div className="chore__item">
      <div className="chore__header">
        <h3 className="chore__title">{title}</h3>
        <Menu
          cardId={id}
          options={[
            {
              label: "View",
              href: `/chores/${id}`,
            },
            {
              label: "Edit",
              href: `/chores/${id}/edit`,
            },
            {
              label: "Delete",
              action: handleDeleteChore,
            },
          ]}
        />
      </div>
      <p>{description}</p>
    </div>
  );
};

export default React.memo(ChoreItem);
