import React from "react";
import { HeroSection } from "@/components/pages/main/HeroSection/HeroSection";
import AboutUs from "@/components/pages/main/about/AboutUs";
import { PortfoSection } from "@/components/pages/main/portfo/PortfoSection";

export default function page() {
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <PortfoSection />
    </main>
  );
}
