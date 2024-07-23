import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import audiLogo from "../assets/svg/audi-logo.svg";
import bmwLogo from "../assets/svg/BMW.svg";
import nissanLogo from "../assets/svg/nissan-logo.svg";
import porscheLogo from "../assets/svg/porsche-logo.svg";
import rivianLogo from "../assets/svg/rivian-logo.svg";
import teslaLogo from "../assets/svg/tesla-logo.svg";

const whiteLogos = [
  bmwLogo,
  nissanLogo,
  teslaLogo,
  porscheLogo,
  audiLogo,
  rivianLogo,
];

const logoStyle = {
  width: "100px",
  height: "80px",
  margin: "0 32px",
  opacity: 0.7,
};

export default function LogoCollection() {
  return (
    <Box id="logoCollection" sx={{py: 4}}>
      <Typography
        component="p"
        variant="subtitle2"
        align="center"
        color="text.secondary"
      >
        Trusted by the best companies
      </Typography>
      <Grid container justifyContent="center" sx={{mt: 0.5, opacity: 0.6}}>
        {whiteLogos.map((logo, index) => (
          <Grid item key={index}>
            <img
              src={logo}
              alt={`Fake company number ${index + 1}`}
              style={logoStyle}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}