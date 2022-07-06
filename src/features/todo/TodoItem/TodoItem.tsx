import React from "react";
import "./style.scss";
import { Todo } from "../types";

const TodoItem = ({ description, id, title }: Todo) => {
  return (
    <div className="todo__item">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default React.memo(TodoItem);
