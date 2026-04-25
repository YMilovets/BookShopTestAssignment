import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Snackbar } from "@mui/material";
import { useDispatch } from "react-redux";

import { useAppSelector } from "@/app/hooks";
import { setNotification } from "@/entities/notification";

import { HIDE_TIMEOUT } from "./constants";

function Notification() {
  const isOpen = useAppSelector((state) => state.notificationReducer.isOpen);
  const message = useAppSelector((state) => state.notificationReducer.message);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(
      setNotification({
        isOpen: false,
        message: "",
      }),
    );
  };

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={HIDE_TIMEOUT}
      onClose={handleClose}
      message={message}
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    />
  );
}

export default Notification;
