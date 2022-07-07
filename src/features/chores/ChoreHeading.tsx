import Button from "app/components/Button";
import { AppDispatch } from "app/store";
import { useDispatch } from "react-redux";
import { onOpenChoreModal } from "./choreSlice";

const ChoreHeading = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleOpenChoreModal = () => dispatch(onOpenChoreModal());

  return (
    <div className="heading__container container">
      <h2>Chores</h2>
      <Button label="Add" onClick={handleOpenChoreModal} />
    </div>
  );
};

export default ChoreHeading;
