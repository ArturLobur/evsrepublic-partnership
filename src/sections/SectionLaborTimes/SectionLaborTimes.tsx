import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import laborImg from "../../assets/laborImg.png";
import {containerSize} from "../../system/constants.ts";
import LaborTimesBenefits from "./LaborTimesBenefits.tsx";
import LaborTimesGetStarted from "./LaborTimesGetStarted.tsx";
import LaborTimesKeyFeatures from "./LaborTimesKeyFeatures.tsx";

const SectionLaborTimes = () => {
  return (
    <Box
      id="laborTimes"
      sx={{
        pt: {xs: 6, sm: 4},
        color: "white",
        bgcolor: "#06090a",
        pb: 12,
      }}
    >
      <Container maxWidth={containerSize}>
        <Stack
          spacing={12}
          sx={{
            display: "flex",
            position: "relative",
          }}
        >
          <Box sx={{pb: {xs: 0, sm: 12}}}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                maxWidth: "600px",
                flexDirection: "column",
                gap: 2,
                zIndex: 2,
              }}
            >
              <Typography
                variant="h3"
                color="primary"
                sx={{fontSize: 48, lineHeight: "51px", fontWeight: 400}}
              >
                Tesla Labor Times
              </Typography>
              <Typography
                sx={{fontSize: 22, lineHeight: "31px", fontWeight: 400}}
              >
                Optimize your service efficiency with us.
              </Typography>
              <Typography
                color="text.secondary"
                sx={{fontSize: 22, lineHeight: "31px", fontWeight: 400}}
              >
                One of the standout features of our partnership is access to the
                Tesla Labor Times project. This resource provides accurate and
                detailed repair times for various Tesla components, ensuring
                that your service operations are efficient and reliable.
              </Typography>
            </Box>
            <Box
              component="img"
              sx={{
                display: {xs: "none", md: "block"},
                position: "absolute",
                right: 0,
                top: -110,
                zIndex: 1,
              }}
              src={laborImg}
              alt="laborImg"
            />
          </Box>
          <LaborTimesKeyFeatures />
          <LaborTimesBenefits />
          <LaborTimesGetStarted />
        </Stack>
      </Container>
    </Box>
  );
};

export default SectionLaborTimes;