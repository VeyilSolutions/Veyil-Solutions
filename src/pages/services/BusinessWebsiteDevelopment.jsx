import ServiceHero from "@/components/ServiceHero";
import ServiceFeatures from "@/components/ServiceFeatures";
import BusinessWebImg from "@/assets/web_design.webp";

import {
  Globe,
  Layers,
  ShieldCheck,
  TrendingUp,
  Search,
  LayoutDashboard,
} from "lucide-react";

export default function BusinessWebsiteDevelopment() {
  return (
    <>
      {/* HERO */}
      <ServiceHero
        title="Business Website Development"
        subtitle="Custom-built professional sites designed to showcase your services, build brand authority, and capture high-quality leads"
        image={BusinessWebImg}
      />

      {/* WHAT WE DELIVER */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mb-14">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Your Website Should Work as Hard as You Do
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We build high-performance, professionally designed business
              websites that do more than just look good — they generate leads,
              build trust, and establish your brand as the authority in your
              industry. Every site we deliver is custom-crafted to your goals,
              optimized for search engines, and built to convert visitors into
              paying clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Professional Brand Authority",
                desc: "A polished, credible online presence that instantly communicates trust and positions your business as the go-to choice in your market.",
              },
              {
                title: "Lead Generation Focused",
                desc: "Strategic page layouts, clear calls-to-action, and contact flows engineered to turn website visitors into qualified business inquiries.",
              },
              {
                title: "Built to Grow With You",
                desc: "Scalable website architecture that supports new services, content expansion, and integrations as your business evolves.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-md transition"
              >
                <h4 className="font-bold text-navy mb-3">{item.title}</h4>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <ServiceFeatures
        title="Our Website Development Capabilities"
        features={[
          "Custom Business Website Design & Development",
          "Service Pages, About & Contact Page Buildout",
          "Mobile-Responsive & Cross-Browser Compatible",
          "SEO-Optimized Structure & Page Speed Performance",
          "Lead Capture Forms & CRM / Email Integrations",
          "Ongoing Maintenance, Hosting & Support",
        ]}
      />

      {/* TECH STACK */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-14 text-center">
            Technologies & Platforms We Use
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Frontend Development",
                icon: <Globe className="w-6 h-6 text-teal" />,
                items: ["React.js", "Next.js", "Tailwind CSS", "HTML5 & CSS3"],
              },
              {
                title: "CMS & Backend",
                icon: <LayoutDashboard className="w-6 h-6 text-teal" />,
                items: ["WordPress", "Webflow", "Sanity CMS", "Node.js"],
              },
              {
                title: "Performance & SEO",
                icon: <Search className="w-6 h-6 text-teal" />,
                items: ["Core Web Vitals", "On-Page SEO", "Analytics Setup", "Schema Markup"],
              },
            ].map((stack, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-slate-200"
              >
                <div className="flex items-center gap-3 mb-5">
                  {stack.icon}
                  <h4 className="font-bold text-navy">{stack.title}</h4>
                </div>

                <div className="flex flex-wrap gap-3">
                  {stack.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 text-sm rounded-full bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-16 text-center">
            Website Solutions We Deliver
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Globe, text: "Multi-page business & service websites" },
              { icon: TrendingUp, text: "High-converting landing pages" },
              { icon: Layers, text: "Portfolio & case study showcases" },
              { icon: ShieldCheck, text: "Secure contact & lead capture forms" },
              { icon: Search, text: "SEO-ready websites built for Google rankings" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-4 p-6 bg-white rounded-xl border border-slate-200 hover:shadow-md transition"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-teal" />
                  </div>
                  <p className="text-slate-700 font-medium">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-12">
            Why Choose Our Website Development Team
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Custom-designed — no generic templates or page builders",
              "Built specifically to generate leads and grow your business",
              "SEO-optimized from the ground up for search visibility",
              "Fast-loading, mobile-first, and fully responsive",
              "Integrated with your tools — CRM, email, analytics & more",
              "Ongoing support, updates, and performance monitoring",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white p-6 rounded-xl border border-slate-200"
              >
                <span className="text-teal font-bold">✔</span>
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-sky-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Ready to Launch a Website That Wins Clients?
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            Let's build a professional, lead-generating website that showcases
            your brand, earns trust, and turns visitors into loyal customers.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 rounded-xl bg-teal text-white font-semibold hover:bg-teal/90 transition"
            >
              Start a Website Consultation
            </a>
            <a
              href="/Portfolio"
              className="px-8 py-4 rounded-xl border border-slate-300 font-semibold hover:bg-white transition"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
}