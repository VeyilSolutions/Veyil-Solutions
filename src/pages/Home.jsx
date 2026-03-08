import { Link } from "react-router-dom";

import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";
import Hero from "../components/Hero";
import ServiceCTA from "../components/ServiceCTA";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <Hero />

      {/* SERVICES */}
      <Services />

      {/* ABOUT + PROCESS + INDUSTRIES */}
      <About />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CTA */}
      <ServiceCTA />
    </main>
  );
}