import ServiceHero from "../../components/ServiceHero";
import ServiceFeatures from "../../components/ServiceFeatures";
import {
  ShoppingBag,
  CreditCard,
  Package,
  Zap,
  Puzzle,
  Paintbrush,
  BarChart3,
  ShieldCheck,
  Headphones,
  Store,
  Globe,
  TrendingUp,
} from "lucide-react";
import ShopifyImg from "../../assets/web_develop.webp";

export default function ShopifyDevelopment() {
  return (
    <>
      {/* HERO */}
      <ServiceHero
        title={ <> 
                    Shopify <br className="hidden md:block" />
                    E-Commerce Development </>
              }
        subtitle="End-to-end Shopify store solutions — from storefront design to payment integration — built to convert visitors into loyal customers"
        image={ShopifyImg}
      />

      {/* WHAT WE DELIVER */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mb-14">
            <h2 className="text-3xl font-bold text-navy mb-4">
              What We Deliver
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We design and develop complete Shopify e-commerce experiences that
              drive revenue, streamline operations, and scale with your business.
              From custom storefront design to backend integrations, our
              solutions are tailored to your brand, your products, and your
              customers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Conversion-First Design",
                desc: "Storefronts crafted to guide customers from discovery to checkout with minimal friction and maximum trust.",
              },
              {
                title: "Seamless Integrations",
                desc: "Payment gateways, inventory tools, CRMs, and marketing apps connected into one cohesive commerce ecosystem.",
              },
              {
                title: "Performance & Growth",
                desc: "Speed-optimized, SEO-ready stores built to attract traffic, improve rankings, and support long-term growth.",
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
        title="Our Core Capabilities"
        features={[
          "Custom Shopify Store Setup & Configuration",
          "Theme Design & Development (Custom & Premium)",
          "Payment Gateway Integration (Razorpay, Stripe, PayPal & more)",
          "Product Upload, Variants & Inventory Management",
          "Speed Optimization & Core Web Vitals Improvement",
          "On-Page SEO & Structured Data Implementation",
          "App Integration — Reviews, Chatbots, Loyalty & Analytics",
          "Mobile-Responsive & Accessibility-Compliant Storefronts",
        ]}
      />

      {/* SERVICES BREAKDOWN */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-4 text-center">
            Everything Your Store Needs
          </h2>
          <p className="text-slate-600 text-lg text-center max-w-2xl mx-auto mb-16">
            A complete suite of Shopify services designed to launch, grow, and
            sustain your online business.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                icon: <Paintbrush className="w-6 h-6 text-teal" />,
                title: "Custom Store Setup & Theme Design",
                desc: "We build your Shopify store from the ground up — configuring your domain, store settings, collections, and navigation, then designing a theme that reflects your brand identity. Whether starting with a premium Shopify theme or building fully custom, every visual element is tailored to your audience and product range.",
              },
              {
                icon: <CreditCard className="w-6 h-6 text-teal" />,
                title: "Payment Gateway Integration",
                desc: "We integrate trusted payment solutions including Razorpay, Stripe, PayPal, and local payment methods to ensure secure, smooth transactions. Our setup includes checkout flow optimization, multi-currency support, and fraud prevention configurations to maximize successful payments.",
              },
              {
                icon: <Package className="w-6 h-6 text-teal" />,
                title: "Product Upload & Inventory Management",
                desc: "From bulk product uploads and variant configuration to real-time inventory tracking and low-stock alerts — we set up your catalog for efficient management. We also configure collections, filters, and tags to help customers find what they're looking for faster.",
              },
              {
                icon: <Zap className="w-6 h-6 text-teal" />,
                title: "Speed Optimization & SEO",
                desc: "Slow stores lose customers. We optimize Core Web Vitals, image compression, lazy loading, and code efficiency to achieve fast load times. Paired with on-page SEO — meta tags, structured data, canonical URLs, and sitemap configuration — your store is built to rank and retain.",
              },
              {
                icon: <Puzzle className="w-6 h-6 text-teal" />,
                title: "App Integration & Automation",
                desc: "Extend your store's capabilities with the right Shopify apps — product reviews (Judge.me, Yotpo), AI chatbots, loyalty programs (Smile.io), email marketing (Klaviyo, Mailchimp), and analytics dashboards. We evaluate, install, and configure apps that genuinely add value without bloating your store.",
              },
              {
                icon: <BarChart3 className="w-6 h-6 text-teal" />,
                title: "Analytics & Conversion Optimization",
                desc: "We connect Google Analytics 4, Meta Pixel, and Shopify Analytics to give you full visibility into store performance. Using heatmaps and A/B testing insights, we identify and fix friction points in the customer journey to improve conversion rates and average order value.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-md transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-navy text-lg">{item.title}</h4>
                </div>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-16 text-center">
            Store Types We Build
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShoppingBag, text: "Fashion & Apparel Stores" },
              { icon: Store, text: "D2C Brand Storefronts" },
              { icon: Globe, text: "Multi-currency International Stores" },
              { icon: Package, text: "Wholesale & B2B Portals" },
              { icon: TrendingUp, text: "High-volume Product Catalogs" },
              { icon: Zap, text: "Digital Product & Subscription Stores" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-md transition"
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
            Why Choose Veyil Solutions
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <ShieldCheck className="w-5 h-5 text-teal" />,
                text: "Shopify-certified development expertise",
              },
              {
                icon: <Zap className="w-5 h-5 text-teal" />,
                text: "Performance-first approach — fast stores, higher conversions",
              },
              {
                icon: <CreditCard className="w-5 h-5 text-teal" />,
                text: "Secure payment integrations with local & global gateways",
              },
              {
                icon: <BarChart3 className="w-5 h-5 text-teal" />,
                text: "Data-driven design grounded in e-commerce best practices",
              },
              {
                icon: <Headphones className="w-5 h-5 text-teal" />,
                text: "Dedicated post-launch support & ongoing maintenance",
              },
              {
                icon: <TrendingUp className="w-5 h-5 text-teal" />,
                text: "Scalable architecture — grows with your business",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white p-6 rounded-xl border border-slate-200"
              >
                <span className="mt-0.5">{item.icon}</span>
                <span className="text-slate-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-sky-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Ready to Launch Your Shopify Store?
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            Let our team build a high-converting, scalable Shopify store that
            grows your business from day one.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 rounded-xl bg-teal text-white font-semibold hover:bg-teal/90 transition"
            >
              Free Consultation
            </a>
            <a
              href="/#services"
              className="px-8 py-4 rounded-xl border border-slate-300 font-semibold hover:bg-white transition"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
}