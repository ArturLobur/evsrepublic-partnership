import {styled} from "@mui/material";
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
  marginTop: "-12px",
};

interface MenuProps {
  scrollToSection: (_sectionId: string) => void;
  onButtonClick: (_event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Menu: React.FC<MenuProps> = ({scrollToSection, onButtonClick}) => {
  return (
    <Box sx={{width: "100%"}}>
      <ButtonsContainer sx={{display: {xs: "none", md: "flex"}}}>
        <ButtonStyled
          color="secondary"
          variant="outlined"
          size="small"
          name="sign-in"
          onClick={onButtonClick}
        >
          Sign up
        </ButtonStyled>
        <ButtonStyled
          color="primary"
          variant="contained"
          size="small"
          name="sign-up"
          onClick={onButtonClick}
        >
          Sign in
        </ButtonStyled>
      </ButtonsContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <img
          id="logo"
          onClick={() => scrollToSection("logo")}
          src={logo}
          style={logoStyle}
          alt="logo"
        />
        <MenuContainer sx={{display: {xs: "none", md: "flex"}}}>
          {menuItems.map((item) => (
            <MenuItem
              sx={{p: 0, ml: 2}}
              key={item.name}
              onClick={() => scrollToSection(item.name)}
            >
              <Typography variant="body2" color="text.primary">
                {item.label}
              </Typography>
            </MenuItem>
          ))}
        </MenuContainer>
      </Box>
    </Box>
  );
};

const ButtonsContainer = styled(Box)({
  display: "flex",
  justifyContent: "end",
  gap: 15,
});

const MenuContainer = styled(Box)({
  display: "flex",
  justifyContent: "end",
  gap: 2,
  paddingBottom: 18,
});

const ButtonStyled = styled(Button)({
  padding: "11px 15px",
  fontSize: 12,
  lineHeight: "14px",
  borderRadius: 30,
});

export default Menu;