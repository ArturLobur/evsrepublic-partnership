import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import DiagnosticToolRoundedIcon from "@mui/icons-material/BuildCircleRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";

import {useDialog} from "../store/DialogContext.tsx";
import {sendDataToGoogleDoc} from "../utils/sendDataToGoogleDoc.ts";

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

export default function LaborTimes() {
  const [formValue, setFormValue] = React.useState("");

  const {toggleDialog} = useDialog();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formValue !== "") {
      const data = new FormData();
      data.append("Telephone", formValue);

      await sendDataToGoogleDoc(data).then(() => toggleDialog());
      setFormValue("");
    }
  };

  const handleTelephoneChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const value = event.target.value;
    // Allow only numbers, +, -, and spaces in the input
    const regex = /^[0-9+\- ]*$/;
    if (regex.test(value)) {
      setFormValue(value);
    }
  };
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
        <Stack spacing={2} useFlexGap sx={{width: {xs: "100%", sm: "80%"}}}>
          <Typography
            variant="h1"
            sx={{
              mb: 2,
              display: "flex",
              flexDirection: {xs: "column", md: "row"},
              alignSelf: "center",
              textAlign: "center",
              fontSize: "clamp(3.5rem, 10vw, 4rem)",
              color: "primary.light",
            }}
          >
            Tesla Labor Times
          </Typography>

          <Typography
            component="h2"
            variant="h4"
            sx={{textAlign: {xs: "center"}}}
          >
            Optimize Your Service Efficiency with our project
            <Link href="https://teslalabortime.online/">
              <Typography
                variant="h4"
                sx={{
                  color: "primary.light",
                }}
              >
                teslalabortime.online
              </Typography>
            </Link>
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
        </Stack>
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
        <img style={teslalabortimeStyle} alt="teslalabortime" />
        <Box
          sx={{
            width: {sm: "100%", md: "60%"},
            textAlign: {sm: "left", md: "center"},
          }}
        >
          <Typography component="h2" variant="h4" sx={{mb: 3}}>
            Get Started Today
          </Typography>
          <Typography textAlign="center" sx={{mb: 2}}>
            Join our partnership program to gain access to Tesla Labor Times and
            transform your auto service business. Enhance your repair
            efficiency, improve customer satisfaction, and stay competitive in
            the growing EV market.
          </Typography>
          <Stack
            component="form"
            onSubmit={handleSubmit}
            direction={{xs: "column", sm: "row"}}
            spacing={1}
            useFlexGap
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: 2,
              width: {xs: "100%", sm: "auto"},
            }}
          >
            <TextField
              hiddenLabel
              required
              size="small"
              variant="outlined"
              aria-label="Enter your phone number"
              placeholder="Your phone number"
              type="tel"
              id="Telephone"
              autoComplete="tel"
              name="Telephone"
              value={formValue}
              onChange={(e) => handleTelephoneChange(e)}
              inputProps={{
                "aria-label": "Enter your phone number",
                minLength: 10,
                maxLength: 15,
              }}
            />
            <Button variant="contained" color="primary" type="submit">
              Register Now and Gain Access!
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}