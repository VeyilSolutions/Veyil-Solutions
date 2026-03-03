import { Link } from "react-router-dom";

import AboutProcessIndustries from "../components/AboutProcessIndustries";
import Testimonials from "../components/Testimonials";
import InteractiveServices from "../components/InteractiveServices";
import HeroGeometric from "../components/HeroGeometric";
import ServiceCTA from "../components/ServiceCTA";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <HeroGeometric />

      {/* SERVICES */}
      <InteractiveServices />

      {/* ABOUT + PROCESS + INDUSTRIES */}
      <AboutProcessIndustries />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CTA */}
      <ServiceCTA />
    </main>
  );
}