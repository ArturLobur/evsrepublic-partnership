import {createTheme} from "@mui/material";

import {siteColors} from "./constants.ts";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: siteColors.neon,
    },
    secondary: {
      main: siteColors.secondary,
    },
  },
  typography: {
    allVariants: {
      fontFamily: "DM Sans",
    },
  },
});