import { FC } from "react";
import { useSelector } from "react-redux";
import { Alert, Snackbar } from "@mui/material";

import {
  useAppDispatch,
  notificationSelector,
  closeNotification,
} from "@store/index";

const Notification: FC = () => {
  const dispatch = useAppDispatch();
  const { isOpen, severity, message } = useSelector(notificationSelector);

  const handleClose = () => {
    dispatch(closeNotification());
  };

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
