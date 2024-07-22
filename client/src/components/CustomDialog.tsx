import { FC } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";

import { IDialogProps } from "#types/dialogProps";

const CustomDialog: FC<IDialogProps> = ({
  isOpen,
  onConfirm,
  onCancel,
  children,
}) => {
  return (
    <Dialog open={isOpen} onClose={onCancel}>
      <DialogContent>
        <DialogContentText>{children}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="primary" autoFocus>
          Cancel
        </Button>
        <Button onClick={onConfirm} color="primary">
          Log out
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
