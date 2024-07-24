import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import {DialogActions, DialogContent, IconButton} from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Stack from "@mui/material/Stack";

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
      <DialogContent>
        Stay Updated
        <br />
        Follow us on social media for the latest news, updates, and exclusive
        content:
        <Stack
          direction="row"
          justifyContent="center"
          spacing={1}
          useFlexGap
          sx={{
            mt: 2,
            color: "text.secondary",
          }}
        >
          <IconButton
            color="inherit"
            href="https://www.facebook.com/EVSRepublic"
            aria-label="facebook"
            sx={{alignSelf: "center"}}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.twitter.com/EVSRepublic"
            aria-label="twitter"
            sx={{alignSelf: "center"}}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/company/EVSRepublic"
            aria-label="LinkedIn"
            sx={{alignSelf: "center"}}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.instagram.com/EVSRepublic"
            aria-label="instagram"
            sx={{alignSelf: "center"}}
          >
            <InstagramIcon />
          </IconButton>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleDialog}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogAlert;