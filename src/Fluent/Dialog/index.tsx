import * as React from "react";
import {
  Dialog,  
  DialogSurface,
  DialogTitle,
  DialogBody,  
  DialogContent
  
} from "@fluentui/react-components";
import { PropsWithChildren } from "react";

export const Modal: React.FC<PropsWithChildren & { title: string , open: boolean}> = ({
  children,
  title,
  open
}) => {
  return (
    <Dialog open={open}>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent> {children} </DialogContent>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};
