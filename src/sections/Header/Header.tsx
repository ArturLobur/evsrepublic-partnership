import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import {useCallback} from "react";

import ModalWindow from "../../components/ModalWindow.tsx";
import SignIn from "../Auth/SignIn.tsx";
import SignUp from "../Auth/SignUp.tsx";
import Menu from "./Menu/Menu.tsx";
import MobileMenu from "./Menu/MobileMenu.tsx";

const Header = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalType, setModalType] = React.useState<null | string>(null);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenMenu(newOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({behavior: "smooth"});
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpenMenu(false);
    }
  };

  const handleButtonClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setModalType(event.currentTarget.name);
      setOpenMenu(false);
      setModalOpen(!modalOpen);
    },
    [modalOpen],
  );

  const formType =
    modalType === "sign-in" ? (
      <SignIn />
    ) : (
      <SignUp onClose={() => setModalOpen(false)} />
    );

  return (
    <AppBar sx={{background: "none", boxShadow: "none", mt: 2}}>
      <Container maxWidth="xl" sx={{paddingLeft: 0}}>
        <Toolbar variant="regular" sx={{p: "0 !important"}}>
          <Menu
            scrollToSection={scrollToSection}
            onButtonClick={handleButtonClick}
          />
          <MobileMenu
            toggleDrawer={toggleDrawer}
            openMenu={openMenu}
            scrollToSection={scrollToSection}
            onButtonClick={handleButtonClick}
          />
        </Toolbar>
        <ModalWindow
          onOpen={modalOpen}
          onClose={() => setModalOpen(!modalOpen)}
        >
          {formType}
        </ModalWindow>
      </Container>
    </AppBar>
  );
};

export default Header;