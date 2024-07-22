import {createTheme} from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import {ThemeProvider} from "@mui/material/styles";
import {createFileRoute} from "@tanstack/react-router";

import About from "../components/About.tsx";
import AppAppBar from "../components/AppAppBar.tsx";
import CoursesAndCertifications from "../components/CoursesAndCertifications.tsx";
import Footer from "../components/Footer.tsx";
import KeyFeatures from "../components/KeyFeatures.tsx";
import Marketing from "../components/Marketing.tsx";
import Service from "../components/Service.tsx";
import {siteColors} from "../system/constants.ts";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: siteColors.neon,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppAppBar />
      <About />
      <Box>
        {/*<LogoCollection />*/}
        <Marketing />
        <Divider />
        <KeyFeatures />
        <Divider />
        <Service />
        <Divider />
        <CoursesAndCertifications />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}