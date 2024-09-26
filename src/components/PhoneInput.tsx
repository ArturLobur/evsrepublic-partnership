import {InputBase} from "@mui/material";
import Stack from "@mui/material/Stack";
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
      sx={{
        p: {xs: "20px", sm: "10px 10px 10px 30px"},
        maxWidth: 500,
        width: {xs: "95%", sm: "100%"},
        background:
          "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.15) 100%)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        borderRadius: {xs: "50px", sm: "100px"},
        justifyContent: "space-between",
      }}
    >
      <InputBase
        required
        aria-label="Enter your phone number"
        placeholder="Your phone number"
        type="tel"
        autoComplete="tel"
        id="Telephone"
        name="Telephone"
        value={formValue}
        onChange={(e) => handleTelephoneChange(e)}
        inputProps={{
          minLength: 10,
          maxLength: 15,
        }}
        sx={{
          flex: 1,
          border: "none",
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