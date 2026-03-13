import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const projects = {
  ecommerce: [
    {
      name: "Leader Clothings",
      website: "leaderclothings.in",
      description:
        "Modern Shopify ecommerce website built for a t-shirt clothing brand with a clean product layout, mobile-first design, and smooth checkout experience.",
    },
  ],

  business: [
    {
      name: "Path Finder Event Management",
      website: "example.com",
      description:
        "Professional business website designed for an event management company to showcase services, past events, and generate client inquiries.",
    },
  ],

  /* FUTURE USE

  design: [
    {
      name: "Instagram Creative Pack",
      website: "",
      description:
        "Instagram post designs created for brand engagement and promotions.",
    },
    {
      name: "Brand Identity Kit",
      website: "",
      description:
        "Complete brand identity including logo, typography and visual system.",
    },
  ],

  */
};

function ProjectGrid({ items, showWebsite = true }) {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
      {items.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-2xl hover:-translate-y-1 transition duration-300"
        >

          {/* WEBSITE PREVIEW */}

          <div className="bg-gray-50 p-4">

            <div className="overflow-hidden rounded-xl shadow-md border border-gray-200">

              <img
                src={`https://api.microlink.io/?url=https://${project.website}&screenshot=true&meta=false&embed=screenshot.url`}
                alt={project.name}
                className="w-full h-56 sm:h-64 object-cover object-top transition duration-500 hover:scale-105"
              />

            </div>

          </div>

          {/* TEXT CONTENT */}

          <div className="p-6">

            <h3 className="text-xl font-bold text-black mb-3">
              {project.name}
            </h3>

            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              {project.description}
            </p>

            {showWebsite && project.website && (
              <a
                href={`https://${project.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-gray-900 transition"
              >
                View Live Website
              </a>
            )}

          </div>

        </motion.div>
      ))}
    </div>
  );
}

export default function Portfolio() {

  const [filter, setFilter] = useState("all");

  return (
    <>
      <Helmet>
        <title>Our Work | Veyil Solutions</title>
        <meta
          name="description"
          content="Explore ecommerce websites and business websites built by Veyil Solutions."
        />
      </Helmet>

      <section className="bg-white py-20 px-5 md:px-8">

        <div className="max-w-7xl mx-auto">

          {/* HEADER */}

          <div className="text-center mb-14">

            <h1 className="text-3xl md:text-5xl font-bold text-black mb-6">
              Our Work
            </h1>

            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Explore some of the websites we have created for growing brands.
            </p>

          </div>

          {/* FILTER */}

          <div className="flex justify-center gap-3 md:gap-4 mb-16 flex-wrap">

            {[
              { id: "all", label: "All" },
              { id: "ecommerce", label: "Ecommerce Websites" },
              { id: "business", label: "Business Websites" },

              // { id: "design", label: "Design Projects" } // future
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-5 py-2 rounded-full border text-sm font-semibold transition
                ${
                  filter === btn.id
                    ? "bg-black text-white border-black"
                    : "border-gray-300 text-gray-700 hover:bg-black hover:text-white"
                }`}
              >
                {btn.label}
              </button>
            ))}

          </div>

          {/* ALL */}

          {filter === "all" && (
            <>
              <h2 className="text-2xl md:text-3xl font-bold text-black">
                Ecommerce Websites
              </h2>

              <ProjectGrid items={projects.ecommerce} />

              <h2 className="text-2xl md:text-3xl font-bold text-black mt-16">
                Business Websites
              </h2>

              <ProjectGrid items={projects.business} />

              {/* FUTURE DESIGN SECTION */}

              {/*
              <h2 className="text-3xl font-bold text-black mt-20">
                Design Projects
              </h2>

              <ProjectGrid items={projects.design} showWebsite={false} />
              */}
            </>
          )}

          {/* ECOMMERCE */}

          {filter === "ecommerce" && (
            <>
              <h2 className="text-2xl md:text-3xl font-bold text-black">
                Ecommerce Websites
              </h2>

              <ProjectGrid items={projects.ecommerce} />
            </>
          )}

          {/* BUSINESS */}

          {filter === "business" && (
            <>
              <h2 className="text-2xl md:text-3xl font-bold text-black">
                Business Websites
              </h2>

              <ProjectGrid items={projects.business} />
            </>
          )}

          {/* FUTURE DESIGN FILTER */}

          {/*
          {filter === "design" && (
            <>
              <h2 className="text-3xl font-bold text-black">
                Design Projects
              </h2>

              <ProjectGrid items={projects.design} showWebsite={false} />
            </>
          )}
          */}

        </div>

      </section>
    </>
  );
}