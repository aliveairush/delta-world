import React, { ReactNode, useEffect } from "react";
import "./Modal.scss";
import { CloseOutlined } from "@ant-design/icons";

interface Props {
  show: boolean,
  onClose: ()=> void,
  children: ReactNode,
  title?: string,
}

const Modal = ({
  show, onClose, children, title,
} : Props) => {
  const closeOnEscapeKeyDown = (e: KeyboardEvent) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanUp() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return (
    <div className={`modal ${show ? 'show' : ''}`} onClick={onClose}>
      <CloseOutlined className="modal__close-icon" />
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {title && (
        <div className="modal-header">
          <h4 className="modal-title">{title}</h4>
        </div>
        )}
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

Modal.defaultProps = {
  title: null,
};

export default Modal;
