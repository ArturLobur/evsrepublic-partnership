import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import CertificationIcon from "../../assets/certificationsIcon.svg";
import CardItem from "../../components/CardItem.tsx";
import SectionsHeader from "../../components/SectionsHeader.tsx";
import {containerSize} from "../../system/constants.ts";

const items = [
  {
    title: "Intro to EV Technology",
    mainDescription:
      "Gain a fundamental understanding of electric vehicle systems, components, and operation.",
    additionalDescription: [
      {
        list: "EV architecture, electric motors, battery technology, and charging systems.",
      },
      {
        list: "Participants will be able to identify and explain the core components and functions of electric vehicles.",
      },
    ],
  },
  {
    title: "Advanced Diagnostics",
    mainDescription:
      "Learn advanced diagnostic techniques to efficiently troubleshoot and repair electric vehicles.",
    additionalDescription: [
      {
        list: "Diagnostic tools, software usage, common issues, and troubleshooting methods.",
      },
      {
        list: "Participants will be able to perform detailed diagnostics and resolve complex EV issues.",
      },
    ],
  },
  {
    title: "EV Maintenance and Repair",
    mainDescription:
      "Master the essential skills required for effective maintenance and repair of electric vehicles.",
    additionalDescription: [
      {
        list: "Routine maintenance procedures, repair protocols, safety practices, and service intervals.",
      },
      {
        list: "Participants will be proficient in maintaining and repairing various EV models, ensuring they meet manufacturer standards.",
      },
    ],
  },
  {
    title: "Battery Management Systems",
    mainDescription:
      "Understand the intricacies of EV battery systems and how to manage them.",
    additionalDescription: [
      {
        list: "Battery chemistry, management systems, lifecycle, charging protocols, and thermal management.",
      },
      {
        list: "Participants will gain expertise in managing and servicing EV battery systems, enhancing their longevity and performance.",
      },
    ],
  },
  {
    title: "Tesla Drive Unit Maintenance and Repair",
    mainDescription:
      "Acquire specialized knowledge on the maintenance and repair of Tesla drive units.",
    additionalDescription: [
      {
        list: "Drive unit components, common issues, troubleshooting techniques, and repair protocols.",
      },
      {
        list: "Participants will be capable of diagnosing and repairing Tesla drive units, ensuring optimal performance and longevity.",
      },
    ],
  },
  {
    title: "EV Safety Protocols",
    mainDescription:
      "Ensure safe practices when working with high-voltage systems in electric vehicles.",
    additionalDescription: [
      {
        list: "High-voltage safety, personal protective equipment (PPE), emergency procedures, and first aid.",
      },
      {
        list: "Participants will be well-versed in safety protocols, minimizing risks associated with high-voltage EV systems.",
      },
    ],
  },
];

const examplesOfCertifications = [
  {
    title: "Certified EV Technician: ",
    description:
      "Demonstrates comprehensive knowledge and skills in EV maintenance and repair.",
  },
  {
    title: "Advanced EV Diagnostics Specialist:",
    description:
      "Validates expertise in performing complex diagnostics and troubleshooting for electric vehicles.",
  },
  {
    title: "EV Safety Certification:",
    description:
      "Certifies proficiency in safety protocols and practices when working with high-voltage systems.",
  },
];

const SectionEducationAndCertificates = () => (
  <Box
    id="education"
    sx={{
      pt: {xl: 4, lg: 0},
      color: "white",
      bgcolor: "#06090a",
      pb: 12,
    }}
  >
    <Container maxWidth={containerSize}>
      <SectionsHeader
        title="Education & Certificates"
        firstDescription="At EV’s Republic, we believe that knowledge is power, especially in the rapidly evolving world of electric vehicles."
        secondDescription="Our comprehensive education and certification programs are designed to equip auto service shop owners and their employees with the skills and credentials needed to excel in servicing electric vehicles."
      >
        <Grid
          container
          sx={{
            flexDirection: "column",
            justifyContent: "space-between",
            gap: {xs: 2, sm: 2.5},
          }}
        >
          {items.map((item, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}`}
              >
                <Box sx={{display: "flex", flexDirection: "column"}}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{fontSize: 18, fontWeight: 500, mb: 2}}
                    color="primary"
                  >
                    {item.title}
                  </Typography>
                  {item.mainDescription}
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{pt: 0}}>
                {item.additionalDescription.map((row, index) => (
                  <Typography key={index} sx={{mb: 2}}>
                    {row.list}
                  </Typography>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </SectionsHeader>
      <Box>
        <Typography component="h3" sx={{fontSize: 26, mb: 4}}>
          Examples of Certifications
        </Typography>
        <Grid
          container
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "stretch",
          }}
        >
          {examplesOfCertifications.map((e, index) => (
            <CardItem
              key={index}
              icon={<CertificationIcon />}
              title={e.title}
              description={e.description}
            />
          ))}
        </Grid>
      </Box>
    </Container>
  </Box>
);
export default SectionEducationAndCertificates;