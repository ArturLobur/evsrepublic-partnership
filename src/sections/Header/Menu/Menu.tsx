import {styled} from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import React from "react";

import logo from "../../../assets/logo.png";
import CustomButton from "../../../components/CustomButton.tsx";
import {menuItems} from "../../../system/constants.ts";

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
        <CustomButton
          color="primary"
          variant="contained"
          size="small"
          name="sign-up"
          onClick={onButtonClick}
        >
          Sign up
        </CustomButton>
        <CustomButton
          color="secondary"
          variant="outlined"
          size="small"
          name="sign-in"
          onClick={onButtonClick}
        >
          Sign in
        </CustomButton>
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
            <Link
              underline="hover"
              variant="body2"
              color="text.primary"
              sx={{p: 0, ml: 2, cursor: "pointer"}}
              key={item.name}
              onClick={() => scrollToSection(item.name)}
            >
              {item.label}
            </Link>
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

export default Menu;