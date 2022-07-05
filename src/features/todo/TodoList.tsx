import { useSelector } from "react-redux";

import { selectAllTodos } from "./todoSlice";

const TodoList = () => {
  const todos = useSelector(selectAllTodos);

  const renderedTodos = todos.list.map((todo) => (
    <article key={todo.id}>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
    </article>
  ));

  return (
    <section>
      <h2>Todos</h2>
      {renderedTodos}
    </section>
  );
};

export default TodoList;
