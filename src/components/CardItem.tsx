import {CardContent} from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import React from "react";

interface CardItemI {
  icon: React.ReactElement;
  title: string;
  description: string;
  variant?: "outlined" | "elevation";
  backgroundColor?: string;
}

const CardItem: React.FC<CardItemI> = ({
  icon,
  title,
  description,
  variant,
  backgroundColor,
}) => {
  return (
    <Card
      variant={variant ?? "outlined"}
      sx={{
        maxWidth: 440,
        backgroundColor: backgroundColor ?? "inherit",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <CardContent sx={{padding: "30px 30px 30px 45px"}}>
        {icon}
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{fontSize: 18, mb: 2, mt: 2.5}}
          color="primary"
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{color: "text.secondary"}}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default CardItem;