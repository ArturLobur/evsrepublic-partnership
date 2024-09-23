import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import laborImg from "../assets/laborImg.png";

const SectionLaborTimes = () => {
  return (
    <Box
      id="laborTimes"
      sx={{
        pt: {xl: 4, lg: 0},
        color: "white",
        bgcolor: "#06090a",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          gap: {xs: 3, sm: 6},
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            maxWidth: "600px",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h3"
            color="primary"
            sx={{fontSize: 48, lineHeight: "51px", fontWeight: 400}}
          >
            Tesla Labor Times
          </Typography>
          <Typography sx={{fontSize: 22, lineHeight: "31px", fontWeight: 400}}>
            Optimize Your Service Efficiency with our project
            teslalabortime.online.
          </Typography>
          <Typography
            color="text.secondary"
            sx={{fontSize: 22, lineHeight: "31px", fontWeight: 400}}
          >
            One of the standout features of our partnership is access to the
            Tesla Labor Times project. This resource provides accurate and
            detailed repair times for various Tesla components, ensuring that
            your service operations are efficient and reliable.
          </Typography>
          <Box>
            <Link
              sx={{
                textTransform: "uppercase",
                fontSize: 12,
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
              href="https://teslalabortime.online/"
              target="_blank"
              underline="hover"
            >
              <ArrowCircleRightOutlinedIcon fontSize="large" color="primary" />
              VISIT teslalabortime.online
            </Link>
          </Box>
        </Box>
        <Box sx={{minHeight: 560}}>
          <img
            style={{position: "absolute", right: 0, top: -110}}
            src={laborImg}
            alt="laborImg"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default SectionLaborTimes;