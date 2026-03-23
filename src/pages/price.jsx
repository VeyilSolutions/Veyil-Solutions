import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Check,
  ChevronDown,
  ChevronRight,
  CreditCard,
  Globe,
  Layout,
  Smartphone,
} from "lucide-react";

export default function PricingPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const plans = [
    {
      name: "Free Sample",
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
      name: "Launch Store",
      price: 8000,
      description:
        "Perfect for Instagram & WhatsApp sellers starting online.",
      features: [
        "Shopify store setup",
        "Up to 7 pages",
        "Mobile optimized design",
        "Payment gateway integration",
        "Basic SEO setup",
        "30 Days Free Support",
        "Delivery: 5–7 Working Days",
      ],
      buttonText: "Start My Store",
      to: "/contact",
    },
    {
      name: "Growth Store",
      price: 15000,
      description:
        "For product businesses ready to scale professionally.",
      features: [
        "Up to 20 products setup",
        "Custom homepage layout",
        "Structured navigation",
        "Conversion-focused design",
        "Advanced mobile optimization",
        "Basic on-page SEO",
        "30 Days Free Support",
        "Delivery: 7–10 Working Days",
      ],
      buttonText: "Upgrade My Business",
      to: "/contact",
    },
    {
      name: "Business Website",
      price: 12000,
      description:
        "Professional website built to generate leads, build trust, and grow your brand.",
      features: [
        "Custom-designed website (no templates)",
        "Service, About & Contact pages",
        "Mobile-first responsive design",
        "SEO-ready structure & fast performance",
        "Lead capture (WhatsApp / Email forms)",
        "CRM / Email integration ready",
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
      price: 3000,
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

  const faqs = [
    {
      question: "Are there any hidden charges?",
      answer:
        "No hidden charges. Shopify subscription and domain are paid directly by you to the respective providers.",
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
        "Yes, we provide a blurred homepage preview before any advance payment.",
    },
  ];

  return (
    <div className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-teal font-bold uppercase tracking-widest text-sm">
            Pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mt-4">
            Clear Pricing. No Hidden Surprises.
          </h1>
          <p className="text-slate-500 mt-6 text-lg">
            Structured for growing businesses.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 border flex flex-col transition-all duration-300 hover:-translate-y-2 ${
                plan.isPopular
                  ? "border-teal shadow-2xl scale-105 z-10 bg-white"
                  : "border-slate-200 bg-white hover:shadow-xl"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal text-white px-4 py-1 rounded-full text-xs font-bold">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold text-navy">{plan.name}</h3>
              <p className="text-slate-500 mt-3 text-sm">
                {plan.description}
              </p>

              <div className="mt-8 text-4xl font-bold text-navy">
                ₹{plan.price.toLocaleString()}
                {plan.period && (
                  <span className="text-base text-slate-400">
                    {" "} / {plan.period}
                  </span>
                )}
              </div>

              <ul className="mt-8 space-y-4 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-600">
                    <Check className="h-5 w-5 text-teal flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to={plan.to}
                state={{ selectedPlan: plan.name }}
                className={`mt-10 text-center rounded-xl px-6 py-4 font-bold transition-all ${
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

        {/* Additional Costs */}
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
                desc: "Your website address (.com/.in)",
              },
              {
                title: "Database",
                icon: <Layout className="text-teal" />,
                desc: "Stores website data (users, content, orders)",
              },
              {
                title: "Third-party Apps",
                icon: <Smartphone className="text-teal" />,
                desc: "Optional premium features",
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
            <p className="text-slate-500 mt-2">
              Common questions about payments and process
            </p>
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

                {activeFaq === index && (
                  <p className="px-6 pb-6 text-slate-600 text-sm">
                    {faq.answer}
                  </p>
                )}
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