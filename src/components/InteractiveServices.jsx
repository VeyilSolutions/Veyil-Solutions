import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ================= IMAGE IMPORTS ================= */
import Webdev from "../assets/web_develop.webp";
import Mobile from "../assets/mobile.webp";
import Webdesign from "../assets/web_design.webp";

const services = [
  {
    id: "ShopifyE-CommerceDevelopment",
    title: "E-commerce Development",
    description: "We build high-performance online stores designed to convert visitors into customers and scale your business effortlessly.",
    image: Webdev,
  },
  {
    id: "BusinessWebsiteDevelopment",
    title: "Business Website Development",
    description: "Custom-built professional sites designed to showcase your services, build brand authority, and capture high-quality leads.",
    image: Webdesign,
  },
  {
    id: "DesignServices",
    title: "Creative Design Services",
    description: "High-impact visuals and custom branding designed to make your business stand out and capture your audience’s attention.",
    image: Mobile,
  },
];

function AccordionItem({ service, isActive, onInteraction }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onMouseEnter={onInteraction}
      onClick={onInteraction}
      className={`
        relative h-[420px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-500 ease-out flex-shrink-0
        ${isActive 
          ? "w-[280px] sm:w-[360px] lg:w-[400px] ring-2 ring-blue-500 shadow-xl" 
          : "w-[70px] hover:bg-slate-100"
        }
      `}
    >
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />

      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-60'}`} />

      <span
        className={`
          absolute text-white text-lg font-bold whitespace-nowrap
          transition-all duration-500 pointer-events-none
          ${isActive
              ? "bottom-8 left-10 rotate-0 opacity-100"
              : "bottom-24 left-1/2 -translate-x-1/2 -rotate-90 opacity-70"
          }
        `}
      >
        {service.title}
      </span>
    </div>
  );
}

export default function InteractiveServices() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Optional: Auto-rotate services if the user isn't interacting
  // Comment this out if you prefer strictly manual control
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    }, 8000); 
    return () => clearInterval(interval);
  }, []);

  const currentService = services[activeIndex];

  return (
    <section id="services" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Comprehensive solutions tailored to drive operational excellence.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2 min-h-[300px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex} // Use index to trigger re-animation
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  {currentService.title}
                </h3>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  {currentService.description}
                </p>
                <Link to={`/services/${currentService.id}`}>
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95">
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT ACCORDION */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end overflow-visible">
            <div className="flex gap-4 p-2">
              {services.map((service, index) => (
                <AccordionItem
                  key={service.id}
                  service={service}
                  isActive={index === activeIndex}
                  onInteraction={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}