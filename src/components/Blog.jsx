import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogData } from "@/data/blogData";

export default function Blog({ variant = "home", limit }) {

  const articles = limit ? blogData.slice(0, limit) : blogData;

  return (
    <section className="bg-white px-4 py-12 sm:py-16 md:py-20 dark:bg-black">
      <div className="mx-auto max-w-7xl">

        {/* HOME HEADER */}
        {variant === "home" && (
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl dark:text-white">
              Latest Articles
            </h2>

            <div className="w-20 h-[2px] bg-black dark:bg-white mx-auto my-5 rounded-full opacity-80" />
          </div>
        )}

        {/* BLOG GRID */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">

          {articles.map((article, index) => (

            <div
              key={index}
              className="group cursor-pointer border border-gray-300/50 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:border-gray-800 dark:bg-gray-950"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <p className="absolute top-0 left-0 bg-white px-3 py-1 text-xs uppercase dark:bg-black dark:text-white">
                  #{article.category}
                </p>
              </div>

              {/* CONTENT */}
              <div className="p-4">

                <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                  {article.title}
                </h3>

                <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                  {article.description}
                </p>

                <div className="flex items-center justify-between">

                  <Link
                    to={`/blog/${article.slug}`}
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    Read more
                    <ArrowRight size={16} />
                  </Link>

                  <span className="text-xs text-gray-500">
                    {article.publishDate}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* VIEW ALL BUTTON FOR HOME */}
        {variant === "home" && (
          <div className="mt-12 text-center">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 border px-6 py-3 text-sm font-medium transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            >
              View All Articles
              <ArrowRight size={16} />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}