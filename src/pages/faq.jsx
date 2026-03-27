import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ChevronDown, Check } from "lucide-react";
import { faqData } from "@/data/faqData";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);
  let counter = 0;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.flatMap((section) =>
      section.questions.map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: q.answer,
        },
      }))
    ),
  };

  return (
    <>
      <Helmet>
        <title>
          Website & Ecommerce FAQ | Shopify, Business Websites | Veyil Solutions
        </title>

        <meta
          name="description"
          content="FAQs about website development, ecommerce stores, Shopify setup, and online business growth in India."
        />

        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <section className="pt-32 pb-20 px-6 bg-slate-50 min-h-screen">
        <div className="max-w-5xl mx-auto">

          {/* HEADER */}
          <header className="text-center mb-20">
            <h1 className="text-4xl font-bold text-navy mb-4">
              Frequently Asked Questions
            </h1>

            <p className="text-slate-500 max-w-2xl mx-auto">
              Answers to common questions about websites, ecommerce, and online business growth.
            </p>

            {/* ✅ TRUST ROW (ONLY ONCE HERE) */}
            <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Trusted by businesses</span>
              </div>

              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Fast delivery</span>
              </div>

              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>No hidden costs</span>
              </div>
            </div>
          </header>

          {/* CARDS */}
          <section className="mb-28">
            <div className="grid md:grid-cols-2 gap-8">

              {/* WHAT WE DO */}
              <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm hover:shadow-xl transition">
                <span className="text-xs font-bold tracking-widest text-teal uppercase">
                  What We Do
                </span>

                <h2 className="text-2xl font-bold text-navy mt-3 mb-4">
                  Build Websites That Generate Customers
                </h2>

                <p className="text-slate-600 leading-relaxed">
                  We create ecommerce websites, Shopify stores, and business websites
                  that help businesses get more leads and sales online.
                </p>

                <p className="text-slate-500 mt-4 text-sm">
                  Focused on SEO, performance, and conversion.
                </p>
              </div>

              {/* WHO WE HELP */}
              <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm hover:shadow-xl transition">
                <span className="text-xs font-bold tracking-widest text-indigo-500 uppercase">
                  Who We Help
                </span>

                <h2 className="text-2xl font-bold text-navy mt-3 mb-4">
                  Businesses Ready to Grow Online
                </h2>

                <ul className="space-y-3 text-slate-600 text-sm">
                  {[
                    "Saree wholesalers",
                    "Construction companies",
                    "Local service businesses",
                    "Ecommerce brands",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </section>

          {/* FAQ */}
          <div className="space-y-12">

            {faqData.map((section, sectionIndex) => (
              <section key={sectionIndex}>
                <h2 className="text-xl font-bold text-navy mb-6">
                  {section.category}
                </h2>

                <div className="space-y-4">

                  {section.questions.map((item, index) => {
                    const currentIndex = counter++;
                    const isOpen = activeIndex === currentIndex;

                    return (
                      <article
                        key={index}
                        className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition"
                      >

                        <button
                          onClick={() =>
                            setActiveIndex(isOpen ? null : currentIndex)
                          }
                          className="w-full flex justify-between items-center p-6 text-left"
                        >
                          <h3 className="font-semibold text-navy pr-6">
                            {item.question}
                          </h3>

                          <ChevronDown
                            className={`transition ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <div
                          className={`grid transition-all duration-300 ${
                            isOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="px-6 pb-6 text-slate-500 text-sm">
                              {item.answer}
                            </div>
                          </div>
                        </div>

                      </article>
                    );
                  })}

                </div>
              </section>
            ))}

          </div>

          {/* ABOUT */}
          <section className="mt-28">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-[2.5rem] p-12 text-center shadow-2xl">

              <span className="text-xs uppercase tracking-widest text-teal font-bold">
                About Veyil Solutions
              </span>

              <h2 className="text-3xl font-bold mt-4 mb-6">
                We Build Websites That Grow Businesses
              </h2>

              <p className="text-slate-300 max-w-2xl mx-auto">
                Veyil Solutions helps businesses move from manual selling to automated online systems.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
                {["SEO Optimized", "Conversion Focused", "Built for Growth"].map(
                  (item, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"
                    >
                      <Check className="w-4 h-4 text-green-400" />
                      {item}
                    </span>
                  )
                )}
              </div>

            </div>
          </section>

        </div>
      </section>
    </>
  );
}