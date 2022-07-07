import Header from "app/layout/Header";
import React from "react";
import TodoHeading from "./TodoHeading";
import TodoList from "./TodoList";
import "./styles.scss";
import TodoModal from "./TodoModal";

const TodoPage = () => {
  return (
    <>
      <Header />
      <TodoHeading />
      <TodoList />
      <TodoModal />
    </>
  );
};

export default TodoPage;
