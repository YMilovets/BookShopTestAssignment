import { useState } from "react";
import { Delete } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useBooks } from "@/entities/books";
import { useElementId } from "@/shared/hooks";

import { useRemoveBook } from "../../hooks";

export default function RemoveConfirm() {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedBook } = useBooks();

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDelete = useRemoveBook(handleClose);

  const title = useElementId("title");
  const description = useElementId("description");

  return (
    <>
      <Button
        aria-label="Удалить"
        onClick={handleClickOpen}
        title={`Удалить книгу ${selectedBook?.name}`}
        sx={{ gap: 1 }}
      >
        <Delete color="primary" sx={{ width: 16 }} fontSize="small" />
        Удалить
      </Button>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby={title}
        aria-describedby={description}
        role="alertdialog"
      >
        <DialogTitle id={title}>Удаление книги</DialogTitle>
        <DialogContent>
          <DialogContentText id={description}>
            Вы действительно хотите удалить книгу {selectedBook?.name} из
            каталога?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Отмена
          </Button>
          <Button onClick={handleDelete}>Удалить</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
