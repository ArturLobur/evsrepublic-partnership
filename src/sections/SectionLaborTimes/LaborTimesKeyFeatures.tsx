import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Feature1 from "../../assets/keyFeatureIcon-1.svg";
import Feature2 from "../../assets/keyFeatureIcon-2.svg";
import Feature3 from "../../assets/keyFeatureIcon-3.svg";
import CardItem from "../../components/CardItem.tsx";

const LaborTimesKeyFeatures = () => {
  return (
    <Box>
      <Typography
        component="h3"
        sx={{fontSize: 26, mb: 4, textAlign: {xs: "center", sm: "initial"}}}
      >
        Key Features
      </Typography>
      <Grid
        container
        sx={{
          flexDirection: {xs: "column", md: "row"},
          justifyContent: "space-between",
          alignItems: "stretch",
          gap: 3,
        }}
      >
        <CardItem
          icon={<Feature1 />}
          title="Accurate Repair Data"
          description="Gain access to up-to-date labor times for various Tesla models. This data is continually updated to reflect the latest repair standards and practices."
        />
        <CardItem
          icon={<Feature2 />}
          title="User-Friendly Interface"
          description="The platform is designed for ease of use, allowing you to quickly find the information you need."
        />
        <CardItem
          icon={<Feature3 />}
          title="Detailed Components Breakdown"
          description="View detailed repair times for specific Tesla components, helping you plan and execute repairs more efficiently."
        />
      </Grid>
    </Box>
  );
};
export default LaborTimesKeyFeatures;