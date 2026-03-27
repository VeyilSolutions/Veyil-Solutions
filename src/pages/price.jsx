import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Check,
  ChevronDown,
  ChevronRight,
  Globe,
  Layout,
  Smartphone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PricingPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const plans = [
    {
      name: "Free Sample",
      color: "gray",
      price: 0,
      description: "Blurred preview concept before any advance payment.",
      features: [
        "Homepage preview concept",
        "Design direction clarity",
        "No payment required",
      ],
      buttonText: "Request Sample",
      to: "/contact",
    },
    {
      name: "Starter Ecommerce Store",
      color: "blue",
      price: 8499,
      description: "Perfect for beginners starting online business.",
      features: [
        "Basic Shopify store setup",
        "Simple layout (no custom design)",
        "Up to 5 pages",
        "Up to 10 products",
        "Mobile optimized design",
        "Payment gateway integration",
        "Basic SEO setup",
        "20 Days Free Support",
        "Delivery: 5–7 Working Days",
      ],
      limitations: [
        "No custom homepage design",
        "Basic UI only",
        "Limited scalability",
      ],
      buttonText: "Start My Store",
      to: "/contact",
    },
    {
      name: "Growth Ecommerce Store",
      color: "purple",
      price: 14999,
      description: "For businesses ready to scale and increase sales.",
      features: [
        "Custom homepage design",
        "Conversion-focused layout",
        "Advanced product page design",
        "20+ products setup",
        "Structured navigation",
        "Brand-focused UI design",
        "Advanced mobile optimization",
        "SEO-ready structure",
        "Performance optimization",
        "30 Days Free Support",
        "Delivery: 7–10 Working Days",
      ],
      highlight: [
        "Higher conversion rate",
        "Premium brand feel",
        "Built for scaling",
      ],
      buttonText: "Upgrade My Business",
      to: "/contact",
    },
    {
      name: "Business Website",
      color: "teal",
      price: 12999,
      description:
        "Professional website built to generate leads, build trust, and grow your brand.",
      features: [
        "Custom-designed website (no templates)",
        "Service, About & Contact pages",
        "Mobile-first responsive design",
        "SEO-ready structure & fast performance",
        "Lead capture (WhatsApp / Email forms)",
        "Google Analytics setup",
        "Scalable for future growth",
        "30 Days Free Support",
        "Delivery: 7–12 Working Days",
      ],
      buttonText: "Build My Website",
      to: "/contact",
      isPopular: true,
    },
    {
      name: "Monthly Support",
      color: "gray",
      price: 2999,
      period: "month",
      description: "Ongoing design & store management support.",
      features: [
        "Product uploads",
        "Banner updates",
        "Social media creatives",
        "Minor website edits",
        "Priority support",
      ],
      buttonText: "Get Monthly Support",
      to: "/contact",
    },
  ];

  const colorMap = {
    gray: "border-gray-300 bg-gray-50",
    blue: "border-blue-500 bg-blue-50",
    purple: "border-purple-500 bg-purple-50",
    teal: "border-teal-500 bg-teal-50",
  };

  const faqs = [
    {
      question: "Are there any hidden charges?",
      answer:
        "No hidden charges. Shopify subscription and domain are paid directly by you.",
    },
    {
      question: "Are there any monthly charges?",
      answer:
        "We charge a one-time setup fee. Shopify platform charges are separate.",
    },
    {
      question: "What are your payment terms?",
      answer:
        "50% advance to start, 50% after final approval before going live.",
    },
    {
      question: "Do you offer free sample?",
      answer:
        "Yes, we provide a homepage preview before any advance payment.",
    },
  ];

  return (
    <div className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-teal font-bold uppercase tracking-widest text-sm">
            Pricing
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-navy mt-4">
             Simple Pricing to Launch & Grow Your Business Online
          </h1>

          <p className="text-slate-500 mt-6 text-lg">
             No hidden costs. No confusion. Just results-focused websites built to scale your business.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                    <span>Built for growing businesses</span>
              </div>

              <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                    <span>Fast delivery</span>
              </div>

              <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                    <span>Transparent pricing</span>
              </div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 border flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                plan.isPopular
                  ? "border-teal shadow-2xl scale-105 z-10 bg-white"
                  : `${colorMap[plan.color]}`
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal text-white px-4 py-1 rounded-full text-xs font-bold">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold text-navy mb-2">
                {plan.name}
              </h3>

              <p className="text-slate-500 mt-2 text-sm">
                {plan.description}
              </p>

              {/* PRICE */}
              <div className="mt-8 text-4xl font-bold text-navy">
                ₹{plan.price.toLocaleString()}
                {plan.period && (
                  <span className="text-base text-slate-400">
                    {" "} / {plan.period}
                  </span>
                )}
              </div>

              {/* SUBSCRIPTION BADGE */}
              {plan.period && (
                <span className="mt-2 text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full w-fit">
                  Subscription
                </span>
              )}

              {/* FEATURES */}
              <ul className="mt-8 space-y-4 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-600">
                    <Check className="h-5 w-5 text-teal flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* LIMITATIONS */}
              {plan.limitations && (
                <ul className="mt-4 space-y-1 text-xs text-red-500">
                  {plan.limitations.map((item, i) => (
                    <li key={i}>✖ {item}</li>
                  ))}
                </ul>
              )}

              {/* HIGHLIGHTS */}
              {plan.highlight && (
                <div className="mt-4 text-xs text-green-600 font-semibold">
                  {plan.highlight.map((item, i) => (
                    <div key={i}>✔ {item}</div>
                  ))}
                </div>
              )}

              {/* CTA FIXED */}
              <Link
                to={`/contact?plan=${encodeURIComponent(plan.name)}`}
                className={`mt-10 text-center rounded-xl px-6 py-4 font-bold transition-all hover:scale-105 active:scale-95 ${
                  plan.isPopular
                    ? "bg-navy text-white hover:bg-teal shadow-lg"
                    : "border border-slate-200 text-navy hover:border-teal hover:text-teal"
                }`}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>

        {/* ADDITIONAL COSTS */}
        <div className="mt-32">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-navy">Additional Costs</h3>
            <p className="text-slate-500 mt-2">
              External fees paid directly to providers
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Shopify Sub",
                icon: <Layout className="text-teal" />,
                desc: "Monthly platform hosting fee",
              },
              {
                title: "Domain Name",
                icon: <Globe className="text-teal" />,
                desc: "Website address (.com/.in)",
              },
              {
                title: "Database (Optional)",
                icon: <Layout className="text-teal" />,
                desc: "Stores website data (Business sites Only)",
              },
              {
                title: "Third-party Apps",
                icon: <Smartphone className="text-teal" />,
                desc: "Optional features",
              },
            ].map((cost, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center">
                  {cost.icon}
                </div>
                <div>
                  <h4 className="font-bold text-navy text-sm">
                    {cost.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    {cost.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-32 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy">Pricing FAQs</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-2xl bg-white">
                <button
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? null : index)
                  }
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className="font-bold text-navy">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`transition ${
                      activeFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      key="faq"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 overflow-hidden"
                    >
                      <p className="text-slate-600 text-sm">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white font-bold rounded-xl hover:bg-teal"
            >
              View All Questions
              <ChevronRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}