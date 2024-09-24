import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import React from "react";

import {useDialog} from "../store/DialogContext.tsx";
import {sendDataToGoogleDoc} from "../utils/sendDataToGoogleDoc.ts";
import CustomButton from "./CustomButton.tsx";

const PhoneInput = () => {
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
  );
};
export default PhoneInput;