import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import MenuItem from "@mui/material/MenuItem";
import React from "react";

interface MobileMenuProps {
  toggleDrawer: (_newOpen: boolean) => () => void;
  openMenu: boolean;
  scrollToSection: (_sectionId: string) => void;
  handleButtonClick: (_event: React.MouseEvent<HTMLButtonElement>) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  toggleDrawer,
  openMenu,
  scrollToSection,
  handleButtonClick,
}) => {
  return (
    <Box sx={{display: {sm: "", md: "none"}}}>
      <Button
        variant="text"
        color="primary"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        sx={{minWidth: "30px", p: "4px"}}
      >
        <MenuIcon />
      </Button>
      <Drawer anchor="right" open={openMenu} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            minWidth: "60dvw",
            p: 2,
            backgroundColor: "background.paper",
            flexGrow: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              flexGrow: 1,
            }}
          ></Box>
          <MenuItem onClick={() => scrollToSection("features")}>
            Features
          </MenuItem>
          <MenuItem onClick={() => scrollToSection("testimonials")}>
            Testimonials
          </MenuItem>
          <MenuItem onClick={() => scrollToSection("highlights")}>
            Highlights
          </MenuItem>
          <MenuItem onClick={() => scrollToSection("pricing")}>
            Pricing
          </MenuItem>
          <MenuItem onClick={() => scrollToSection("faq")}>FAQ</MenuItem>
          <Divider />
          <MenuItem>
            <Button
              color="primary"
              variant="contained"
              onClick={handleButtonClick}
              sx={{width: "100%"}}
              name="sign-up"
            >
              Sign up
            </Button>
          </MenuItem>
          <MenuItem>
            <Button
              color="primary"
              variant="outlined"
              onClick={handleButtonClick}
              sx={{width: "100%"}}
              name="sign-in"
            >
              Sign in
            </Button>
          </MenuItem>
        </Box>
      </Drawer>
    </Box>
  );
};

export default MobileMenu;