import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";

// Import all components
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Header with Navigation */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Why Choose Us Section */}
      <AboutUs />

      {/* Products Section */}
      <Products />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </ThemeProvider>
  );
}
