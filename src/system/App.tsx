import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import {createTheme} from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import {ThemeProvider} from "@mui/material/styles";

import About from "../components/About.tsx";
import AppAppBar from "../components/AppAppBar.tsx";
import CoursesAndCertifications from "../components/CoursesAndCertifications.tsx";
import DialogAlert from "../components/DialogAlert.tsx";
import Footer from "../components/Footer.tsx";
import HowItWorks from "../components/HowItWorks.tsx";
import LaborTimes from "../components/LaborTimes.tsx";
import Marketing from "../components/Marketing.tsx";
import Service from "../components/Service.tsx";
import {DialogProvider} from "../store/DialogContext.tsx";
import {siteColors} from "./constants.ts";

const App = () => {
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
          <HowItWorks />
          <Footer />
        </Box>
        <DialogAlert />
      </DialogProvider>
    </ThemeProvider>
  );
};

export default App;