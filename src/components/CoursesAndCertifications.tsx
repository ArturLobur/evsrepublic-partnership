import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import {List, ListItem} from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const items = [
  {
    icon: <AutoFixHighRoundedIcon />,
    title: "Intro to EV Technology",
    description: [
      {
        list: "Overview: Gain a fundamental understanding of electric vehicle systems, components, and operation.",
      },
      {
        list: "Key Topics: EV architecture, electric motors, battery technology, and charging systems.",
      },
      {
        list: "Outcome: Participants will be able to identify and explain the core components and functions of electric vehicles.",
      },
    ],
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: "Advanced Diagnostics",
    description: [
      {
        list: "Overview: Learn advanced diagnostic techniques to efficiently troubleshoot and repair electric vehicles.",
      },
      {
        list: "Key Topics: Diagnostic tools, software usage, common issues, and troubleshooting methods.",
      },
      {
        list: "Outcome: Participants will be able to perform detailed diagnostics and resolve complex EV issues.",
      },
    ],
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: "EV Maintenance and Repair",
    description: [
      {
        list: "Overview: Master the essential skills required for effective maintenance and repair of electric vehicles.",
      },
      {
        list: "Key Topics: Routine maintenance procedures, repair protocols, safety practices, and service intervals.",
      },
      {
        list: "Outcome: Participants will be proficient in maintaining and repairing various EV models, ensuring they meet manufacturer standards.",
      },
    ],
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: "Battery Management Systems",
    description: [
      {
        list: "Overview: Understand the intricacies of EV battery systems and how to manage them.",
      },
      {
        list: "Key Topics: Battery chemistry, management systems, lifecycle, charging protocols, and thermal management.",
      },
      {
        list: "Outcome: Participants will gain expertise in managing and servicing EV battery systems, enhancing their longevity and performance.",
      },
    ],
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: "EV Safety Protocols",
    description: [
      {
        list: "Overview: Ensure safe practices when working with high-voltage systems in electric vehicles.",
      },
      {
        list: "Key Topics: High-voltage safety, personal protective equipment (PPE), emergency procedures, and first aid.",
      },
      {
        list: "Outcome: Participants will be well-versed in safety protocols, minimizing risks associated with high-voltage EV systems.",
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

export default function CoursesAndCertifications() {
  return (
    <Box
      id="coursesAndCertifications"
      sx={{
        pt: {xs: 4, sm: 12},
        pb: {xs: 8, sm: 16},
        color: "white",
        bgcolor: "#06090a",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: {xs: 3, sm: 6},
        }}
      >
        <Box
          sx={{
            width: {sm: "100%", md: "60%"},
            textAlign: {sm: "left", md: "center"},
          }}
        >
          <Typography
            textAlign="center"
            variant="h1"
            sx={{
              fontSize: "clamp(3rem, 10vw, 4rem)",
              color: (theme) =>
                theme.palette.mode === "light"
                  ? "primary.main"
                  : "primary.light",
            }}
          >
            Education & Certificates
          </Typography>
        </Box>
        <Typography
          component="h2"
          variant="h6"
          color="text.secondary"
          textAlign="center"
          sx={{mb: {xs: 2, sm: 4}}}
        >
          At EV’s Republic, we believe that knowledge is power, especially in
          the rapidly evolving world of electric vehicles. Our comprehensive
          education and certification programs are designed to equip auto
          service shop owners and their employees with the skills and
          credentials needed to excel in servicing electric vehicles.
        </Typography>

        <Typography
          component="h2"
          variant="h4"
          color="text.primary"
          textAlign="center"
          sx={{mb: {xs: 2, sm: 4}}}
        >
          Courses and Certifications Offered:
        </Typography>
        <Grid
          container
          spacing={2.5}
          display="flex"
          justifyContent="space-evenly"
        >
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: "100%",
                  border: "1px solid",
                  borderColor: "grey.800",
                  background: "transparent",
                  backgroundColor: "grey.900",
                }}
              >
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{color: "grey.400"}}>
                    <List>
                      {item.description.map((desc, index) => (
                        <ListItem key={index}>{desc.list}</ListItem>
                      ))}
                    </List>
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Typography
          component="h2"
          variant="h4"
          color="text.primary"
          textAlign="center"
          sx={{mb: {xs: 2, sm: 4}, mt: 5}}
        >
          Examples of Certifications:
        </Typography>
        <Grid
          container
          spacing={2.5}
          display="flex"
          justifyContent="space-evenly"
        >
          {examplesOfCertifications.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: "100%",
                  border: "1px solid",
                  borderColor: "grey.800",
                  background: "transparent",
                  backgroundColor: "grey.900",
                }}
              >
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{color: "grey.400"}}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}