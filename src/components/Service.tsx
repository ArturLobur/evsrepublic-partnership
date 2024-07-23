import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const items = [
  {
    title: "Diagnostics:",
    description:
      "Perform advanced diagnostics remotely to quickly identify and resolve issues with EVs.\n" +
      "Use state-of-the-art tools and software to diagnose problems without the need for a physical inspection.\n",
  },
  {
    title: "Programming:",
    description:
      "Access remote programming services to update and configure EV systems.\n" +
      "Ensure that your customers’ vehicles are running the latest software and configurations.\n",
  },
  {
    title: "Consulting:",
    description:
      "Receive expert advice and consulting to optimize your operations and tackle complex technical problems.\n" +
      "Benefit from our team’s extensive knowledge and experience in the EV industry.\n",
  },
];

const benefits = [
  {
    title: "Convenience:",
    description:
      "Diagnose and resolve issues without the need for physical presence, saving time and resources.\n",
  },
  {
    title: "Speed:",
    description:
      "Quickly identify and troubleshoot problems, minimizing vehicle downtime.",
  },
  {
    title: "Cost Savings:",
    description:
      "Reduce travel and labor costs with efficient remote solutions.",
  },
];

export default function Service() {
  return (
    <Container id="service" sx={{py: {xs: 8, sm: 16}}}>
      <Grid container>
        <Grid item>
          <Typography
            textAlign="center"
            variant="h1"
            sx={{
              mb: 6,
              fontSize: "clamp(3rem, 10vw, 4rem)",
              color: (theme) =>
                theme.palette.mode === "light"
                  ? "primary.main"
                  : "primary.light",
            }}
          >
            Remote Services
          </Typography>
          <Typography textAlign="center" component="h2" variant="h4">
            Enhance Your Operations with Advanced Remote Services
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            color="text.secondary"
            sx={{mt: {xs: 2, sm: 4}, mb: {xs: 2, sm: 4}}}
          >
            Our remote services are designed to support your auto service shop
            with the latest technology and expert guidance. These services
            include:
          </Typography>
          <Stack
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: {xs: "column", md: "row"},
            }}
          >
            {items.map(({title, description}, index) => (
              <Card
                key={index}
                variant="outlined"
                sx={{
                  p: 3,
                  height: "fit-content",
                  width: "100%",
                  background: "none",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    textAlign: "left",
                    flexDirection: {xs: "column", md: "row"},
                    alignItems: {md: "center"},
                    gap: 2.5,
                  }}
                >
                  <Box sx={{textTransform: "none"}}>
                    <Typography
                      color="text.primary"
                      variant="body2"
                      fontWeight="bold"
                    >
                      {title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      sx={{my: 0.5}}
                    >
                      {description}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
          <Typography
            variant="body1"
            textAlign="center"
            color="text.primary"
            sx={{mt: {xs: 2, sm: 4}}}
          >
            Knowledge is power, especially in the fast-evolving world of
            electric vehicles. At our company we provide access to high-quality
            training courses and certification programs designed to equip you
            and your staff with the skills needed to excel in the EV industry.
          </Typography>

          <Typography
            textAlign="center"
            component="h2"
            variant="h4"
            sx={{mt: 14, mb: 6}}
          >
            Benefits of Remote Services
          </Typography>
          <Stack
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: {xs: "column", md: "row"},
            }}
          >
            {benefits.map(({title, description}, index) => (
              <Card
                key={index}
                variant="outlined"
                sx={{
                  p: 3,
                  height: "fit-content",
                  width: "100%",
                  background: "none",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    textAlign: "left",
                    flexDirection: {xs: "column", md: "row"},
                    alignItems: {md: "center"},
                    gap: 2.5,
                  }}
                >
                  <Box sx={{textTransform: "none"}}>
                    <Typography
                      color="text.primary"
                      variant="body2"
                      fontWeight="bold"
                    >
                      {title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      sx={{my: 0.5}}
                    >
                      {description}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>

          <Typography
            variant="body1"
            textAlign="center"
            color="text.primary"
            sx={{mt: {xs: 2, sm: 4}}}
          >
            Stay ahead in the rapidly evolving EV industry by renting the latest
            diagnostic devices from us. Our rental service provides you with
            access to cutting-edge technology without the significant capital
            investment required for purchasing equipment. Lower your operational
            costs by renting instead of buying expensive diagnostic equipment.
            Rent the specific tools you need, only when you need them, ensuring
            maximum flexibility and efficiency. Always have access to the most
            advanced diagnostic tools, keeping your service capabilities
            up-to-date. We offer a wide range of diagnostic devices suitable for
            various EV models, ensuring you have the right tools for the job.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}