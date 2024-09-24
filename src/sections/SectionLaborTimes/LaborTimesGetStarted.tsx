import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import backgroundImg from "../../assets/getStartedImg.png";
import PhoneInput from "../../components/PhoneInput.tsx";

const LaborTimesGetStarted = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundImage: `url(${backgroundImg})`,
        borderRadius: "16px",
        display: "flex",
        height: "470px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          fontWeight: 400,
          fontSize: 36,
          lineHeight: "40px",
          mb: 2.5,
        }}
      >
        Get Started Today
      </Typography>
      <Typography
        textAlign="center"
        color="text.secondary"
        sx={{
          maxWidth: 600,
          fontWeight: 400,
          fontSize: 18,
          lineHeight: "28px",
          mb: 3,
        }}
      >
        in our partnership program to gain access to Tesla Labor Times and
        transform your auto service business. Enhance your repair efficiency,
        improve customer satisfaction, and stay competitive in the growing EV
        market.
      </Typography>
      <PhoneInput />
    </Container>
  );
};
export default LaborTimesGetStarted;