import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { ArrowLeft, Calendar, Clock, Share2, ListTree } from "lucide-react";
import { FaXTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { blogData } from "@/data/blogData";

export default function BlogDetails() {
  const { slug } = useParams();
  const blog = blogData.find((item) => item.slug === slug);

  const relatedBlogs = blogData
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = window.scrollY;
      setScrollProgress((scroll / totalHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!blog) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Article Not Found
        </h1>
      </div>
    );
  }

  /* ================= TOC ================= */
  const headings = blog.content
    .filter((block) => block.type === "heading")
    .map((block) => ({
      id: block.text.toLowerCase().replace(/\s+/g, "-"),
      text: block.text,
    }));

  const handleAnchorClick = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = 100;
    const position =
      element.getBoundingClientRect().top + window.pageYOffset - headerOffset;

    window.scrollTo({ top: position, behavior: "smooth" });
  };

  return (
    <>
      {/* Progress */}
      <div
        className="fixed left-0 top-0 z-[60] h-[3px] bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <section className="relative min-h-screen bg-white pt-20 pb-16 dark:bg-black md:pt-24 md:pb-20">

        {/* SEO (UNCHANGED) */}
        <Helmet>
          <title>{blog.title} | Veyil Solutions</title>
          <meta name="description" content={blog.description} />
          <link rel="canonical" href={`https://www.veyilsolutions.in/blogs/${blog.slug}`} />
        </Helmet>

        {/* SHARE BUTTONS (unchanged UI, only spacing reduced) */}
        <div className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 rounded-2xl bg-white/70 p-3 shadow-lg backdrop-blur-md ring-1 ring-black/10 dark:bg-white/10 dark:ring-white/20 lg:flex">
          <button
            onClick={() => window.open(`https://twitter.com/intent/tweet?text=${blog.title}&url=${window.location.href}`)}
            className="rounded-full bg-black/5 p-2.5 text-black backdrop-blur-md ring-1 ring-black/5 transition hover:scale-110 dark:bg-white/10 dark:text-white"
          >
            <FaXTwitter size={16} />
          </button>

          <button
            onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`)}
            className="rounded-full bg-blue-600/5 p-2.5 text-blue-600 backdrop-blur-md ring-1 ring-blue-600/10 transition hover:scale-110"
          >
            <FaFacebookF size={16} />
          </button>

          <button
            onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`)}
            className="rounded-full bg-blue-700/5 p-2.5 text-blue-700 backdrop-blur-md ring-1 ring-blue-700/10 transition hover:scale-110"
          >
            <FaLinkedinIn size={16} />
          </button>
        </div>

        {/* BG (unchanged, just reduced height) */}
        <div className="absolute top-0 left-1/2 -z-[1] h-[600px] w-full -translate-x-1/2 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gray-100 via-transparent to-transparent dark:from-gray-800/40"></div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6">

          {/* NAV */}
          <div className="mb-8">
            <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
              <Link to="/blogs" className="flex items-center hover:text-black dark:hover:text-white">
                <ArrowLeft className="mr-2 h-3 w-3" /> Blog
              </Link>
              <span>/</span>
              <span className="truncate max-w-[200px]">{blog.category}</span>
            </nav>
          </div>

          {/* HEADER (same design, font scaled) */}
          <header className="mb-10 border-l-4 border-black pl-4 dark:border-white md:pl-6">
            <div className="mb-3 inline-block rounded bg-gray-100 px-3 py-1 text-[10px] font-black uppercase tracking-widest dark:bg-white/10">
              {blog.category}
            </div>

            <h1 className="max-w-4xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
              {blog.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-5 text-xs font-bold uppercase tracking-widest text-gray-400">
              <span className="flex items-center gap-2">
                <Calendar size={14} />
                {blog.publishDate}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} />
                {blog.readingTime}
              </span>
            </div>
          </header>

          {/* HERO (same UI, reduced gap) */}
          <div className="mb-14 overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5 dark:ring-white/10">
            <img
              src={blog.image}
              alt={blog.title}
              className="aspect-[21/9] w-full max-h-[360px] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* TOC (same UI, compact spacing) */}
          {headings.length > 0 && (
            <div className="mx-auto mb-14 max-w-4xl">
              <div className="rounded-2xl bg-gray-50 p-6 dark:bg-white/[0.03] dark:ring-1 dark:ring-white/10">
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-lg bg-black p-2 dark:bg-white">
                    <ListTree size={16} className="text-white dark:text-black" />
                  </div>
                  <h3 className="text-base font-bold">In this article</h3>
                </div>

                <div className="grid gap-x-10 gap-y-3 md:grid-cols-2">
                  {headings.map((heading, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnchorClick(heading.id)}
                      className="group flex items-start gap-3 text-left hover:translate-x-1 transition"
                    >
                      <span className="mt-2 h-1 w-1 rounded-full bg-gray-300 group-hover:bg-black" />
                      <span className="text-sm text-gray-600 group-hover:text-black">
                        {heading.text}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* CONTENT */}
          <article className="mx-auto max-w-3xl space-y-6 sm:space-y-8">

            {blog.content.map((block, index) => {
              if (block.type === "paragraph") {
                return (
                  <p key={index} className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    {block.text}
                  </p>
                );
              }

              if (block.type === "heading") {
                const id = block.text.toLowerCase().replace(/\s+/g, "-");
                return (
                  <h2
                    id={id}
                    key={index}
                    className="mt-12 text-xl sm:text-2xl font-bold"
                  >
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "list") {
                return (
                  <ul key={index} className="space-y-3 border-l-2 border-gray-100 pl-5 dark:border-gray-800">
                    {block.items.map((item, i) => (
                      <li key={i} className="text-base text-gray-700 dark:text-gray-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }

              if (block.type === "quote") {
                return (
                  <blockquote key={index} className="rounded-xl bg-gray-50 p-6 dark:bg-white/5">
                    <p className="italic text-gray-800 dark:text-gray-200">
                      "{block.text}"
                    </p>
                  </blockquote>
                );
              }

              return null;
            })}

            {/* SHARE + TAGS */}
            <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-gray-100 pt-6 dark:border-white/10">
              <button className="flex items-center gap-2 rounded-full bg-black px-6 py-2 text-sm font-bold text-white hover:bg-gray-800">
                <Share2 size={14} />
                Share Post
              </button>

              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span key={index} className="rounded bg-gray-100 px-3 py-1 text-xs font-bold">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* AUTHOR */}
          <div className="mx-auto mt-16 flex max-w-4xl flex-col items-center gap-6 rounded-2xl bg-gray-50 p-6 text-center dark:bg-white/[0.03] md:flex-row md:text-left">
            <img
              src="/img/Veyil_Solutions.png"
              className="h-20 w-20 rounded-full"
            />
            <div>
              <h4 className="text-xl font-bold">{blog.author}</h4>
              <p className="text-sm text-gray-500">
                {blog.authorSubtext}
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}