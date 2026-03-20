import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import Webdev from "@/assets/web_develop.webp";
import Mobile from "@/assets/mobile.webp";
import Webdesign from "@/assets/web_design.webp";

const services = [
  {
    id: "ecommerce-development",
    title: "Ecommerce Development",
    description:
      "High-performance ecommerce websites and Shopify stores designed to convert visitors into customers and scale your online business.",
    image: Webdev,
  },
  {
    id: "business-website-development",
    title: "Business Website Development",
    description:
      "Professional websites that showcase your services, build credibility, and generate high-quality leads.",
    image: Webdesign,
  },
  {
    id: "design-services",
    title: "Creative Design Services",
    description:
      "Modern UI/UX design, branding, and creative assets that help your business stand out online.",
    image: Mobile,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative py-24 px-6 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <header className="text-center mb-16">
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
          >
            Our Services
          </h2>

          <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg">
            Professional solutions designed to help businesses grow online
            with modern websites and digital experiences.
          </p>
        </header>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.article
              key={service.id}
              variants={card}
              className="group relative rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* GLOW BACKGROUND */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-teal-400/10 to-blue-500/10 blur-xl" />
              </div>

              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} service by Veyil Solutions`}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 relative z-10">

                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm group-hover:gap-3 transition-all"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>

              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

