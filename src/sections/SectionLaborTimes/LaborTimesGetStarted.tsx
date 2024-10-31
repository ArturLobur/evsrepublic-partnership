import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";

import backgroundImg from "../../assets/getStartedImg.png";
import CustomButton from "../../components/CustomButton.tsx";
import ModalWindow from "../../components/ModalWindow.tsx";
import {containerSize} from "../../system/constants.ts";
import SignUp from "../Auth/SignUp.tsx";

const LaborTimesGetStarted = () => {
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleButtonClick = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <Container
      maxWidth={containerSize}
      sx={{
        backgroundImage: `url(${backgroundImg})`,
        borderRadius: "16px",
        display: "flex",
        height: "470px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          fontWeight: 400,
          fontSize: 36,
          lineHeight: "40px",
          mb: 2.5,
        }}
      >
        Get Started Today
      </Typography>
      <Typography
        textAlign="center"
        color="text.secondary"
        sx={{
          maxWidth: 600,
          fontWeight: 400,
          fontSize: 18,
          lineHeight: "28px",
          mb: 3,
        }}
      >
        in our partnership program to gain access to Tesla Labor Times and
        transform your auto service business. Enhance your repair efficiency,
        improve customer satisfaction, and stay competitive in the growing EV
        market.
      </Typography>
      <ModalWindow onOpen={modalOpen} onClose={() => setModalOpen(!modalOpen)}>
        <SignUp onClose={() => setModalOpen(false)} />
      </ModalWindow>
      <CustomButton
        color="primary"
        variant="contained"
        name="sign-up"
        onClick={handleButtonClick}
      >
        SIGN UP NOW
      </CustomButton>
    </Container>
  );
};
export default LaborTimesGetStarted;