import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import ConsultingIcon from "../../assets/consultingIcon.svg";
import DiagnosticIcon from "../../assets/diagnosticsIcon.svg";
import ProgrammingIcon from "../../assets/programmingIcon.svg";
import CardItem from "../../components/CardItem.tsx";

const operations = [
  {
    icon: <DiagnosticIcon />,
    title: "Diagnoctic",
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
    title: "Consulting",
    description:
      "Receive expert advice and consulting to optimize your operations and tackle complex technical problems. Benefit from our team’s extensive knowledge and experience in the EV industry.",
  },
];

const SectionRemoteServices = () => (
  <Container maxWidth="xl">
    <Grid container spacing={4} sx={{pt: 12, mb: 12}}>
      <Grid item xs={12}>
        <Typography
          variant="h3"
          color="primary"
          sx={{fontSize: 48, lineHeight: "51px", fontWeight: 400}}
        >
          Remote Services
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography sx={{fontSize: 26, lineHeight: "36px", fontWeight: 400}}>
          Enhance Your Operations with Advanced Remote Services.
        </Typography>
      </Grid>
      <Grid item xs={6} mb={7.5}>
        <Typography
          color="text.secondary"
          sx={{fontSize: 16, lineHeight: "24px", fontWeight: 400}}
        >
          Knowledge is power, especially in the fast-evolving world of electric
          vehicles. At our company we provide access to high-quality training
          courses and certification programs designed to equip you and your
          staff with the skills needed to excel in the EV industry.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "stretch",
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
      </Grid>
    </Grid>
  </Container>
);
export default SectionRemoteServices;