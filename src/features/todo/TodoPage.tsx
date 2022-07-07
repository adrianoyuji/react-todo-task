import "./styles.scss";
import TodoHeading from "./TodoHeading";
import TodoList from "./TodoList";
import TodoModal from "./TodoModal";

const TodoPage = () => {
  return (
    <>
      <TodoHeading />
      <TodoList />
      <TodoModal />
    </>
  );
};

export default TodoPage;
