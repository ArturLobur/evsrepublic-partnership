import CssBaseline from "@mui/material/CssBaseline";
import {ThemeProvider} from "@mui/material/styles";

import DialogAlert from "../components/DialogAlert.tsx";
import Footer from "../sections/Footer/Footer.tsx";
import Header from "../sections/Header/Header.tsx";
import SectionAbout from "../sections/SectionAbout/SectionAbout.tsx";
import SectionEducationAndCertificates from "../sections/SectionEducationAndSertificates/SectionEducationAndCertificates.tsx";
import SectionHowItWorks from "../sections/SectionHowItWorks/SectionHowItWorks.tsx";
import SectionLaborTimes from "../sections/SectionLaborTimes/SectionLaborTimes.tsx";
import SectionMarketing from "../sections/SectionMarketing/SectionMarketing.tsx";
import RemoteServicesBenefits from "../sections/SectionRemoteServices/RemoteServicesBenefits.tsx";
import SectionRemoteServices from "../sections/SectionRemoteServices/SectionRemoteServices.tsx";
import SectionSema from "../sections/SectionSema/SectionSema.tsx";
import {DialogProvider} from "../store/DialogContext.tsx";
import {theme} from "./appTheme.ts";

const App = () => (
  <ThemeProvider theme={theme}>
    <DialogProvider>
      <CssBaseline />
      <Header />
      <SectionAbout />
      <SectionLaborTimes />
      <SectionRemoteServices />
      <RemoteServicesBenefits />
      <SectionEducationAndCertificates />
      <SectionMarketing />
      <SectionHowItWorks />
      {/*<SectionSema />*/}
      <Footer />
      <DialogAlert />
    </DialogProvider>
  </ThemeProvider>
);

export default App;