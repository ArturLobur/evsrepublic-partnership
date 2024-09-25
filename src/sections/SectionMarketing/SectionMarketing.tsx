import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import {CardContent} from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import {useState} from "react";

import SectionsHeader from "../../components/SectionsHeader.tsx";

const marketingCards = [
  {
    title: "Premium Partners",
    descriptionTitle: "Franchise-like Support. ",
    description:
      "Premium partners receive extensive marketing support, almost equivalent to franchising. Direct Client Flow: Enjoy a steady stream of clients directed from our website, ensuring increased business opportunities. Featured Listing: Your business will be prominently featured and promoted across our platforms.",
  },
  {
    title: "Standard Partners",
    descriptionTitle: "Online Listing. ",
    description:
      "Your business will be listed on our website, providing visibility to potential customers. Basic Marketing Support: Access to basic marketing resources to help boost your online presence. Stand out  in the crowded market with our targeted marketing campaigns. Customer Acquisition: Attract a broader customer base interested  in EV maintenance and repairs. Enhanced Reputation: Leverage our brand’s credibility to build trust with new and existing clients.",
  },
];

const SectionMarketing = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  return (
    <Container maxWidth="xl">
      <SectionsHeader
        title="Marketing"
        firstDescription="Elevate Your Business with Comprehensive Marketing Support"
        secondDescription="We understand the importance of visibility and customer acquisition in the competitive auto service industry. As part of our partnership program, EV's Republic offers two levels of partnership: Premium and Standard (Registered Partner)."
      >
        <Grid
          container
          sx={{
            gap: 10,
            justifyContent: "space-between",
            alignItems: "stretch",
          }}
        >
          {marketingCards.map((card, index) => (
            <Card
              key={index}
              variant="elevation"
              sx={{
                maxWidth: 680,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 2.5,
                flex: 1,
                padding: "30px 30px 30px 45px",
              }}
            >
              <CardContent sx={{p: 0}}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{fontSize: 18, mb: 2}}
                  color="primary"
                >
                  {card.title}
                </Typography>
                <Typography sx={{color: "text.secondary"}}>
                  <Typography
                    component={"span"}
                    sx={{color: "text.primary", fontWeight: 700}}
                  >
                    {card.descriptionTitle}
                  </Typography>
                  {card.description}
                </Typography>
              </CardContent>
              <Box>
                <Link
                  color="text.primary"
                  sx={{
                    textTransform: "uppercase",
                    fontSize: 12,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                  underline="hover"
                  onClick={(event) => {
                    event.stopPropagation();
                    handleModalOpen();
                  }}
                >
                  <ArrowCircleRightOutlinedIcon
                    fontSize="large"
                    color="primary"
                  />
                  learn more
                </Link>
              </Box>
            </Card>
          ))}
        </Grid>
      </SectionsHeader>
    </Container>
  );
};
export default SectionMarketing;