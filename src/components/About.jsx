import { useEffect, useRef } from "react";
import { 
  CheckCircle2, 
  Lightbulb, 
  PenTool, 
  TrendingUp, 
  Search, 
  ShieldCheck,
  Globe,
  Smartphone,
  Zap,
  BarChart3,
  IndianRupee,
  Headphones
} from "lucide-react";
import lottie from "lottie-web";

export default function About() {
  const lottieRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!lottieRef.current) return;
    if (animationRef.current) animationRef.current.destroy();

    animationRef.current = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/img/business.json",
      rendererSettings: { preserveAspectRatio: "xMidYMid meet" },
    });

    return () => animationRef.current?.destroy();
  }, []);

  return (
    <>
      {/* ================= 1. WHY CHOOSE US ================= */}
      <section id="why-choose" className="py-24 px-6 max-w-7xl mx-auto">

        <header className="text-center mb-16" data-aos="fade-up">
          <span className="text-teal font-bold uppercase tracking-widest text-sm">
            Why Choose Us
          </span>

          <h2 className="text-4xl font-bold text-navy mt-4">
            Exceptional Results
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-lg">
            We combine expertise, creativity, and dedication to deliver
            websites and ecommerce stores that improve visibility,
            conversions, and business growth.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            {
              title: "SEO-Ready Websites",
              desc: "Optimized for Google so customers can find you easily.",
              icon: <Globe className="text-teal" />,
            },
            {
              title: "Mobile-First Design",
              desc: "Responsive layouts that look perfect on all screens.",
              icon: <Smartphone className="text-teal" />,
            },
            {
              title: "Fast Delivery",
              desc: "Quick turnaround times without compromising quality.",
              icon: <Zap className="text-teal" />,
            },
            {
              title: "Business-Focused",
              desc: "Every decision is made to improve your bottom line.",
              icon: <BarChart3 className="text-teal" />,
            },
            {
              title: "Affordable Packages",
              desc: "Flexible pricing designed for startups and SMEs.",
              icon: <IndianRupee className="text-teal" />,
            },
            {
              title: "Dedicated Support",
              desc: "We are always here to help you, even after launch.",
              icon: <Headphones className="text-teal" />,
            },
          ].map((feature, idx) => (
            <article
              key={idx}
              className="flex gap-5"
              data-aos="fade-up"
              data-aos-delay={idx * 50}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center">
                {feature.icon}
              </div>

              <div>
                <h3 className="font-bold text-navy mb-1">
                  {feature.title}
                </h3>

                <p className="text-sm text-slate-500">
                  {feature.desc}
                </p>
              </div>
            </article>
          ))}

        </div>
      </section>

      {/* ================= 2. HOW WE WORK ================= */}
      <section id="process" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">

          <header className="text-center mb-16" data-aos="fade-up">
            <span className="text-teal font-bold uppercase tracking-widest text-sm">
              Process
            </span>

            <h2 className="text-4xl font-bold text-navy mt-4">
              How We Work
            </h2>

            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              Our streamlined process ensures quality results and client satisfaction.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

            {[
              {
                title: "Discovery",
                desc: "Understand your goals, target audience, and unique requirements.",
                icon: <Search size={20} />,
              },
              {
                title: "Free Sample",
                desc: "We deliver a high-quality sample that showcases our vision—completely free.",
                icon: <PenTool size={20} />,
                highlight: true,
              },
              {
                title: "Validation",
                desc: "Review the concept and quality first—decide if you move forward.",
                icon: <ShieldCheck size={20} />,
              },
              {
                title: "Execution",
                desc: "We implement the full solution with precision and technical excellence.",
                icon: <Lightbulb size={20} />,
              },
              {
                title: "Growth",
                desc: "Ongoing support to keep your brand fresh and growing month after month.",
                icon: <TrendingUp size={20} />,
              },
            ].map((item, index) => (
              <article
                key={index}
                className={`p-8 rounded-3xl transition-all ${
                  item.highlight
                    ? "bg-white shadow-xl ring-2 ring-teal scale-105 z-10"
                    : "bg-white border border-slate-100 hover:shadow-lg"
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className={`p-2 w-fit rounded-lg mb-4 ${
                    item.highlight
                      ? "bg-teal text-white"
                      : "bg-slate-100 text-teal"
                  }`}
                >
                  {item.icon}
                </div>

                <h3 className="font-bold text-navy mb-3 text-lg">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* ================= 3. TARGET MARKETS ================= */}
      <section id="industries" className="py-24 px-6 max-w-7xl mx-auto">

        <header className="text-center mb-16" data-aos="fade-up">
          <span className="text-teal font-bold uppercase tracking-widest text-sm">
            Target Markets
          </span>

          <h2 className="text-4xl font-bold text-navy mt-4">
            E-commerce Expertise
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            We specialize in building high-converting stores for businesses that need a powerful online presence.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center">

          {[
            "Shopify Stores",
            "Fashion & Retail",
            "Health & Beauty",
            "Electronics",
            "Digital Products",
          ].map((industry, index) => (
            <article
              key={industry}
              className="p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition border border-transparent hover:border-slate-100"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="font-bold text-navy">
                {industry}
              </h3>
            </article>
          ))}

        </div>
      </section>

      {/* ================= 4. ABOUT US ================= */}
      <section
        id="about"
        className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center"
      >

        <div className="relative" data-aos="fade-right">

          <div className="w-full h-[350px] sm:h-[400px] lg:h-[480px] rounded-[2.5rem] shadow-2xl border bg-white flex items-center justify-center overflow-hidden">
            <div ref={lottieRef} className="w-full h-full" />
          </div>

          <div className="absolute -bottom-6 -right-6 bg-navy text-white p-6 rounded-2xl shadow-xl max-w-[240px] hidden md:block">
            <p className="text-sm font-medium italic">
              "Review the concept first—then decide if you move forward."
            </p>
          </div>

        </div>

        <article data-aos="fade-left">

          <span className="text-teal font-bold uppercase tracking-widest text-sm">
            About Us
          </span>

          <h2 className="text-4xl font-bold text-navy mt-4 mb-6">
            Innovate. Improve. Succeed.
          </h2>

          <p className="text-slate-500 mb-6 text-lg leading-relaxed">
            Veyil Solutions is built on <b>transparency over blind commitment.</b>
            We create a preview of the proposed design direction for your store
            or brand before any investment.
          </p>

          <div className="bg-slate-50 border-l-4 border-teal p-5 mb-8 rounded-r-xl">
            <h3 className="font-bold text-navy mb-2 text-base">
              The "Clarity First" Policy
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              Before you invest, we create a preview of the proposed design direction.
              Review the concept, structure, and quality first—then decide whether
              to move forward.
            </p>
          </div>

          <ul className="space-y-4 mb-10 text-slate-700">

            <li className="flex items-center gap-4 font-semibold">
              <CheckCircle2 className="text-teal w-6 h-6" />
              High-quality free samples available
            </li>

            <li className="flex items-center gap-4 font-semibold">
              <CheckCircle2 className="text-teal w-6 h-6" />
              Clarity before payment – No blind commitment
            </li>

            <li className="flex items-center gap-4 font-semibold">
              <CheckCircle2 className="text-teal w-6 h-6" />
              Free sample for Shopify & Branding projects
            </li>

          </ul>

        </article>

      </section>

    </>
  );
}

