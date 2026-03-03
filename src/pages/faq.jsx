import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    category: "1. Starting an Online Store",
    questions: [
      {
        question:
          "I sell only through Instagram/WhatsApp. Do I really need a website?",
        answer:
          "A website increases trust, automates order collection, reduces manual work, and improves brand credibility. It also helps you scale beyond DMs.",
      },
      {
        question: "I run an offline shop. Can I move online?",
        answer:
          "Yes. We help offline businesses create a professional online presence with structured product listings, payments, and delivery integration.",
      },
      {
        question:
          "I am just starting. Can I launch with few products?",
        answer:
          "Yes. You can start small and expand later. The store structure allows you to add products anytime.",
      },
    ],
  },
  {
    category: "2. Ownership & Control",
    questions: [
      {
        question: "Will the website be fully owned by me?",
        answer:
          "Yes. The Shopify account and domain will be registered in your name. You have full ownership and control.",
      },
      {
        question: "Can I change developer in the future?",
        answer:
          "Yes. Since the store is in your name, you can work with any developer in the future if needed.",
      },
    ],
  },
  {
    category: "3. Pricing & Payments",
    questions: [
      {
        question: "Are there any hidden charges?",
        answer:
          "No hidden charges. Shopify subscription, domain, and paid apps are paid directly by you to respective providers.",
      },
      {
        question: "What is Shopify monthly fee?",
        answer:
          "Shopify charges approximately ₹1,999 per month + GST for hosting and platform usage.",
      },
      {
        question: "What are your payment terms?",
        answer:
          "50% advance to begin and 50% after final approval before launch.",
      },
    ],
  },
  {
    category: "4. Design & Customization",
    questions: [
      {
        question: "Will my website look unique?",
        answer:
          "Yes. We customize layout, colors, fonts, and structure based on your brand identity.",
      },
      {
        question: "Can you design logo and branding?",
        answer:
          "Yes. We provide logo design, branding kits, and social media creatives separately or bundled.",
      },
    ],
  },
  {
    category: "5. Payment & Shipping Integration",
    questions: [
      {
        question:
          "Can customers pay via UPI, Cards, GPay, PhonePe?",
        answer:
          "Yes. We integrate Razorpay or similar gateways for UPI, cards, and net banking.",
      },
      {
        question: "Can you integrate shipping partners?",
        answer:
          "Yes. We can integrate shipping solutions like Shiprocket or Delhivery for order tracking and logistics.",
      },
    ],
  },
  {
    category: "6. Growth & Scaling",
    questions: [
      {
        question:
          "Can the website handle large traffic in the future?",
        answer:
          "Yes. Shopify is built to scale from small stores to large D2C brands.",
      },
      {
        question: "Can I run ads later?",
        answer:
          "Yes. The store will be ad-ready for Meta Ads, Google Ads, and other platforms.",
      },
    ],
  },
  {
    category: "7. Support & Maintenance",
    questions: [
      {
        question: "Do you provide support after launch?",
        answer:
          "Yes. 30 days free support after launch. Monthly maintenance plans are also available.",
      },
      {
        question: "Can you manage my store every month?",
        answer:
          "Yes. We offer monthly design and store management plans.",
      },
    ],
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  let counter = 0;

  return (
    <section className="py-20 px-6 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-navy mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-500">
            Everything you need to know before launching your online store.
          </p>
        </div>

        <div className="space-y-12">
          {faqData.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h2 className="text-xl font-bold text-navy mb-6">
                {section.category}
              </h2>

              <div className="space-y-4">
                {section.questions.map((item, index) => {
                  const currentIndex = counter++;
                  const isOpen = activeIndex === currentIndex;

                  return (
                    <div
                      key={index}
                      className="bg-white border border-slate-200 rounded-2xl overflow-hidden"
                    >
                      <button
                        onClick={() =>
                          setActiveIndex(
                            isOpen ? null : currentIndex
                          )
                        }
                        className="w-full flex justify-between items-center p-6 text-left"
                      >
                        <span className="font-semibold text-navy pr-4">
                          {item.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-teal transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 text-slate-500">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}