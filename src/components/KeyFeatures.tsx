import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import DiagnosticToolRoundedIcon from "@mui/icons-material/BuildCircleRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import UpdateRoundedIcon from "@mui/icons-material/UpdateRounded";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const items = [
  {
    icon: <ConstructionRoundedIcon />,
    title: "Accurate Repair Data",
    description:
      "Access comprehensive and up-to-date repair times for different Tesla models and components.\n" +
      "Improved Efficiency: Streamline your repair processes by providing precise repair estimates to your customers, reducing service times and increasing throughput.\n" +
      "Competitive Edge: Stay ahead of the competition with specialized knowledge in Tesla repairs.\n",
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: "Detailed Description",
    description:
      "The Tesla Labor Times project includes a user-friendly interface where you can quickly find the labor times for specific Tesla components. The database is continuously updated to reflect the latest repair standards and practices. This tool is invaluable for ensuring that your service shop operates with the highest level of efficiency and accuracy.\n",
  },
  {
    icon: <DiagnosticToolRoundedIcon />,
    title: "Diagnostics",
    description:
      "Perform advanced diagnostics remotely to quickly identify and resolve issues with EVs.\n" +
      "Use state-of-the-art tools and software to diagnose problems without the need for a physical inspection.\n",
  },
  {
    icon: <UpdateRoundedIcon />,
    title: "Programming",
    description:
      "Access remote programming services to update and configure EV systems.\n" +
      "Ensure that your customers’ vehicles are running the latest software and configurations.\n",
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: "Consulting",
    description:
      "Receive expert advice and consulting to optimize your operations and tackle complex technical problems.\n" +
      "Benefit from our team’s extensive knowledge and experience in the EV industry.\n",
  },
  {
    icon: <SpeedRoundedIcon />,
    title: "Convenience",
    description:
      "Diagnose and resolve issues without the need for physical presence, saving time and resources.\n" +
      "Speed: Quickly identify and troubleshoot problems, minimizing vehicle downtime.\n" +
      "Cost Savings: Reduce travel and labor costs with efficient remote solutions.\n" +
      "Rent Diagnostic Devices\n" +
      "Access State-of-the-Art Diagnostic Tools Without the Upfront Investment",
  },
];

export default function KeyFeatures() {
  return (
    <Box
      id="keyFeatures"
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
        <Typography
          variant="body1"
          textAlign="center"
          color="text.secondary"
          sx={{mb: {xs: 2, sm: 4}}}
        >
          Stay ahead in the rapidly evolving EV industry by renting the latest
          diagnostic devices from EVSREPUBLIC.com. Our rental service provides
          you with access to cutting-edge technology without the significant
          capital investment required for purchasing equipment.
        </Typography>
      </Container>
    </Box>
  );
}