import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import React from "react";

import logo from "../../assets/logo.png";
import {menuItems} from "../../system/constants.ts";

const logoStyle = {
  width: "133px",
  height: "auto",
  cursor: "pointer",
};

interface MenuProps {
  scrollToSection: (_sectionId: string) => void;
  onButtonClick: (_event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Menu: React.FC<MenuProps> = ({scrollToSection, onButtonClick}) => {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          ml: "-18px",
          px: 0,
        }}
      >
        <img
          id="logo"
          onClick={() => scrollToSection("logo")}
          src={logo}
          style={logoStyle}
          alt="logo"
        />
        <Box sx={{display: {xs: "none", md: "flex"}}}>
          {menuItems.map((item) => (
            <MenuItem
              key={item.name}
              onClick={() => scrollToSection(item.name)}
              sx={{py: "6px", px: "12px"}}
            >
              <Typography variant="body2" color="text.primary">
                {item.label}
              </Typography>
            </MenuItem>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: {xs: "none", md: "flex"},
          gap: 0.5,
          alignItems: "center",
        }}
      >
        <Button
          color="primary"
          variant="text"
          size="small"
          name="sign-in"
          onClick={onButtonClick}
        >
          Sign in
        </Button>
        <Button
          color="primary"
          variant="contained"
          size="small"
          name="sign-up"
          onClick={onButtonClick}
        >
          Sign up
        </Button>
      </Box>
    </>
  );
};

export default Menu;