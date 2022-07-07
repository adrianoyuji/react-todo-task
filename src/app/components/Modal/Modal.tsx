import React, { ReactNode } from "react";
import { createPortal } from "react-dom";
import "./style.scss";
interface Props {
  children: ReactNode;
  show: boolean;
  onClose: () => void;
}

const Modal = ({ children, show, onClose }: Props) => {
  if (!show) return null;

  return createPortal(
    <>
      <span className="modal__overlay" />
      <div className="modal">
        <div onClick={onClose}>xDs</div>
        {children}
      </div>
    </>,
    document.getElementById("portal") as Element
  );
};

export default Modal;
