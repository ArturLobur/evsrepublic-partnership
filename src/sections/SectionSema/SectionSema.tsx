import Container from "@mui/material/Container";
import {useState} from "react";

import HeaderForSections from "../../components/HeaderForSections.tsx";
import ModalWindow from "../../components/ModalWindow.tsx";
import {containerSize} from "../../system/constants.ts";
import SignUp from "../Auth/SignUp.tsx";
import SectionSemaSlider from "./SectionSemaSlider.tsx";

const SectionSema = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // const handleModalOpen = () => {
  //   setModalOpen(true);
  // };

  return (
    <Container maxWidth={containerSize} id="sema">
      <HeaderForSections
        title="SEMA SHOW 2024"
        firstDescription="We’re excited to announce our presence at the SEMA Show! Find us in the Central Hall, Booth 24730 - Racing & Performance."
      >
        <SectionSemaSlider />
      </HeaderForSections>
      <ModalWindow onOpen={modalOpen} onClose={() => setModalOpen(!modalOpen)}>
        <SignUp onClose={() => setModalOpen(false)} />
      </ModalWindow>
    </Container>
  );
};
export default SectionSema;