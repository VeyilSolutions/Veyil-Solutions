import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ChevronDown, 
  ChevronRight, 
  CreditCard, 
  Globe, 
  Layout, 
  Smartphone 
} from "lucide-react";

export default function PricingPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const plans = [
    {
      name: "Free Sample",
      price: "0",
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
      price: "8000",
      description: "Perfect for Instagram & WhatsApp sellers starting online.",
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
      price: "15000",
      description: "For product businesses ready to scale professionally.",
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
      isPopular: true,
    },
    {
      name: "Monthly Support",
      price: "3000",
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
      answer: "No hidden charges. Shopify subscription and domain are paid directly by you to the respective providers. We only charge for our setup and design services."
    },
    {
      question: "Are there any monthly charges?",
      answer: "We charge a one-time setup fee for building your store. However, Shopify charges a monthly platform fee separately to keep your website live."
    },
    {
      question: "What are your payment terms?",
      answer: "We follow a 50/50 model: 50% advance to begin the project and the remaining 50% only after your final approval before the store goes live."
    },
    {
      question: "Do you offer free sample?",
      answer: "Yes. We believe in transparency. We provide a blurred preview of your proposed homepage design before you make any advance payment."
    }
  ];

  return (
    <div className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-teal font-bold uppercase tracking-widest text-sm">Pricing</span>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mt-4">
            Clear Pricing. No Hidden Surprises.
          </h1>
          <p className="text-slate-500 mt-6 text-lg">
            Structured for growing product businesses in Tamil Nadu.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 border flex flex-col transition-all duration-300 ${
                plan.isPopular
                  ? "border-teal shadow-2xl scale-105 z-10 bg-white"
                  : "border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold text-navy">{plan.name}</h3>
              <p className="text-slate-500 mt-3 text-sm leading-relaxed">{plan.description}</p>

              <div className="mt-8 text-4xl font-bold text-navy">
                ₹{plan.price}
                {plan.period && (
                  <span className="text-base font-normal text-slate-400"> / {plan.period}</span>
                )}
              </div>

              <ul className="mt-8 space-y-4 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 items-start text-sm text-slate-600">
                    <Check className="h-5 w-5 text-teal flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Link
                  to={plan.to}
                  state={{ selectedPlan: plan.name }}
                  className={`flex w-full justify-center rounded-xl px-6 py-4 text-sm font-bold transition-all ${
                    plan.isPopular
                      ? "bg-navy text-white hover:bg-teal"
                      : "bg-white border border-slate-200 text-navy hover:border-teal hover:text-teal"
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Costs Section */}
        <div className="mt-32">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-navy">Additional Costs</h3>
            <p className="text-slate-500 mt-2">External fees paid directly to providers</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Shopify Sub", icon: <Layout className="text-teal" />, desc: "Monthly platform hosting fee" },
              { title: "Domain Name", icon: <Globe className="text-teal" />, desc: "Your website address (.com/.in)" },
              { title: "Third-party Apps", icon: <Smartphone className="text-teal" />, desc: "Optional premium features" },
              { title: "Payment Gateway", icon: <CreditCard className="text-teal" />, desc: "Transaction fees (per order)" },
            ].map((cost, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  {cost.icon}
                </div>
                <div>
                  <h4 className="font-bold text-navy text-sm">{cost.title}</h4>
                  <p className="text-xs text-slate-500 mt-1">{cost.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-32 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy">Pricing FAQs</h2>
            <p className="text-slate-500 mt-2">Common questions about payments and process</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all duration-300 ${
                  activeFaq === index ? "border-teal bg-slate-50/50" : "border-slate-100 bg-white"
                }`}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className={`font-bold transition-colors ${activeFaq === index ? "text-teal" : "text-navy"}`}>
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                    activeFaq === index ? "rotate-180 text-teal" : "text-slate-400"
                  }`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  activeFaq === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}>
                  <p className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/faq" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white font-bold rounded-xl hover:bg-teal transition-all duration-300 group"
            >
              View All Questions
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}