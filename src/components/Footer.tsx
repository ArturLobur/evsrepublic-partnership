import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";

import {menuItems} from "../system/constants.ts";
import {sendDataToGoogleDoc} from "../utils/sendDataToGoogleDoc.ts";

const logoStyle = {
  width: "95px",
  height: "auto",
  marginLeft: 16,
};

export default function Footer() {
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

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({behavior: "smooth"});
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: {xs: 4, sm: 8},
        py: {xs: 8, sm: 10},
        textAlign: {sm: "center", md: "left"},
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {xs: "column", sm: "row"},
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: {xs: "100%", sm: "60%"},
          }}
        >
          <Box sx={{width: {xs: "100%", sm: "60%"}}}>
            <Box sx={{ml: "-15px"}}>
              <img
                src={
                  "https://cdn.prod.website-files.com/62a6eccb7f5d4d6907ac92e9/62a716addbf8bc00a54852f8_evs-logo.svg"
                }
                style={logoStyle}
                alt="logo of footer"
              />
            </Box>
            <Typography variant="body2" fontWeight={600} gutterBottom>
              Newsletter
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Subscribe to our newsletter for weekly updates and promotions.
            </Typography>
            <Stack
              direction="row"
              component="form"
              onSubmit={handleSubmit}
              spacing={1}
              useFlexGap
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
          </Box>
        </Box>
        <Box
          sx={{
            display: {xs: "none", sm: "flex"},
            flexDirection: "column",
            gap: 1,
          }}
        >
          {menuItems.map((item) => (
            <Link
              sx={{cursor: "pointer"}}
              key={item.name}
              color="text.secondary"
              onClick={() => scrollToSection(item.name)}
            >
              {item.label}
            </Link>
          ))}
        </Box>
      </Box>
    </Container>
  );
}