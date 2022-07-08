import React, { useState } from "react";
import "./style.scss";
import { Chore } from "../types";
import Menu from "app/components/Menu";
import { useDispatch } from "react-redux";
import { AppDispatch } from "app/store";
import { deleteChore } from "../choreSlice";
import Dialog from "app/components/Dialog";

const ChoreItem = ({ description, id, title }: Chore) => {
  const [showDialog, setShowDialog] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleShowDialog = () => setShowDialog(true);
  const handleCloseDialog = () => setShowDialog(false);

  const handleDeleteChore = () => dispatch(deleteChore(id));

  return (
    <>
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
                action: handleShowDialog,
              },
            ]}
          />
        </div>
        <p>{description}</p>
      </div>
      <Dialog
        title={`Delete ${title}?`}
        onCancel={handleCloseDialog}
        onConfirm={handleDeleteChore}
        show={showDialog}
      />
    </>
  );
};

export default React.memo(ChoreItem);
