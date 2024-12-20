import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";

import {useDialog} from "../../store/DialogContext.tsx";
import {averageRepairs, states} from "../../system/constants.ts";
import {sendDataToGoogleDoc} from "../../utils/sendDataToGoogleDoc.ts";

export default function SignUp({onClose}: {onClose: () => void}) {
  const {toggleDialog} = useDialog();
  const [phoneError, setPhoneError] = React.useState<string>(""); // Додано для зберігання помилки

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const phone = data.get("Telephone") as string;

    const phoneRegex = /^\+?[0-9]{10,11}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError("Please enter a valid phone number with 11 digits.");
      return;
    } else {
      setPhoneError("");
    }

    sendDataToGoogleDoc(data)
      .then(() => onClose())
      .then(() => toggleDialog());
    (event.target as HTMLFormElement).reset();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  const handlePhoneInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const key = event.key;
    if (!/^[0-9]$/.test(key) && key !== "Backspace") {
      event.preventDefault();
    }
  };

  return (
    <Box
      sx={{
        p: 4,
        maxHeight: "80vh",
        overflowY: "auto",
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
      <Box
        component="form"
        onSubmit={handleSubmit}
        onKeyDown={handleKeyDown}
        sx={{mt: 1}}
      >
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
          type="email"
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
          error={!!phoneError}
          helperText={phoneError}
          onKeyDown={handlePhoneInput}
        />
        <TextField
          margin="normal"
          fullWidth
          name="companyName"
          label="Company Name"
          type="text"
          id="companyName"
        />
        <TextField
          margin="normal"
          select
          fullWidth
          name="averageRepairs"
          label="Average Monthly Requests for Tesla Repairs"
          type="text"
          id="averageRepairs"
        >
          {averageRepairs.map((repairs) => (
            <MenuItem key={repairs.value} value={repairs.value}>
              {repairs.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          margin="normal"
          fullWidth
          name="country"
          label="Country"
          type="text"
          id="country"
          defaultValue="United States"
        />
        <TextField
          margin="normal"
          fullWidth
          select
          name="state"
          label="State"
          id="state"
        >
          {states.map((state) => (
            <MenuItem key={state.value} value={state.value}>
              {state.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          margin="normal"
          fullWidth
          name="city"
          label="City"
          type="text"
          id="city"
        />
        <TextField
          margin="normal"
          fullWidth
          name="address"
          label="Street address"
          type="text"
          id="address"
          placeholder="Example: 1234 Main St, Suite 210"
        />
        <TextField
          margin="normal"
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
