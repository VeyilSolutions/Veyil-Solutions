import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"; // Use "next/link" if using Next.js
import { blogData } from "@/data/blogData";

export default function Blog({ variant = "home", limit }) {
  const articles = limit ? blogData.slice(0, limit) : blogData;

  return (
    <section className="bg-white px-4 py-12 sm:py-16 md:py-20 dark:bg-black">
      <div className="mx-auto max-w-7xl">
        
        {/* HEADER SECTION */}
        {variant === "home" && (
          <div className="mb-10 text-center sm:mb-16">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400">
              Our Insights
            </p>
            <h2 className="text-3xl font-normal tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
              Latest Articles
            </h2>
          </div>
        )}

        {/* BLOG GRID */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group cursor-pointer border border-gray-300/50 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl dark:border-gray-800/50 dark:bg-gray-950/50"
            >
              {/* IMAGE SECTION */}
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="aspect-square h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-72 md:h-80"
                />
                <p className="absolute left-0 top-0 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black dark:bg-gray-950/90 dark:text-gray-200">
                  #{article.category}
                </p>
              </div>

              {/* CONTENT SECTION */}
              <div className="p-5 sm:p-6">
                <h3 className="mb-3 text-xl font-normal leading-snug text-gray-900 tracking-tight transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  {article.title}
                </h3>

                <p className="mb-6 line-clamp-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {article.description}
                </p>

                {/* READ MORE & DATE ROW */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <Link
                    to={`/blog/${article.slug}`}
                    className="group/btn relative flex items-center text-base font-semibold text-gray-900 transition-colors hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-300"
                  >
                    <span className="relative mr-3 flex h-10 w-10 items-center justify-center overflow-hidden border border-gray-200 transition-colors duration-300 group-hover/btn:bg-black group-hover/btn:text-white dark:border-gray-800 dark:group-hover/btn:bg-white dark:group-hover/btn:text-black">
                      {/* First Icon (Slides out to right) */}
                      <ArrowRight className="h-4 w-4 translate-x-0 transition-all duration-500 ease-in-out group-hover/btn:translate-x-10 group-hover/btn:opacity-0" />
                      {/* Second Icon (Slides in from left) */}
                      <ArrowRight className="absolute -left-6 h-4 w-4 transition-all duration-500 ease-in-out group-hover/btn:left-3" />
                    </span>
                    Read more
                  </Link>

                  <span className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-500 sm:text-xs">
                    {article.publishDate}
                    <span className="w-8 border-t border-gray-300 dark:border-gray-700" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* VIEW ALL BUTTON (VARIANT HOME) */}
        {variant === "home" && (
          <div className="mt-16 text-center">
            <Link
              to="/blogs"
              className="group relative inline-flex items-center gap-4 border border-black px-10 py-4 text-base font-bold uppercase tracking-widest text-black transition-all duration-300 hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
            >
              View All Articles
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}