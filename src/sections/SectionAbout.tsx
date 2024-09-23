import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";

import backgroundImg from "../assets/backgroundImg.png";
import CustomButton from "../components/CustomButton.tsx";
import {useDialog} from "../store/DialogContext.tsx";
import {sendDataToGoogleDoc} from "../utils/sendDataToGoogleDoc.ts";

export default function SectionAbout() {
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
      sx={{
        pt: "228px",
        height: "800px",
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            fontWeight: 400,
            fontSize: 60,
            lineHeight: "66px",
            mb: 4,
          }}
        >
          Become our partner in&nbsp;
          <Typography
            component="span"
            variant="h1"
            color="primary"
            sx={{
              fontWeight: 400,
              fontSize: 60,
              lineHeight: "66px",
            }}
          >
            EV repairs
          </Typography>
        </Typography>
        <Box sx={{maxWidth: 680, mb: 5}}>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{
              fontWeight: 400,
              fontSize: 18,
              lineHeight: "25px",
            }}
          >
            Upgrade your existing auto repair shop by integrating EV repair
            services with our comprehensive solutions.
            <br />
            <br />
            At EV's Republic, we are excited to introduce a unique partnership
            opportunity for auto service shop owners. Our mission is to enable
            these shops to transition smoothly into servicing electric vehicles,
            opening new revenue streams and enhancing their service offerings.
          </Typography>
        </Box>

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
              minLength: 10,
              maxLength: 15,
            }}
          />
          <CustomButton
            variant="contained"
            color="primary"
            type="submit"
            onClick={() => {}}
          >
            Start now
          </CustomButton>
        </Stack>
      </Container>
    </Box>
  );
}