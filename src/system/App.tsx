import {createTheme} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import {ThemeProvider} from "@mui/material/styles";

import DialogAlert from "../components/DialogAlert.tsx";
import Header from "../sections/Header/Header.tsx";
import SectionAbout from "../sections/SectionAbout/SectionAbout.tsx";
import SectionLaborTimes from "../sections/SectionLaborTimes/SectionLaborTimes.tsx";
import SectionRemoteServices from "../sections/SectionRemoteServices/SectionRemoteServices.tsx";
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
        <SectionAbout />
        <SectionLaborTimes />
        <SectionRemoteServices />
        <DialogAlert />
      </DialogProvider>
    </ThemeProvider>
  );
};

export default App;