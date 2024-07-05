import {createFileRoute} from "@tanstack/react-router";
import * as React from "react";
import {PaletteMode} from "@mui/material";
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

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const defaultTheme = createTheme({palette: {mode}});

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box sx={{bgcolor: "background.default"}}>
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