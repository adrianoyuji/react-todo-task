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
      <ul>
        {todos.map((todo) => (
          <TodoItem {...todo} key={todo.id} />
        ))}
      </ul>
    ),
    [Status.loading]: () => <p>Loading...</p>,
    [Status.failed]: () => <p>{error}</p>,
  };

  return (
    <section>
      <h2>Todos</h2>
      {renderContent[status]()}
    </section>
  );
};

export default TodoList;
