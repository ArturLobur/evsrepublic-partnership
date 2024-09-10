import {createTheme} from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import {ThemeProvider} from "@mui/material/styles";

import DialogAlert from "../components/DialogAlert.tsx";
import About from "../sections/About.tsx";
import CoursesAndCertifications from "../sections/CoursesAndCertifications.tsx";
import Footer from "../sections/Footer.tsx";
import Header from "../sections/Header.tsx";
import HowItWorks from "../sections/HowItWorks.tsx";
import LaborTimes from "../sections/LaborTimes.tsx";
import Marketing from "../sections/Marketing.tsx";
import Service from "../sections/Service.tsx";
import {DialogProvider} from "../store/DialogContext.tsx";
import {siteColors} from "./constants.ts";

const App = () => {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: siteColors.neon,
      },
      secondary: {
        main: siteColors.secondary,
      },
    },
    typography: {
      allVariants: {
        fontFamily: "DM Sans",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <DialogProvider>
        <CssBaseline />
        <Header />
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