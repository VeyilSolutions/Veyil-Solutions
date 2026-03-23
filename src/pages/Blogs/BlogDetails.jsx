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
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Article Not Found</h1>
      </div>
    );
  }

  /* ================= TABLE OF CONTENTS LOGIC ================= */
  const headings = blog.content
    .filter((block) => block.type === "heading")
    .map((block) => ({
      id: block.text.toLowerCase().replace(/\s+/g, "-"),
      text: block.text
    }));

  // Fix for Loader: Manual scroll prevents route change & loader triggers
  const handleAnchorClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 110; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* Reading Progress Bar - Themed Color */}
      <div
        className="fixed left-0 top-0 z-[60] h-[3px] bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <section className="relative min-h-screen bg-white pb-24 pt-24 dark:bg-black md:pt-32">
        {/* SEO META */}
        <Helmet>
          <title>{blog.title} | Veyil Solutions</title>
          <meta name="description" content={blog.description} />
          <link rel="canonical" href={`https://www.veyilsolutions.in/blogs/${blog.slug}`} />
          <meta property="og:title" content={blog.title} />
          <meta property="og:description" content={blog.description} />
          <meta property="og:image" content={blog.image} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={`https://www.veyilsolutions.in/blogs/${blog.slug}`} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={blog.title} />
          <meta name="twitter:description" content={blog.description} />
          <meta name="twitter:image" content={blog.image} />
          <meta property="article:published_time" content={blog.publishDate} />

          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": blog.title,
              "description": blog.description,
              "image": blog.image,
              "url": `https://www.veyilsolutions.in/blogs/${blog.slug}`,
              "datePublished": blog.publishDate,
              "author": { "@type": "Organization", "name": "Veyil Solutions" },
              "publisher": {
                "@type": "Organization",
                "name": "Veyil Solutions",
                "logo": { "@type": "ImageObject", "url": "https://www.veyilsolutions.in/img/Veyil_Solutions.png" }
              }
            })}
          </script>
        </Helmet>

        {/* Sticky Share Buttons - Responsive and Clean */}
        <div className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-4 lg:flex">
          <button
            onClick={() => window.open(`https://twitter.com/intent/tweet?text=${blog.title}&url=${window.location.href}`)}
            className="rounded-full bg-black/5 p-3 text-black backdrop-blur-md ring-1 ring-black/5 transition hover:scale-110 dark:bg-white/10 dark:text-white dark:ring-white/10"
          >
            <FaXTwitter size={18} />
          </button>
          <button
            onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`)}
            className="rounded-full bg-blue-600/5 p-3 text-blue-600 backdrop-blur-md ring-1 ring-blue-600/10 transition hover:scale-110"
          >
            <FaFacebookF size={18} />
          </button>
          <button
            onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`)}
            className="rounded-full bg-blue-700/5 p-3 text-blue-700 backdrop-blur-md ring-1 ring-blue-700/10 transition hover:scale-110"
          >
            <FaLinkedinIn size={18} />
          </button>
        </div>

        {/* Background Mesh Gradient */}
        <div className="absolute top-0 left-1/2 -z-[1] h-[700px] w-full -translate-x-1/2 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gray-100 via-transparent to-transparent dark:from-gray-800/40"></div>

        <div className="mx-auto max-w-5xl px-6">
          {/* NAV / BREADCRUMB */}
          <div className="mb-10">
            <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
              <Link to="/blogs" className="flex items-center hover:text-black dark:hover:text-white transition-colors">
                <ArrowLeft className="mr-2 h-3 w-3" /> Blog
              </Link>
              <span>/</span>
              <span className="text-gray-300 dark:text-gray-600 truncate max-w-[200px]">{blog.category}</span>
            </nav>
          </div>

          {/* HEADER - Refined Left Aligned UI */}
          <header className="mb-12 border-l-4 border-black pl-6 dark:border-white md:pl-8">
            <div className="mb-4 inline-block rounded bg-gray-100 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-gray-800 dark:bg-white/10 dark:text-gray-300">
              {blog.category}
            </div>
            
            <h1 className="max-w-4xl text-3xl font-extrabold leading-[1.1] tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              {blog.title}
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
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

          {/* HERO - Reduced Height UI */}
          <div className="mb-20 overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5 dark:ring-white/10">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="aspect-[21/9] w-full max-h-[420px] object-cover transition-transform duration-1000 hover:scale-105" 
            />
          </div>

          {/* TABLE OF CONTENTS - Modern UI Fix */}
          {headings.length > 0 && (
            <div className="mx-auto mb-20 max-w-4xl">
              <div className="relative overflow-hidden rounded-2xl bg-gray-50 p-8 dark:bg-white/[0.03] dark:ring-1 dark:ring-white/10">
                <div className="relative z-10">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-lg bg-black p-2 dark:bg-white">
                      <ListTree size={18} className="text-white dark:text-black" />
                    </div>
                    <h3 className="text-lg font-bold tracking-tight dark:text-white">In this article</h3>
                  </div>
                  
                  <div className="grid gap-x-12 gap-y-4 md:grid-cols-2">
                    {headings.map((heading, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnchorClick(heading.id)}
                        className="group flex items-start gap-3 text-left transition-all hover:translate-x-1"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-300 transition-colors group-hover:bg-black dark:bg-gray-700 dark:group-hover:bg-white" />
                        <span className="text-sm font-medium text-gray-600 transition-colors group-hover:text-black dark:text-gray-400 dark:group-hover:text-white">
                          {heading.text}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CONTENT */}
          <article className="mx-auto max-w-3xl space-y-10">
            {blog.content.map((block, index) => {
              if (block.type === "paragraph") {
                return (
                  <p key={index} className="text-lg leading-[1.8] text-gray-700 dark:text-gray-300 md:text-xl">
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
                    className="mt-16 scroll-mt-28 text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:text-3xl"
                  >
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "list") {
                return (
                  <ul key={index} className="space-y-4 border-l-2 border-gray-100 pl-6 dark:border-gray-800">
                    {block.items.map((item, i) => (
                      <li key={i} className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }

              if (block.type === "quote") {
                return (
                  <blockquote key={index} className="relative rounded-2xl bg-gray-50 p-10 dark:bg-white/5">
                    <p className="relative z-10 text-xl font-medium italic leading-relaxed text-gray-800 dark:text-gray-200">
                      "{block.text}"
                    </p>
                  </blockquote>
                );
              }
              return null;
            })}

            {/* SHARE & TAGS - Fixed Visibility */}
            <div className="mt-20 flex flex-wrap items-center justify-between gap-8 border-t border-gray-100 pt-10 dark:border-white/10">
              <button
                onClick={() => navigator.share && navigator.share({ title: blog.title, url: window.location.href })}
                className="flex items-center gap-3 rounded-full bg-black px-8 py-3 text-sm font-bold text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                <Share2 size={16} />
                Share Post
              </button>

              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="rounded-lg bg-gray-100 px-4 py-2 text-[11px] font-black uppercase tracking-widest text-gray-800 dark:bg-white/5 dark:text-gray-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* AUTHOR BOX */}
          <div className="mx-auto mt-24 flex max-w-4xl flex-col items-center gap-8 rounded-[2rem] bg-gray-50 p-10 text-center dark:bg-white/[0.03] md:flex-row md:text-left">
            <img
              src="/img/Veyil_Solutions.png"
              alt="Veyil Solutions"
              className="h-24 w-24 rounded-full bg-white object-contain p-2 ring-1 ring-black/5"
            />
            <div>
              <h4 className="text-2xl font-extrabold dark:text-white">{blog.author}</h4>
              <p className="mt-2 text-lg leading-relaxed text-gray-500 dark:text-gray-400">
                {blog.authorSubtext}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}