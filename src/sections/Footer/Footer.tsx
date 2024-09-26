import {styled} from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

import logo from "../../assets/logo.png";
import {containerSize, menuItems} from "../../system/constants.ts";

const logoStyle = {
  width: "133px",
  height: "auto",
  cursor: "pointer",
  marginTop: "-12px",
};

export default function Footer() {
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
    }
  };

  return (
    <Box
      id="education"
      sx={{
        pt: {xl: 4, lg: 0},
        color: "white",
        bgcolor: "#06090a",
        pb: 9,
      }}
    >
      <Container maxWidth={containerSize}>
        <Grid container gap={6}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              id="logo"
              onClick={() => scrollToSection("logo")}
              src={logo}
              style={logoStyle}
              alt="logo"
            />
          </Grid>
          <Grid item xs={12}>
            <MenuContainer
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: {xs: "wrap", sm: "nowrap"},
                gap: {xs: 3, sm: 2},
              }}
            >
              {menuItems.map((item) => (
                <Link
                  underline="hover"
                  variant="body2"
                  color="text.primary"
                  sx={{
                    p: 0,
                    cursor: "pointer",
                    fontSize: 16,
                    fontWeight: 500,
                  }}
                  key={item.name}
                  onClick={() => scrollToSection(item.name)}
                >
                  {item.label}
                </Link>
              ))}
            </MenuContainer>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

const MenuContainer = styled(Box)({
  display: "flex",
  justifyContent: "end",
  gap: 2,
  paddingBottom: 18,
});