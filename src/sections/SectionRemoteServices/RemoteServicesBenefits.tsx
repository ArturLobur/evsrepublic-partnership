import {CardContent} from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import CheckIcon from "../../assets/checkIcon.svg";
import {containerSize} from "../../system/constants.ts";

const benefits = [
  {
    title: "Convenience",
    description:
      "Diagnose and resolve issues without the need for physical presence, saving time and resources.\n",
  },
  {
    title: "Speed",
    description:
      "Quickly identify and troubleshoot problems, minimizing vehicle downtime.",
  },
  {
    title: "Cost Savings",
    description:
      "Reduce travel and labor costs with efficient remote solutions.",
  },
];

const RemoteServicesBenefits = () => (
  <Box sx={{bgcolor: "rgba(255, 255, 255, 0.05)"}}>
    <Container maxWidth={containerSize} sx={{pt: 12, pb: 12}}>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Typography
            sx={{
              fontSize: 26,
              lineHeight: "36px",
              fontWeight: 400,
              mb: {xs: 2},
            }}
          >
            Benefits of Remote Services
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} mb={7.5}>
          <Typography
            color="text.secondary"
            sx={{fontSize: 16, lineHeight: "24px", fontWeight: 400}}
          >
            Stay ahead in the EV industry by renting the latest diagnostic
            devices. Access cutting-edge technology without the high cost of
            ownership, lowering operational expenses. Rent the tools you need,
            when you need them, for maximum flexibility and efficiency. Stay
            up-to-date with advanced diagnostic tools for various EV models.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            sx={{
              flexDirection: {xs: "column", md: "row"},
              justifyContent: "space-between",
              alignItems: "stretch",
              gap: 3,
            }}
          >
            {benefits.map((item) => (
              <Box
                key={item.title}
                sx={{
                  maxWidth: 440,
                  backgroundColor: "none",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <CardContent sx={{padding: "30px 30px 30px 50px"}}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{fontSize: 18, mb: 2, mt: 2.5, position: "relative"}}
                    color="primary"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        left: -50,
                        top: -5,
                      }}
                    >
                      <CheckIcon />
                    </Box>

                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{color: "text.secondary"}}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default RemoteServicesBenefits;