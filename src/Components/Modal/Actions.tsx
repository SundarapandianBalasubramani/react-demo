import { PropsWithChildren } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export enum Events {
  Close,
  Add,
  Update,
  Submit,
  Edit,
  Delete
}




export const ModalActions: React.FC<
  {
    closeButtonText?: string;
    eventButtonText?: string;
    onEvent: (e: Events) => void;
  } & PropsWithChildren
> = ({ onEvent, closeButtonText = "Close", eventButtonText = "Submit" }) => {
  return (
    <Modal.Footer>
      <Button variant="secondary" onClick={()=>{onEvent(Events.Close)}}>
        {closeButtonText}
      </Button>
      <Button variant="primary" onClick={()=>{onEvent(Events.Submit)}}>
        {eventButtonText}
      </Button>
    </Modal.Footer>
  );
};
