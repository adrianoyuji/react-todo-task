import Button from "app/components/Button";
import { AppDispatch } from "app/store";
import { useDispatch } from "react-redux";
import { onOpenTodoModal } from "./todoSlice";

const TodoHeading = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleOpenTodoModal = () => dispatch(onOpenTodoModal());

  return (
    <div className="heading__container container">
      <h2>Chores</h2>
      <Button label="Add" onClick={handleOpenTodoModal} />
    </div>
  );
};

export default TodoHeading;
