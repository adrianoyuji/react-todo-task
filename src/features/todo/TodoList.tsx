import { AppDispatch } from "app/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem/TodoItem";
import { selectTodoSlice, fetchTodos } from "./todoSlice";
import { Status } from "./types";
const TodoList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { error, list: todos, status } = useSelector(selectTodoSlice);

  useEffect(() => {
    if (status === Status.idle) dispatch(fetchTodos());
  }, [status, dispatch]);

  const renderContent = {
    [Status.idle]: () => <></>,
    [Status.succeeded]: () => (
      <div>
        {todos.map((todo) => (
          <TodoItem {...todo} key={todo.id} />
        ))}
      </div>
    ),
    [Status.loading]: () => <p>Loading...</p>,
    [Status.failed]: () => <p>{error}</p>,
  };

  return (
    <section className="container">
      <h2>Todos</h2>
      {renderContent[status]()}
    </section>
  );
};

export default TodoList;
