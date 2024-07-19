import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";

import {doCreateUserWithEmailAndPassword} from "../../firebase/auth";

export default function SignUp() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    await doCreateUserWithEmailAndPassword(
      data.get("firstName"),
      data.get("lastName"),
      data.get("email"),
      data.get("password"),
    );
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
        Sign up
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 1}}>
        <TextField
          autoComplete="fname"
          name="firstName"
          variant="outlined"
          required
          fullWidth
          id="firstName"
          label="First Name"
          autoFocus
        />
        <TextField
          variant="outlined"
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
          autoComplete="lname"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        {/*<FormControlLabel*/}
        {/*  control={<Checkbox value="remember" color="primary" />}*/}
        {/*  label="Remember me"*/}
        {/*/>*/}
        <Button type="submit" fullWidth variant="contained" sx={{mt: 3, mb: 2}}>
          Sign Up
        </Button>
      </Box>
    </Box>
  );
}