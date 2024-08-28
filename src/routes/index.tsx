import {createTheme} from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import {ThemeProvider} from "@mui/material/styles";
import {createFileRoute} from "@tanstack/react-router";

import About from "../components/About.tsx";
import AppAppBar from "../components/AppAppBar.tsx";
import CoursesAndCertifications from "../components/CoursesAndCertifications.tsx";
import DialogAlert from "../components/DialogAlert.tsx";
import Footer from "../components/Footer.tsx";
import LaborTimes from "../components/LaborTimes.tsx";
import Marketing from "../components/Marketing.tsx";
import Service from "../components/Service.tsx";
import {DialogProvider} from "../store/DialogContext.tsx";
import {siteColors} from "../system/constants.ts";
import HowItWorks from "../components/HowItWorks.tsx";

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
    typography: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <DialogProvider>
        <CssBaseline />
        <AppAppBar />
        <About />
        <Box>
          {/*  <LogoCollection />*/}

          <Divider />
          <LaborTimes />
          <Divider />
          <Service />
          <Divider />
          <CoursesAndCertifications />

          <Marketing />
          <Divider />
          <HowItWorks/>
          <Footer />
        </Box>
        <DialogAlert />
      </DialogProvider>
    </ThemeProvider>
  );
}