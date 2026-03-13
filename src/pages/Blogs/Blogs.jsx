import { Helmet } from "react-helmet-async";
import BlogComponent from "@/components/Blog";

export default function Blogs() {
  return (
    <>
      <Helmet>

        {/* PRIMARY SEO */}
        <title>Blog | Veyil Solutions</title>

        <meta
          name="description"
          content="Read expert insights about website development, ecommerce, Shopify stores, and digital business growth from Veyil Solutions."
        />

        <link
          rel="canonical"
          href="https://www.veyilsolutions.in/blogs"
        />

        {/* OPEN GRAPH */}
        <meta property="og:title" content="Blog | Veyil Solutions" />
        <meta
          property="og:description"
          content="Insights and guides about websites, ecommerce stores, Shopify development, and online business growth."
        />
        <meta
          property="og:url"
          content="https://www.veyilsolutions.in/blogs"
        />
        <meta
          property="og:image"
          content="https://www.veyilsolutions.in/img/Veyil.png"
        />
        <meta property="og:type" content="website" />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | Veyil Solutions" />
        <meta
          name="twitter:description"
          content="Guides and insights on ecommerce, website development, and digital growth."
        />
        <meta
          name="twitter:image"
          content="https://www.veyilsolutions.in/img/Veyil.png"
        />

        {/* BLOG SCHEMA */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Veyil Solutions Blog",
            "description":
              "Insights and articles about ecommerce, website development, Shopify stores, and digital business growth.",
            "url": "https://www.veyilsolutions.in/blogs",
            "publisher": {
              "@type": "Organization",
              "name": "Veyil Solutions",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.veyilsolutions.in/img/Veyil_Solutions.png"
              }
            }
          })}
        </script>

      </Helmet>

      <section className="min-h-screen bg-white px-6 pt-32 pb-20 dark:bg-black">

        <div className="mx-auto max-w-6xl text-center">

          <header>

            <h1 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Our Blog
            </h1>

            <div className="w-20 h-[2px] bg-black dark:bg-white mx-auto my-6 rounded-full opacity-80" />

            <p className="mx-auto max-w-2xl text-gray-500">
              Insights, guides, and ideas about building websites,
              launching ecommerce stores, and growing your business online.
            </p>

          </header>

        </div>

        {/* Blog List */}
        <div className="mt-16">
          <BlogComponent variant="page" />
        </div>

      </section>
    </>
  );
}

