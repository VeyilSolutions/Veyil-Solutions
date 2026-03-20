import ServiceHero from "@/components/ServiceHero";
import ServiceFeatures from "@/components/ServiceFeatures";
import CreativeDesignImg from "@/assets/mobile.webp";

import {
  Sparkles,
  PenTool,
  Instagram,
  Layers,
  TrendingUp,
  Palette,
} from "lucide-react";

export default function CreativeDesign() {
  return (
    <>
      {/* HERO - SEO Optimized Title */}
      <ServiceHero
        title="Professional Creative Design & Visual Branding"
        subtitle="High-impact Instagram posts, custom posters, and bespoke website graphics designed to make your business stand out."
        image={CreativeDesignImg}
      />

      {/* WHAT WE DELIVER */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mb-14">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Visuals That Build Authority
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We specialize in crafting bold, professional visuals for business owners 
              looking to dominate their niche. Whether you need a cohesive Instagram 
              aesthetic, high-conversion posters, or custom-made assets for your website, 
              we deliver designs that turn viewers into loyal customers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Instagram Content Mastery",
                desc: "Scroll-stopping social media posts and story sets designed to increase engagement and build your brand's digital presence.",
              },
              {
                title: "Custom Poster Design",
                desc: "High-resolution posters for digital marketing or print that communicate your message clearly and professionally.",
              },
              {
                title: "Web-Ready Visual Assets",
                desc: "Custom banners, icons, and featured images created specifically to match your website's UI and branding.",
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
        title="Our Creative Design Specializations"
        features={[
          "Instagram Feed & Story Post Design",
          "Promotional Poster & Flyer Design",
          "Website Banner & Hero Images",
          "Branded Social Media Templates",
          "Custom Digital Marketing Graphics",
          "Print-Ready Marketing Materials",
        ]}
      />

      {/* DESIGN STACK - Updated with your specific tools */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-14 text-center">
            Our Professional Design Stack
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Visual Strategy",
                icon: <Palette className="w-6 h-6 text-teal" />,
                items: ["Color Theory", "Typography", "Visual Hierarchy", "Brand Consistency"],
              },
              {
                title: "Core Design Tools",
                icon: <PenTool className="w-6 h-6 text-teal" />,
                items: ["Affinity Designer", "Canva Pro", "Vector Illustration"],
              },
              {
                title: "Output Formats",
                icon: <Instagram className="w-6 h-6 text-teal" />,
                items: ["High-Res JPG/PNG", "Print-Ready PDF", "Social Media Templates"],
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
            Creative Assets We Deliver
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Instagram, text: "Engaging Instagram content for businesses" },
              { icon: Sparkles, text: "Clean and modern poster designs" },
              { icon: Layers, text: "Custom website graphics and icons" },
              { icon: TrendingUp, text: "High-conversion ad creatives" },
              { icon: PenTool, text: "Professional vector illustrations" },
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
            Why Partner With Our Design Team
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Pixel-perfect designs using Affinity Designer",
              "Efficient workflow with professional Canva templates",
              "Fast turnaround times for social media needs",
              "Visuals optimized for web performance and speed",
              "Unlimited creative collaboration for your brand",
              "Design consistency across all digital touchpoints",
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
            Ready to Elevate Your Visual Identity?
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            Let's create professional posters and social media content that 
            makes your brand unforgettable.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 rounded-xl bg-teal text-white font-semibold hover:bg-teal/90 transition"
            >
              Get a Design Quote
            </a>
            <a
              href="/#home"
              className="px-8 py-4 rounded-xl border border-slate-300 font-semibold hover:bg-white transition"
            >
              Back to Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
}