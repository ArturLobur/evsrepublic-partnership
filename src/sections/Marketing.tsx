import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {useState} from "react";

import SignUp from "../components/Auth/SignUp.tsx";
import ModalWindow from "../components/ModalWindow.tsx";

const items = [
  {
    title: "Premium Partners:",
    description:
      "Frachise-like Support. Premium partners receive extensive marketing support, almost equivalent to franchising.\n" +
      "Direct Client Flow: Enjoy a steady stream of clients directed from our website, ensuring increased business opportunities.\n" +
      "Featured Listing: Your business will be prominently featured and promoted across our platforms.\n",
  },
  {
    title: "Standard  Partners:",
    description:
      "Online Listing. Your business will be listed on our website, providing visibility to potential customers.\n" +
      "Basic Marketing Support: Access to basic marketing resources to help boost your online presence.\n" +
      "Stand out in the crowded market with our targeted marketing campaigns.\n" +
      "Customer Acquisition: Attract a broader customer base interested in EV maintenance and repairs.\n" +
      "Enhanced Reputation: Leverage our brand’s credibility to build trust with new and existing clients.\n",
  },
];

export default function Marketing() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  return (
    <Container id="marketing" sx={{py: {xs: 8, sm: 16}}}>
      <Grid container>
        <Grid item>
          <div>
            <Typography
              textAlign="center"
              variant="h1"
              sx={{
                mb: 6,
                fontSize: "clamp(3rem, 10vw, 4rem)",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? "primary.main"
                    : "primary.light",
              }}
            >
              Marketing
            </Typography>
            <Typography component="h2" variant="h4" color="text.primary">
              Elevate Your Business with Comprehensive Marketing Support
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{mb: {xs: 2, sm: 4}}}
            >
              We understand the importance of visibility and customer
              acquisition in the competitive auto service industry. As part of
              our partnership program, EV's Republic offers two levels of
              partnership: Premium and Standard (Registered Partner).
            </Typography>
          </div>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{width: "100%", display: "flex"}}
          >
            {items.map(({title, description}, index) => (
              <Card
                key={index}
                variant="outlined"
                sx={{
                  p: 3,
                  height: "fit-content",
                  width: "100%",
                  background: "none",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    textAlign: "left",
                    flexDirection: {xs: "column", md: "row"},
                    alignItems: {md: "center"},
                    gap: 2.5,
                  }}
                >
                  <Box sx={{textTransform: "none"}}>
                    <Typography
                      color="text.primary"
                      variant="body2"
                      fontWeight="bold"
                    >
                      {title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      sx={{my: 0.5}}
                    >
                      {description}
                    </Typography>
                    <Link
                      color="primary"
                      variant="body2"
                      fontWeight="bold"
                      sx={{
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        "& > svg": {transition: "0.2s"},
                        "&:hover > svg": {transform: "translateX(2px)"},
                      }}
                      onClick={(event) => {
                        event.stopPropagation();
                        handleModalOpen();
                      }}
                    >
                      <span>Learn more</span>
                      <ChevronRightRoundedIcon
                        fontSize="small"
                        sx={{mt: "1px", ml: "2px"}}
                      />
                    </Link>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
      </Grid>
      <ModalWindow onOpen={modalOpen} onClose={() => setModalOpen(!modalOpen)}>
        <SignUp onClose={() => setModalOpen(false)} />
      </ModalWindow>
    </Container>
  );
}