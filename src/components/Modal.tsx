import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
}

function Modal(props: ModalProps) {
  return (
    <div className="modal">
      <button>X</button>
      {props.isOpen && props.children}
    </div>
  );
}

export default Modal;
