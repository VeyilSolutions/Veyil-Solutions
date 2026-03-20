import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ChevronDown } from "lucide-react";
import { faqData } from "@/data/faqData";

export default function Faq() {

  const [activeIndex, setActiveIndex] = useState(null);

  let counter = 0;

  /* FAQ Schema for SEO + GEO */

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
      {/* SEO + GEO Structured Data */}
      <Helmet>

        <title>
          Ecommerce FAQ – Online Store & Shopify Questions | Veyil Solutions
        </title>

        <meta
          name="description"
          content="Frequently asked questions about ecommerce websites, Shopify stores, online payments, shipping integration, and launching an online business."
        />

        <meta
          name="keywords"
          content="ecommerce website FAQ, Shopify store questions, online store development India, ecommerce business questions"
        />

        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>

      </Helmet>

      <section className="pt-32 pb-20 px-6 bg-slate-50 min-h-screen">
        

        <div className="max-w-4xl mx-auto">

          {/* Header */}

          <header className="text-center mb-16">

            <h1 className="text-4xl font-bold text-navy mb-4">
              Frequently Asked Questions
            </h1>

            <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
             Answers to common questions about building websites, launching
             online stores, and growing a digital business.
            </p>

          </header>

          {/* FAQ Sections */}

          <div className="space-y-12">

            {faqData.map((section, sectionIndex) => (

              <section key={sectionIndex}>

                {/* Category Title */}

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
                        className="group bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md"
                      >

                        {/* Question */}

                        <button
                          onClick={() =>
                            setActiveIndex(isOpen ? null : currentIndex)
                          }
                          className="w-full flex justify-between items-center p-6 text-left"
                        >

                          <h3 className="font-semibold text-navy pr-6 group-hover:text-teal transition-colors duration-200">
                            {item.question}
                          </h3>

                          <ChevronDown
                            className={`w-5 h-5 text-teal transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />

                        </button>

                        {/* Animated Answer */}

                        <div
                          className={`grid transition-all duration-300 ease-in-out ${
                            isOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >

                          <div className="overflow-hidden">

                            <div className="px-6 pb-6 text-slate-500 leading-relaxed text-sm">

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

          {/* Brand Authority Section (Important for GEO) */}

          <section className="mt-20 text-center max-w-2xl mx-auto">

            <h2 className="text-2xl font-bold text-navy mb-4">
              About Veyil Solutions
            </h2>

            <p className="text-slate-500 leading-relaxed">
              Veyil Solutions is a digital agency that helps entrepreneurs
              and businesses build professional websites, ecommerce stores,
              and scalable digital platforms. Our mission is to help
              businesses move from manual selling methods to automated
              online businesses that grow sustainably.
            </p>

          </section>

        </div>

      </section>

    </>
  );
}