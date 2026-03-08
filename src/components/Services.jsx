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
    id: "e-commercedevelopment",
    title: "E-commerce Development",
    description: "We build high-performance online stores designed to convert visitors into customers and scale your business effortlessly.",
    image: Webdev,
  },
  {
    id: "businesswebsitedevelopment",
    title: "Business Website Development",
    description: "Custom-built professional sites designed to showcase your services, build brand authority, and capture high-quality leads.",
    image: Webdesign,
  },
  {
    id: "designservices",
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
        relative overflow-hidden cursor-pointer transition-all duration-500 ease-out flex-shrink-0
        /* MOBILE: Vertical Stack */
        w-full mb-3 
        ${isActive ? "h-[380px]" : "h-[70px]"} 
        
        /* DESKTOP: Horizontal Accordion */
        sm:mb-0 sm:h-[420px]
        ${isActive 
          ? "sm:w-[300px] lg:w-[400px] ring-2 ring-blue-500 shadow-xl" 
          : "sm:w-[70px] hover:bg-slate-100"
        }
        rounded-2xl
      `}
    >
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
      />

      <div className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-60'}`} />
      <div className={`absolute inset-0 p-6 flex flex-col justify-end sm:hidden transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <h3 className="text-white text-2xl font-bold mb-2">{service.title}</h3>
        <p className="text-white/80 text-sm mb-4 line-clamp-3">{service.description}</p>
        <Link to={`/services/${service.id}`}>
          <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-bold flex items-center gap-2 text-sm w-fit">
            Learn More <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>

      {/* MOBILE */}
      {!isActive && (
        <span className="absolute left-6 top-1/2 -translate-y-1/2 text-white font-bold text-lg sm:hidden">
          {service.title}
        </span>
      )}

      {/* DESKTOP TITLES */}
      <span
        className={`
          hidden sm:block absolute text-white font-bold whitespace-nowrap
          transition-all duration-500 pointer-events-none
          ${isActive
              ? "bottom-8 left-10 rotate-0 opacity-100 text-2xl"
              : "bottom-24 left-1/2 -translate-x-1/2 -rotate-90 opacity-70 text-lg"
          }
        `}
      >
        {service.title}
      </span>
    </div>
  );
}

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    }, 8000); 
    return () => clearInterval(interval);
  }, []);

  const currentService = services[activeIndex];

  return (
    <section id="services" className="py-16 sm:py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg">
            Comprehensive solutions tailored to drive operational excellence.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center">
          <div className="hidden sm:flex w-full lg:w-1/2 min-h-[350px] flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  {currentService.title}
                </h3>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
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
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-[500px] lg:max-w-none">
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