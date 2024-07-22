import {alpha} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";

import {siteColors} from "../system/constants.ts";
import {sendDataToGoogleDoc} from "../utils/sendDataToGoogleDoc.ts";

export default function About() {
  const [formValue, setFormValue] = React.useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formValue !== "") {
      const data = new FormData();
      data.append("Telephone", formValue);

      await sendDataToGoogleDoc(data);
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
      id="hero"
      sx={{
        width: "100%",
        backgroundImage: `linear-gradient(${siteColors.darkGrey}, ${alpha("#090E10", 0.0)})`,
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: {xs: 14, sm: 20},
          pb: {xs: 8, sm: 12},
        }}
      >
        <Stack spacing={2} useFlexGap sx={{width: {xs: "100%", sm: "80%"}}}>
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: {xs: "column", md: "row"},
              alignSelf: "center",
              textAlign: "center",
              fontSize: "clamp(3.5rem, 10vw, 4rem)",
            }}
          >
            Welcome to&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "clamp(3rem, 10vw, 4rem)",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? "primary.main"
                    : "primary.light",
              }}
            >
              EV'SREPUBLIC's
            </Typography>
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: "clamp(3.5rem, 8vw, 4rem)",
              textAlign: "center",
              mt: -2,
            }}
          >
            Partnership Program
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{alignSelf: "center", width: {sm: "100%", md: "80%"}}}
          >
            Transform Your Auto Service Business to Serve Electric Vehicles
          </Typography>
          <Typography
            textAlign="center"
            sx={{alignSelf: "center", width: {sm: "100%", md: "80%"}}}
          >
            At EVSREPUBLIC.com, we are excited to introduce a unique partnership
            opportunity for auto service shop owners. This project will be
            unveiled at the Electric Vehicles Exhibition, where owners of
            conventional auto repair shops (servicing vehicles with internal
            combustion engines) will be present. Our mission is to enable these
            shops to transition smoothly into servicing electric vehicles (EVs),
            opening new revenue streams and enhancing their service offerings.
          </Typography>
          <Stack
            component="form"
            onSubmit={handleSubmit}
            direction={{xs: "column", sm: "row"}}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{pt: 2, width: {xs: "100%", sm: "auto"}}}
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
              Start now
            </Button>
          </Stack>
          <Typography variant="caption" textAlign="center" sx={{opacity: 0.8}}>
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link color="primary" sx={{textDecoration: "none"}}>
              Terms & Conditions
            </Link>
            .
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}