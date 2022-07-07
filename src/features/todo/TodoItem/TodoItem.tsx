import React from "react";
import "./style.scss";
import { Todo } from "../types";
import Menu from "app/components/Menu";
import { useDispatch } from "react-redux";
import { AppDispatch } from "app/store";
import { deleteTodo } from "../todoSlice";

const TodoItem = ({ description, id, title }: Todo) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteTodo = () => dispatch(deleteTodo(id));

  return (
    <div className="todo__item">
      <div className="todo__header">
        <h3 className="todo__title">{title}</h3>
        <Menu
          cardId={id}
          options={[
            {
              label: "View",
              href: `/todo/${id}`,
            },
            {
              label: "Edit",
              href: `/todo/${id}/edit`,
            },
            {
              label: "Delete",
              action: handleDeleteTodo,
            },
          ]}
        />
      </div>
      <p>{description}</p>
    </div>
  );
};

export default React.memo(TodoItem);
