import {createFileRoute} from "@tanstack/react-router";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import AppAppBar from "../components/AppAppBar.tsx";
import Hero from "../components/Hero.tsx";
import LogoCollection from "../components/LogoCollection.tsx";
import Features from "../components/Features.tsx";
import Testimonials from "../components/Testimonials.tsx";
import Highlights from "../components/Highlights.tsx";
import Pricing from "../components/Pricing.tsx";
import FAQ from "../components/FAQ.tsx";
import Footer from "../components/Footer.tsx";
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