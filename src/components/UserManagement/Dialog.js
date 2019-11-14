import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText
} from "@material-ui/core/";
//import ButtonDelete from "./ButtonDelete";
//import { deleteUser } from "../../_services";

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteUser = () => {
      handleClose(false);
      props.deleteUser();
  }

  return (
    <div>
      <Button
        variant="outlined"
        size="small"
        color="primary"
        small
        onClick={handleClickOpen}
      >
        remove
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this user
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            type="submit"
            onClick={deleteUser}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
