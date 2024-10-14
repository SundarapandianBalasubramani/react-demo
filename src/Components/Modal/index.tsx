import { PropsWithChildren } from "react";
import Modal from "react-bootstrap/Modal";

export const ModalComponent: React.FC<
  {
    show: boolean;
    title: string;
    onHide: () => void;   
    
  } & PropsWithChildren
> = ({
  onHide,
  show,
  children,
  title,
 
}) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>     
    </Modal>
  );
};
