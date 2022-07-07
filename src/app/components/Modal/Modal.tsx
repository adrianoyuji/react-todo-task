import React, { ReactNode } from "react";
import { createPortal } from "react-dom";
import "./style.scss";
interface Props {
  children: ReactNode;
  show: boolean;
  onClose: () => void;
  title: string;
}

const Modal = ({ children, show, onClose, title }: Props) => {
  if (!show) return null;

  return createPortal(
    <>
      <span className="modal__overlay" onClick={onClose} />
      <div className="modal">
        <div className="modal__header">
          {title && <h3 className="modal__header__title">{title}</h3>}

          <div>
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
        </div>

        {children}
      </div>
    </>,
    document.getElementById("portal") as Element
  );
};

export default Modal;
