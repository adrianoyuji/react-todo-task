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
      <span className="modal__overlay" onClick={onClose} />
      <div className="modal">
        <div className="modal__header">
          <input
            id="close-modal"
            type="button"
            className="modal__close__btn"
            onClick={onClose}
          ></input>
          <label htmlFor="close-modal" className="modal__close__container">
            <div className="modal__close_icon" />
          </label>
        </div>

        {children}
      </div>
    </>,
    document.getElementById("portal") as Element
  );
};

export default Modal;
