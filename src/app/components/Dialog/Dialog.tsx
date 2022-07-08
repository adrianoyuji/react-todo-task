import Button from "../Button";
import Modal from "../Modal";
import "./style.scss";

interface Props {
  show: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  title: string;
}

const Dialog = ({ show, onCancel, onConfirm, title }: Props) => {
  return (
    <Modal show={show} onClose={onCancel} title={title}>
      <p>This action is irreversible.</p>
      <div className="dialog__buttons">
        <Button label="Cancel" onClick={onCancel} />
        <Button label="Confirm" onClick={onConfirm} variant="secondary" />
      </div>
    </Modal>
  );
};

export default Dialog;
