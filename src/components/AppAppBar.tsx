import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";

import {siteColors} from "../system/constants.ts";
import Menu from "./Menu.tsx";
import MobileMenu from "./MobileMenu.tsx";
import ModalWindow from "./ModalWindow.tsx";
import SignIn from "./SignIn.tsx";
import SignUp from "./SignUp.tsx";

function AppAppBar() {
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

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setModalType(event.currentTarget.name);
    setOpenMenu(false);
    setModalOpen(!modalOpen);
  };

  const formType = modalType === "sign-in" ? <SignIn /> : <SignUp />;

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        backgroundColor: "transparent",
        backgroundImage: "none",
        mt: 2,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          variant="regular"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
            borderRadius: "999px",
            bgcolor: "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(24px)",
            maxHeight: 40,
            border: "1px solid",
            borderColor: "divider",
            boxShadow: `0 0 1px ${siteColors.darkGrey}, 
                1px 1.5px 2px -1px ${siteColors.darkGrey}, 
                4px 4px 12px -2.5px ${siteColors.darkGrey}`,
          }}
        >
          <Menu
            scrollToSection={scrollToSection}
            handleButtonClick={handleButtonClick}
          />
          <MobileMenu
            toggleDrawer={toggleDrawer}
            openMenu={openMenu}
            scrollToSection={scrollToSection}
            handleButtonClick={handleButtonClick}
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
}

export default AppAppBar;