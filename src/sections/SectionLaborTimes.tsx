import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

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
          flexDirection: "column",
          gap: {xs: 3, sm: 6},
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
        </Box>
      </Container>
    </Box>
  );
};

export default SectionLaborTimes;