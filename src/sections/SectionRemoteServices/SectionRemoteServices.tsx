import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import ConsultingIcon from "../../assets/consultingIcon.svg";
import DiagnosticIcon from "../../assets/diagnosticsIcon.svg";
import ProgrammingIcon from "../../assets/programmingIcon.svg";
import CardItem from "../../components/CardItem.tsx";
import HeaderForSections from "../../components/HeaderForSections.tsx";
import {containerSize} from "../../system/constants.ts";

const operations = [
  {
    icon: <DiagnosticIcon />,
    title: "Diagnostic",
    description:
      "Perform advanced diagnostics remotely to quickly identify and resolve issues with EVs. Use state-of-the-art tools and software to diagnose problems without the need for a physical inspection.",
  },
  {
    icon: <ProgrammingIcon />,
    title: "Programming",
    description:
      "Access remote programming services to update and configure EV systems. Ensure that your customers’ vehicles are running the latest software and configurations.",
  },
  {
    icon: <ConsultingIcon />,
    title: "Support",
    description:
      "Receive expert advice and consulting to optimize your operations and tackle complex technical problems. Benefit from our team’s extensive knowledge and experience in the EV industry.",
  },
];

const SectionRemoteServices = () => (
  <Container maxWidth={containerSize} id="service">
    <HeaderForSections
      title="Remote Services"
      firstDescription="Enhance Your Operations with Advanced Remote Services."
      secondDescription="Knowledge is power, especially in the fast-evolving world of electric
          vehicles. At our company we provide access to high-quality training
          courses and certification programs designed to equip you and your
          staff with the skills needed to excel in the EV industry."
    >
      <Grid
        container
        direction="row"
        sx={{
          flexDirection: {xs: "column", md: "row"},
          justifyContent: "space-between",
          alignItems: "stretch",
          gap: 3,
        }}
      >
        {operations.map((item) => (
          <CardItem
            key={item.title}
            variant="elevation"
            icon={item.icon}
            title={item.title}
            description={item.description}
            backgroundColor="rgba(10, 10, 17, 0.3)"
          />
        ))}
      </Grid>
    </HeaderForSections>
  </Container>
);
export default SectionRemoteServices;