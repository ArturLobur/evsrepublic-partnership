import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import {createTheme,ThemeProvider} from "@mui/material/styles";
import {createFileRoute} from "@tanstack/react-router";

import AppAppBar from "../components/AppAppBar.tsx";
import FAQ from "../components/FAQ.tsx";
import Features from "../components/Features.tsx";
import Footer from "../components/Footer.tsx";
import Hero from "../components/Hero.tsx";
import Highlights from "../components/Highlights.tsx";
import LogoCollection from "../components/LogoCollection.tsx";
import Pricing from "../components/Pricing.tsx";
import Testimonials from "../components/Testimonials.tsx";
import {siteColors} from "../system/constants.ts";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: siteColors.neon,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppAppBar />
      <Hero />
      <Box>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}