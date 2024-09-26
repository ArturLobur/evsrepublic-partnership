import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";

interface SectionsHeaderPropsI {
  title: string;
  firstDescription: string;
  secondDescription: string;
  children: React.ReactNode;
}

const HeaderForSections: React.FC<SectionsHeaderPropsI> = ({
  title,
  firstDescription,
  secondDescription,
  children,
}) => (
  <Grid container spacing={4} sx={{pt: 12, mb: 12}}>
    <Grid item xs={12}>
      <Typography
        variant="h3"
        color="primary"
        sx={{fontSize: 48, lineHeight: "51px", fontWeight: 400}}
      >
        {title}
      </Typography>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Typography sx={{fontSize: 26, lineHeight: "36px", fontWeight: 400}}>
        {firstDescription}
      </Typography>
    </Grid>
    <Grid item xs={12} sm={6} mb={7.5}>
      <Typography
        color="text.secondary"
        sx={{fontSize: 16, lineHeight: "24px", fontWeight: 400}}
      >
        {secondDescription}
      </Typography>
    </Grid>
    <Grid item xs={12}>
      {children}
    </Grid>
  </Grid>
);

export default HeaderForSections;