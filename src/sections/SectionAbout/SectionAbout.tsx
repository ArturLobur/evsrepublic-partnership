import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";

import backgroundImg from "../../assets/backgroundImg.png";
import CustomButton from "../../components/CustomButton.tsx";
import ModalWindow from "../../components/ModalWindow.tsx";
import {containerSize} from "../../system/constants.ts";
import SignUp from "../Auth/SignUp.tsx";

export default function SectionAbout() {
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleButtonClick = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Box
      sx={{
        pt: {xs: "170px", md: "228px"},
        height: {xs: "auto", sm: "800px"},
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Container
        maxWidth={containerSize}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            fontWeight: 400,
            fontSize: 60,
            lineHeight: "66px",
            mb: 4,
          }}
        >
          Become our partner in&nbsp;
          <Typography
            component="span"
            variant="h1"
            color="primary"
            sx={{
              fontWeight: 400,
              fontSize: 60,
              lineHeight: "66px",
            }}
          >
            EV repair
          </Typography>
        </Typography>
        <Box sx={{maxWidth: 680, mb: 5}}>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{
              fontWeight: 400,
              fontSize: 18,
              lineHeight: "25px",
            }}
          >
            Enhance your auto shop and tap into the EV Market! EV Republic’s
            comprehensive solutions provide everything you need to begin
            servicing electric vehicles.
            <br />
            <br />
            At EV’s Republic, we are excited to introduce a unique partnership
            opportunity for auto service shop owners. Our mission is to enable
            shops across the country to smoothly transition into servicing
            electric vehicles, creating a new revenue stream and augmenting
            their service offerings.
          </Typography>
        </Box>
        <ModalWindow
          onOpen={modalOpen}
          onClose={() => setModalOpen(!modalOpen)}
        >
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
    </Box>
  );
}