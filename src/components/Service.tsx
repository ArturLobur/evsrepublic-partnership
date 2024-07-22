import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const items = [
  {
    title: "Affordability:",
    description:
      "Lower your operational costs by renting instead of buying expensive diagnostic equipment.\n" +
      "Flexibility: Rent the specific tools you need, only when you need them, ensuring maximum flexibility and efficiency.\n" +
      "Latest Technology: Always have access to the most advanced diagnostic tools, keeping your service capabilities up-to-date.\n",
  },
  {
    title: "Comprehensive List:",
    description:
      " We offer a wide range of diagnostic devices suitable for various EV models, ensuring you have the right tools for the job.\n" +
      "Education & Certificates\n" +
      "Advance Your Career with Specialized Training and Certification Programs\n",
  },
];

export default function Service() {
  return (
    <Container id="service" sx={{py: {xs: 8, sm: 16}}}>
      <Grid container>
        <Grid item>
          <Typography
            component="h2"
            variant="h4"
            color="text.primary"
            textAlign="center"
            marginBottom="2rem"
          >
            Service:
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
            electric vehicles. At EVSREPUBLIC.com, we provide access to
            high-quality training courses and certification programs designed to
            equip you and your staff with the skills needed to excel in the EV
            industry.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}