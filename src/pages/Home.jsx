import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import ServiceCTA from "@/components/ServiceCTA";
import BlogSection from "@/components/Blog";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <BlogSection variant="home" limit={3} />
      <ServiceCTA />
    </main>
  );
}