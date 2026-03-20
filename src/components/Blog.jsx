import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogData } from "@/data/blogData";

export default function Blog({ variant = "home", limit }) {
  const articles = limit ? blogData.slice(0, limit) : blogData;

  return (
    <section className="bg-white px-4 py-12 sm:py-16 md:py-20 dark:bg-black">
      <div className="mx-auto max-w-7xl">

        {/* HEADER SECTION */}
        {variant === "home" && (
          <header className="mb-10 text-center sm:mb-16">
            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500 sm:mb-3 sm:text-xs dark:text-gray-400">
              Our Insights
            </p>

            <h2 className="text-3xl font-normal tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
              Latest Articles
            </h2>
          </header>
        )}

        {/* BLOG GRID */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">

          {articles.map((article) => (

            <article
              key={article.slug}
              className="group cursor-pointer border border-gray-300/50 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl dark:border-gray-800/50 dark:bg-gray-950/50"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                <img
                  src={article.image}
                  alt={`${article.title} - Blog by Veyil Solutions`}
                  loading="lazy"
                  className="aspect-square h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-72 md:h-80"
                />

                <p className="absolute left-0 top-0 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black dark:bg-gray-950/90 dark:text-gray-200">
                  #{article.category}
                </p>

              </div>

              {/* CONTENT */}
              <div className="p-5 sm:p-6">

                <h3 className="mb-3 text-lg font-normal leading-snug text-gray-900 tracking-tight transition-colors group-hover:text-blue-600 sm:text-xl dark:text-white dark:group-hover:text-blue-400">
                  {article.title}
                </h3>

                <p className="mb-6 line-clamp-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {article.description}
                </p>

                {/* READ MORE */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                  <Link
                    to={`/blog/${article.slug}`}
                    aria-label={`Read blog: ${article.title}`}
                    className="group/btn relative flex items-center text-sm font-semibold text-gray-900 transition-colors hover:text-gray-700 sm:text-base dark:text-gray-100 dark:hover:text-gray-300"
                  >

                    <span className="relative mr-3 flex h-9 w-9 items-center justify-center overflow-hidden border border-gray-200 transition-colors duration-300 group-hover/btn:bg-black group-hover/btn:text-white sm:h-10 sm:w-10 dark:border-gray-800 dark:group-hover/btn:bg-white dark:group-hover/btn:text-black">

                      <ArrowRight className="h-3.5 w-3.5 translate-x-0 transition-all duration-500 ease-in-out group-hover/btn:translate-x-10 group-hover/btn:opacity-0 sm:h-4 sm:w-4" />

                      <ArrowRight className="absolute -left-6 h-3.5 w-3.5 transition-all duration-500 ease-in-out group-hover/btn:left-2.5 sm:h-4 sm:w-4 sm:group-hover/btn:left-3" />

                    </span>

                    Read more

                  </Link>

                  <span className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-500 sm:text-xs">

                    {article.publishDate}

                    <span className="w-6 border-t border-gray-300 sm:w-8 dark:border-gray-700" />

                  </span>

                </div>

              </div>

            </article>

          ))}

        </div>

        {/* VIEW ALL BUTTON */}
        {variant === "home" && (
          <div className="mt-12 text-center sm:mt-16">

            <Link
              to="/blogs"
              className="group relative inline-flex items-center gap-2 overflow-hidden border-2 border-black px-6 py-3 text-xs font-bold uppercase tracking-widest text-black transition-colors duration-300 hover:text-white sm:px-10 sm:py-4 sm:text-base sm:font-black dark:border-white dark:text-white dark:hover:text-black"
            >

              <span className="relative z-10 flex items-center gap-2 sm:gap-3">

                Explore All Stories

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-2 sm:size-5"
                />

              </span>

              <span className="absolute inset-0 z-0 translate-y-full bg-black transition-transform duration-300 ease-out group-hover:translate-y-0 dark:bg-white" />

            </Link>

          </div>
        )}

      </div>
    </section>
  );
}

