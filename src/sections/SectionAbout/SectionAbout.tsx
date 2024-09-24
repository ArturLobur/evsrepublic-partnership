import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import backgroundImg from "../../assets/backgroundImg.png";
import PhoneInput from "../../components/PhoneInput.tsx";

export default function SectionAbout() {
  return (
    <Box
      sx={{
        pt: "228px",
        height: "800px",
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            fontWeight: 400,
            fontSize: 60,
            lineHeight: "66px",
            mb: 4,
          }}
        >
          Become our partner in&nbsp;
          <Typography
            component="span"
            variant="h1"
            color="primary"
            sx={{
              fontWeight: 400,
              fontSize: 60,
              lineHeight: "66px",
            }}
          >
            EV repairs
          </Typography>
        </Typography>
        <Box sx={{maxWidth: 680, mb: 5}}>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{
              fontWeight: 400,
              fontSize: 18,
              lineHeight: "25px",
            }}
          >
            Upgrade your existing auto repair shop by integrating EV repair
            services with our comprehensive solutions.
            <br />
            <br />
            At EV's Republic, we are excited to introduce a unique partnership
            opportunity for auto service shop owners. Our mission is to enable
            these shops to transition smoothly into servicing electric vehicles,
            opening new revenue streams and enhancing their service offerings.
          </Typography>
        </Box>
        <PhoneInput />
      </Container>
    </Box>
  );
}