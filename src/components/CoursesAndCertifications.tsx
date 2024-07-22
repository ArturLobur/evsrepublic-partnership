import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const items = [
  {
    icon: <AutoFixHighRoundedIcon />,
    title: "Intro to EV Technology:",
    description:
      "Gain a fundamental understanding of electric vehicle systems and components.\n" +
      "Advanced Diagnostics: Learn advanced diagnostic techniques to efficiently troubleshoot and repair EVs.\n" +
      "EV Maintenance and Repair: Master the essential skills required for effective EV maintenance and repair.\n" +
      "Battery Management Systems: Understand the intricacies of EV battery systems and how to manage them.\n" +
      "EV Safety Protocols: Ensure safe practices when working with high-voltage systems in electric vehicles.\n",
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: "Basic EV Systems:",
    description:
      "A comprehensive introduction to the core components and functioning of electric vehicles.\n" +
      "Battery Management Systems: Detailed training on the management and maintenance of EV batteries.\n" +
      "EV Safety Protocols: Critical safety procedures and best practices for handling high-voltage EV systems.\n",
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
          <Typography component="h2" variant="h4">
            Courses and Certifications Offered:
          </Typography>
        </Box>
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
                <Box textAlign="right" sx={{opacity: "50%"}}>
                  {item.icon}
                </Box>
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
        <Typography
          component="h2"
          variant="h6"
          color="text.primary"
          textAlign="center"
          sx={{mb: {xs: 2, sm: 4}}}
        >
          Industry-recognized certifications that enhance your professional
          credibility and open up new career opportunities.
          <br />
          Join Us Don't miss this opportunity to be at the forefront of the
          electric vehicle revolution.
          <br />
          Register Now and Secure Your Spot!
        </Typography>
      </Container>
    </Box>
  );
}