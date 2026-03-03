import ServiceHero from "../../components/ServiceHero";
import ServiceFeatures from "../../components/ServiceFeatures";
import CreativeDesignImg from "../../assets/mobile.webp";

import {
  Sparkles,
  PenTool,
  Instagram,
  Layers,
  TrendingUp,
  Star,
} from "lucide-react";

export default function CreativeDesign() {
  return (
    <>
      {/* HERO */}
      <ServiceHero
        title="Creative Design Services"
        subtitle="High-impact visuals and custom branding designed to make your business stand out and capture your audience's attention"
        image={CreativeDesignImg}
      />

      {/* WHAT WE DELIVER */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mb-14">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Designs That Stop the Scroll
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We craft bold, eye-catching visuals tailored for business owners
              who want to dominate on Instagram and beyond. From branded social
              media posts to full creative campaigns, our designs tell your
              story and turn followers into customers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Instagram-Ready Posts",
                desc: "Scroll-stopping social content crafted specifically for business owners to build brand presence and drive engagement.",
              },
              {
                title: "Custom Brand Identity",
                desc: "Cohesive visual identities — logos, color palettes, and typography — that make your business instantly recognizable.",
              },
              {
                title: "Results-Driven Creatives",
                desc: "Every design is built with strategy in mind — to attract attention, build trust, and convert your audience into clients.",
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
        title="Our Creative Design Capabilities"
        features={[
          "Instagram & Social Media Post Design",
          "Business Branding & Logo Design",
          "Marketing Flyers & Promotional Graphics",
          "Brand Style Guides & Visual Identity",
          "Story, Reel & Carousel Templates",
          "Print & Digital Ad Creatives",
        ]}
      />

      {/* DESIGN STACK */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-14 text-center">
            Creative Tools & Methodologies
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Brand Strategy",
                icon: <Star className="w-6 h-6 text-teal" />,
                items: ["Competitor Research", "Brand Positioning", "Audience Analysis", "Visual Direction"],
              },
              {
                title: "Visual Design",
                icon: <PenTool className="w-6 h-6 text-teal" />,
                items: ["Adobe Illustrator", "Photoshop", "Canva Pro", "Figma"],
              },
              {
                title: "Content Creation",
                icon: <Instagram className="w-6 h-6 text-teal" />,
                items: ["Post Templates", "Story Designs", "Carousel Layouts", "Reel Covers"],
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
            Creative Solutions We Deliver
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Instagram, text: "Instagram feed & story posts for businesses" },
              { icon: Sparkles, text: "Custom logo & brand identity design" },
              { icon: Layers, text: "Promotional flyers & marketing materials" },
              { icon: TrendingUp, text: "Ad creatives for paid social campaigns" },
              { icon: PenTool, text: "Brand style guides & design systems" },
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
            Why Choose Our Creative Team
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Designs tailored specifically for business owners",
              "Instagram-optimized visuals that drive real engagement",
              "Brand-consistent creatives across all platforms",
              "Fast turnaround with unlimited revision rounds",
              "Strategy-led design rooted in your target audience",
              "Scalable content packages for ongoing social needs",
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
            Ready to Make Your Brand Unforgettable?
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            Let's create stunning visuals that capture attention, build your
            brand, and turn your Instagram into a powerful business tool.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 rounded-xl bg-teal text-white font-semibold hover:bg-teal/90 transition"
            >
              Start a Creative Consultation
            </a>
            <a
              href="/#services"
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