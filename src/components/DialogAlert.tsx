import {DialogActions, DialogContent} from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

import {useDialog} from "../store/DialogContext.tsx";

const DialogAlert = () => {
  const {open, toggleDialog} = useDialog();

  return (
    <Dialog id="dialog" onClose={toggleDialog} open={open}>
      <DialogTitle color="primary.light">
        Thank You for Registering!
      </DialogTitle>
      <DialogContent>
        Your registration has been successfully completed. Welcome to the
        Partners EV’s Republic. Our team will be reaching out to you via phone
        during the next week to provide further assistance and answer any
        questions you may have.
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleDialog}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogAlert;