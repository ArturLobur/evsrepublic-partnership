import {Modal} from "@mui/material";
import Box from "@mui/material/Box";
import {FC, ReactNode} from "react";

import {siteColors} from "../system/constants.ts";

interface ModalWindowProps {
  onOpen: boolean;
  onClose: () => void;
  style?: object;
  children: ReactNode;
}

const ModalWindow: FC<ModalWindowProps> = (props) => (
  <Modal
    open={props.onOpen}
    onClose={props.onClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box
      sx={{
        position: "absolute",
        maxWidth: 450,
        minWidth: 360,
        bgcolor: `${siteColors.black}`,
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: 4,
        ...props.style,
      }}
    >
      {props.children}
    </Box>
  </Modal>
);

export default ModalWindow;