// @ts-nocheck
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import {doc, setDoc} from "firebase/firestore";
import * as React from "react";

import {doCreateUserWithEmailAndPassword} from "../../firebase/auth.js";
import {auth, db} from "../../firebase/firebase";

export default function SignUp() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // Extract user information
    const firstName = data.get("firstName") as string;
    const lastName = data.get("lastName") as string;
    const email = data.get("email") as string;
    const password = data.get("password") as string;
    try {
      // Create user with email and password
      await doCreateUserWithEmailAndPassword(
        firstName,
        lastName,
        email,
        password,
      );
      const user = auth.currentUser;
      console.log("user", user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: firstName,
          lastName: lastName,
          photo: "",
        });
      }
    } catch (error) {
      console.error(error);
    }
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
          margin="normal"
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
          margin="normal"
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