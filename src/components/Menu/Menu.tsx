import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import React from "react";

import {useAuth} from "../../contexts/authContext.tsx";
import {menuItems} from "../../system/constants.ts";
import UserCabinet from "../UserCabinet/UserCabinet.tsx";

const logoStyle = {
  width: "75px",
  height: "auto",
  cursor: "pointer",
  marginLeft: "24px",
  paddingRight: "12px",
};

interface MenuProps {
  scrollToSection: (_sectionId: string) => void;
  onButtonClick: (_event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Menu: React.FC<MenuProps> = ({scrollToSection, onButtonClick}) => {
  //@ts-ignore
  const {userLoggedIn} = useAuth();

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
          src={
            "https://cdn.prod.website-files.com/62a6eccb7f5d4d6907ac92e9/62a716addbf8bc00a54852f8_evs-logo.svg"
          }
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
        {userLoggedIn ? (
          <UserCabinet />
        ) : (
          <>
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
          </>
        )}
      </Box>
    </>
  );
};

export default Menu;