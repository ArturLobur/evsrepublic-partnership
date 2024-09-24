import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const SectionRemoteServices = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={4} sx={{pt: 12}}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            color="primary"
            sx={{fontSize: 48, lineHeight: "51px", fontWeight: 400}}
          >
            Remote Services
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{fontSize: 26, lineHeight: "36px", fontWeight: 400}}>
            Enhance Your Operations with Advanced Remote Services.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            color="text.secondary"
            sx={{fontSize: 16, lineHeight: "24px", fontWeight: 400}}
          >
            Knowledge is power, especially in the fast-evolving world of
            electric vehicles. At our company we provide access to high-quality
            training courses and certification programs designed to equip you
            and your staff with the skills needed to excel in the EV industry.
          </Typography>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Container>
  );
};
export default SectionRemoteServices;