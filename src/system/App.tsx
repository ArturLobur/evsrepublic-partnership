import Footer from "../sections/Footer/Footer.tsx";
import Header from "../sections/Header/Header.tsx";
import SectionAbout from "../sections/SectionAbout/SectionAbout.tsx";
import SectionEducationAndCertificates from "../sections/SectionEducationAndSertificates/SectionEducationAndCertificates.tsx";
import SectionHowItWorks from "../sections/SectionHowItWorks/SectionHowItWorks.tsx";
import SectionLaborTimes from "../sections/SectionLaborTimes/SectionLaborTimes.tsx";
import SectionMarketing from "../sections/SectionMarketing/SectionMarketing.tsx";
import RemoteServicesBenefits from "../sections/SectionRemoteServices/RemoteServicesBenefits.tsx";
import SectionRemoteServices from "../sections/SectionRemoteServices/SectionRemoteServices.tsx";

const App = () => (
  <>
    <Header />
    <SectionAbout />
    <SectionLaborTimes />
    <SectionRemoteServices />
    <RemoteServicesBenefits />
    <SectionEducationAndCertificates />
    <SectionMarketing />
    <SectionHowItWorks />
    <Footer />
  </>
);

export default App;