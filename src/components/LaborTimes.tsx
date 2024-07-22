import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import DiagnosticToolRoundedIcon from "@mui/icons-material/BuildCircleRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import teslalabortime from "../assets/teslalabortime.png";

const teslalabortimeStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "4px",
};

const items = [
  {
    icon: <ConstructionRoundedIcon />,
    title: "Accurate Repair Data",
    description:
      "Gain access to up-to-date labor times for various Tesla models. This data is continually updated to reflect the latest repair standards and practices.",
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: "User-Friendly Interface",
    description:
      "The platform is designed for ease of use, allowing you to quickly find the information you need.",
  },
  {
    icon: <DiagnosticToolRoundedIcon />,
    title: "Detailed Components Breakdown:",
    description:
      "View detailed repair times for specific Tesla components, helping you plan and execute repairs more efficiently.",
  },
];

const benefitsItems = [
  {
    icon: <ConstructionRoundedIcon />,
    title: "Improved Efficiency",
    description:
      "Provide precise repair estimates, reducing service times and increasing throughput in your shop.",
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: "Enhanced Customer Satisfaction",
    description:
      "Deliver accurate and reliable service timelines, improving customer trust and satisfaction.",
  },
  {
    icon: <DiagnosticToolRoundedIcon />,
    title: "Competitive Edge",
    description:
      "Stay ahead of competitors by offering specialized knowledge and efficient repair services for Tesla vehicles.",
  },
  {
    icon: <DiagnosticToolRoundedIcon />,
    title: "Cost Savings",
    description:
      "Optimize labor costs by accurately estimating the time required for each repair, avoiding overestimation or underestimation.\n",
  },
];

const howItWorks = [
  {
    title: "1. Log In:",
    description:
      "Access the Tesla Labor Times platform through your EVSREPUBLIC account.",
  },
  {
    title: "2. Search:",
    description:
      "Enter the model and component details to find the relevant repair times.",
  },
  {
    title: "3. View Data:",
    description:
      "Browse the detailed breakdown of labor times for various repairs.",
  },
  {
    title: "4. Plan Repairs: ",
    description:
      "Use the data to schedule and manage your repair tasks efficiently.",
  },
];

export default function LaborTimes() {
  return (
    <Box
      id="laborTimes"
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
            Optimize Your Service Efficiency with&nbsp;
            <Typography
              component="span"
              variant="h4"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? "primary.main"
                    : "primary.light",
              }}
            >
              Tesla Labor Times
            </Typography>
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            color="text.secondary"
            sx={{mb: {xs: 2, sm: 4}}}
          >
            One of the standout features of our partnership is access to the
            Tesla Labor Times project. This resource provides accurate and
            detailed repair times for various Tesla components, ensuring that
            your service operations are efficient and reliable.
          </Typography>
        </Box>
        <Box
          sx={{
            mt: 2,
            width: "100%",
          }}
        >
          <Typography component="h2" variant="h4">
            What is Tesla Labor Times?
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{mb: {xs: 2, sm: 4}}}
          >
            Tesla Labor Times is a comprehensive database that offers precise
            repair times for different Tesla models and their components. This
            tool is essential for any auto service shop looking to streamline
            its repair processes and provide accurate estimates to customers.
          </Typography>
        </Box>
        <Box
          sx={{
            width: {sm: "100%", md: "60%"},
            textAlign: {sm: "left", md: "center"},
          }}
        >
          <Typography component="h2" variant="h4">
            Key Features:
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
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
                <Box sx={{opacity: "50%"}}>{item.icon}</Box>
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
        <Box
          sx={{
            width: {sm: "100%", md: "60%"},
            textAlign: {sm: "left", md: "center"},
          }}
        >
          <Typography component="h2" variant="h4">
            Benefits of Using Tesla Labor Times:
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {benefitsItems.map((item, index) => (
            <Grid item xs={12} sm={4} md={3} key={index}>
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
                <Box sx={{opacity: "50%"}}>{item.icon}</Box>
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
        <Box
          sx={{
            width: {sm: "100%", md: "60%"},
            textAlign: {sm: "left", md: "center"},
          }}
        >
          <Typography component="h2" variant="h4">
            Key Features:
          </Typography>
        </Box>
        <img
          style={teslalabortimeStyle}
          src={teslalabortime}
          alt="teslalabortime"
        />
        <Typography
          variant="body1"
          textAlign="center"
          color="text.secondary"
          sx={{mb: {xs: 2, sm: 4}}}
        >
          The screenshot above illustrates the user-friendly interface of the
          Tesla Labor Times tool. You can see how repair times are broken down
          by specific components and models, making it easy to access the
          information you need.
        </Typography>
        <Box
          sx={{
            width: {sm: "100%", md: "60%"},
            textAlign: {sm: "left", md: "center"},
          }}
        >
          <Typography component="h2" variant="h4">
            How It Works:
          </Typography>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{width: "100%", display: "flex"}}
          >
            {howItWorks.map(({title, description}, index) => (
              <Card
                key={index}
                variant="outlined"
                sx={{
                  p: 2,
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
        </Box>
      </Container>
    </Box>
  );
}