import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Layout } from "lucide-react";
import { motion } from "framer-motion";

import Webdev from "@/assets/web_develop.webp";
import Mobile from "@/assets/mobile.webp";
import Webdesign from "@/assets/web_design.webp";

const services = [
  {
    id: "ecommerce-development",
    title: "E-commerce Automation",
    highlight: true,
    icon: <Zap className="text-teal-400" size={18} />,
    description:
      "Move beyond the 'WhatsApp Trap.' We build automated Shopify stores that handle payments, inventory, and shipping.",
    image: Webdev,
  },
  {
    id: "business-website-development",
    title: "High-Performance Business Sites",
    icon: <Shield className="text-indigo-500" size={18} />,
    description:
      "Lightning-fast websites that build trust and outrank competitors.",
    image: Webdesign,
  },
  {
    id: "design-services",
    title: "Brand Visuals & Graphics",
    icon: <Layout className="text-blue-500" size={18} />,
    description:
      "Premium visuals, banners, and graphics for strong branding.",
    image: Mobile,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.4em] text-indigo-600 font-bold mb-3 block"
          >
            Our Expertise
          </motion.span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-4 leading-tight">
            Solutions That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-500">
              Scale Legacy
            </span>
          </h2>

          <p className="text-black/50 max-w-xl mx-auto text-sm sm:text-base">
            We build digital systems that turn small businesses into strong brands.
          </p>
        </div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={card}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-300 border
              ${
                service.highlight
                  ? "bg-black text-white shadow-lg scale-[1.01]"
                  : "bg-white border-black/5 hover:shadow-xl hover:-translate-y-1"
              }`}
            >

              {/* IMAGE */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                {service.highlight && (
                  <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-indigo-600 to-teal-500 text-white text-[9px] px-3 py-1 rounded-full font-bold uppercase tracking-widest">
                    Top
                  </div>
                )}

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className={`absolute inset-0 bg-gradient-to-t ${
                  service.highlight ? "from-black/80" : "from-white/80"
                } to-transparent`} />
              </div>

              {/* CONTENT */}
              <div className="p-5 sm:p-6">
                <div className="mb-3">{service.icon}</div>

                <h3 className={`text-lg sm:text-xl font-bold mb-2 ${
                  service.highlight ? "text-white" : "text-black"
                }`}>
                  {service.title}
                </h3>

                <p className={`text-xs sm:text-sm mb-5 ${
                  service.highlight ? "text-white/70" : "text-black/50"
                }`}>
                  {service.description}
                </p>

                <Link
                  to={`/services/${service.id}`}
                  className={`inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest transition ${
                    service.highlight
                      ? "text-teal-400 hover:text-white"
                      : "text-indigo-600 hover:text-black"
                  }`}
                >
                  Learn More
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CALLOUT */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-black/40 text-xs sm:text-sm font-bold uppercase tracking-widest">
            Not sure where to start?
            <a
              href="https://wa.me/918489559160"
              className="ml-2 text-indigo-600 border-b border-indigo-600/30 hover:border-indigo-600"
            >
              Free Design Sample
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}