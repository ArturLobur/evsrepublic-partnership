import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import CheckIcon from "../../assets/checkIcon.svg";
import CardItem from "../../components/CardItem.tsx";

const benefitsItems = [
  {
    title: "Improved Efficiency",
    description:
      "Provide precise repair estimates, reducing service times and increasing throughput in your shop.",
  },
  {
    title: "Enhanced Customer Satisfaction",
    description:
      "Deliver accurate and reliable service timelines, improving customer trust and satisfaction.",
  },
  {
    title: "Competitive Edge",
    description:
      "Stay ahead of competitors by offering specialized knowledge and efficient repair services for Tesla vehicles.",
  },
  {
    title: "Cost Savings",
    description:
      "Optimize labor costs by accurately estimating the time required for each repair, avoiding overestimation or underestimation.",
  },
];

const LaborTimesBenefits = () => {
  return (
    <Box>
      <Typography component="h3" sx={{fontSize: 26, mb: 4}}>
        Benefits of Using Tesla Labor Times
      </Typography>
      <Grid
        container
        sx={{
          justifyContent: "space-between",
          gap: {xs: 3, sm: 6},
          flexWrap: "nowrap",
        }}
      >
        {benefitsItems.map((item, index) => (
          <CardItem
            key={index}
            variant="elevation"
            icon={<CheckIcon />}
            title={item.title}
            description={item.description}
          />
        ))}
      </Grid>
    </Box>
  );
};
export default LaborTimesBenefits;