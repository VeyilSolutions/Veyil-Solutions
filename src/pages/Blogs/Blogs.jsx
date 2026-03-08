import { Helmet } from "react-helmet-async";
import BlogComponent from "@/components/Blog";

export default function Blogs() {
  return (
    <>
      <Helmet>
        <title>Blog | Veyil Solutions</title>
        <meta
          name="description"
          content="Read insights about websites, ecommerce, digital business, and online growth from Veyil Solutions."
        />
      </Helmet>

      <section className="min-h-screen bg-white px-6 pt-32 pb-20 dark:bg-black">

        <div className="mx-auto max-w-6xl text-center">

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Our Blog
          </h1>

          <div className="w-20 h-[2px] bg-black dark:bg-white mx-auto my-6 rounded-full opacity-80" />

          <p className="mx-auto max-w-2xl text-gray-500">
            Insights, guides, and ideas about building websites,
            launching ecommerce stores, and growing your business online.
          </p>

        </div>

        {/* Blog List */}
        <div className="mt-16">
          <BlogComponent variant="page" />
        </div>

      </section>
    </>
  );
}