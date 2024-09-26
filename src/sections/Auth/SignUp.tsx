import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";

import {useDialog} from "../../store/DialogContext.tsx";
import {sendDataToGoogleDoc} from "../../utils/sendDataToGoogleDoc.ts";

export default function SignUp({onClose}: {onClose: () => void}) {
  const {toggleDialog} = useDialog();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    sendDataToGoogleDoc(data)
      .then(() => onClose())
      .then(() => toggleDialog());
    (event.target as HTMLFormElement).reset();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{m: 1}}>
        <PersonAddOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up as a new partner
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{mt: 1}}>
        <TextField
          margin="normal"
          autoComplete="given-name"
          name="FirstName"
          variant="outlined"
          required
          fullWidth
          id="firstName"
          label="First Name"
          autoFocus
        />
        <TextField
          margin="normal"
          variant="outlined"
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="LastName"
          autoComplete="family-name"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="Email"
          autoComplete="email"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="Telephone"
          label="Phone"
          type="tel"
          id="tel"
          autoComplete="tel"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="numberShops"
          label="Number of Auto Repair Shops"
          type="text"
          id="numberShops"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="state"
          label="State"
          type="text"
          id="state"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="city"
          label="City"
          type="text"
          id="city"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="years"
          label="Years in Operation"
          type="text"
          id="years"
        />

        <Button type="submit" fullWidth variant="contained" sx={{mt: 3, mb: 2}}>
          Sign Up
        </Button>
      </Box>
    </Box>
  );
}