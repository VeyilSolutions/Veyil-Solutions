import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { FaXTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { blogData } from "@/data/blogData";

export default function BlogDetails() {

const { slug } = useParams();
const blog = blogData.find((item) => item.slug === slug);

const relatedBlogs = blogData
.filter((item) => item.slug !== slug)
.slice(0,3);

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
<h1 className="text-3xl font-bold">Article Not Found</h1>
</div>
);
}

/* ================= TABLE OF CONTENTS ================= */

const headings = blog.content
.filter((block) => block.type === "heading")
.map((block) => ({
id: block.text.toLowerCase().replace(/\s+/g, "-"),
text: block.text
}));

return (

<>
{/* Reading Progress Bar */}
<div
className="fixed left-0 top-0 z-50 h-[4px] bg-black dark:bg-white"
style={{ width: `${scrollProgress}%` }}
/>

<section className="relative min-h-screen bg-white pb-24 pt-12 dark:bg-black md:pt-24">

{/* SEO META */}
<Helmet>

<title>{blog.title} | Veyil Solutions</title>

<meta name="description" content={blog.description} />

<link
rel="canonical"
href={`https://www.veyilsolutions.in/blogs/${blog.slug}`}
/>

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

{/* Blog Schema */}
<script type="application/ld+json">
{JSON.stringify({
"@context": "https://schema.org",
"@type": "BlogPosting",
"headline": blog.title,
"description": blog.description,
"image": blog.image,
"url": `https://www.veyilsolutions.in/blogs/${blog.slug}`,
"datePublished": blog.publishDate,
"author": {
"@type": "Organization",
"name": "Veyil Solutions"
},
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

{/* Sticky Share Buttons */}
<div className="fixed right-6 top-1/2 hidden -translate-y-1/2 flex-col gap-3 lg:flex">

<button
onClick={() =>
window.open(
`https://twitter.com/intent/tweet?text=${blog.title}&url=${window.location.href}`
)
}
className="rounded-full bg-black p-3 text-white transition hover:scale-110"
>
<FaXTwitter />
</button>

<button
onClick={() =>
window.open(
`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`
)
}
className="rounded-full bg-blue-600 p-3 text-white transition hover:scale-110"
>
<FaFacebookF />
</button>

<button
onClick={() =>
window.open(
`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`
)
}
className="rounded-full bg-blue-700 p-3 text-white transition hover:scale-110"
>
<FaLinkedinIn />
</button>

</div>

{/* Background */}
<div className="absolute top-0 left-1/2 -z-10 h-[500px] w-full -translate-x-1/2 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gray-100 via-transparent to-transparent dark:from-gray-900"></div>

<div className="mx-auto max-w-5xl px-4">

{/* NAV */}
<div className="mb-12 flex items-center justify-between">

<Link
to="/blogs"
className="group flex items-center text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black dark:hover:text-white"
>
<ArrowLeft className="mr-2 h-3 w-3 transition-transform group-hover:-translate-x-1" />
Back to Blog
</Link>

</div>

{/* HEADER */}
<header className="mb-16 text-center">

<div className="mb-4 inline-block rounded-full border px-4 py-1 text-xs uppercase tracking-widest dark:border-gray-700">
{blog.category}
</div>

<h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-6xl">
{blog.title}
</h1>

<div className="mt-6 flex justify-center gap-6 text-sm text-gray-500">

<span className="flex items-center gap-2">
<Calendar size={16}/>
{blog.publishDate}
</span>

<span className="flex items-center gap-2">
<Clock size={16}/>
{blog.readingTime}
</span>

</div>

</header>

{/* HERO */}
<div className="mb-20 overflow-hidden rounded-3xl shadow-xl">

<img
src={blog.image}
alt={`${blog.title} - Blog by Veyil Solutions`}
className="aspect-[16/9] w-full object-cover"
/>

</div>

{/* TABLE OF CONTENTS */}
{headings.length > 0 && (
<nav className="mx-auto mb-16 max-w-3xl rounded-xl border p-6 dark:border-gray-800">

<h3 className="mb-4 text-lg font-semibold dark:text-white">
Table of Contents
</h3>

<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">

{headings.map((heading,index)=>(
<li key={index}>
<a
href={`#${heading.id}`}
className="hover:text-black dark:hover:text-white transition"
>
{heading.text}
</a>
</li>
))}

</ul>

</nav>
)}

{/* CONTENT */}
<article
itemScope
itemType="https://schema.org/Article"
className="mx-auto max-w-3xl space-y-8"
>

{blog.content.map((block,index)=>{

if(block.type==="paragraph"){
return(
<p key={index} className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
{block.text}
</p>
);
}

if(block.type==="heading"){
const id = block.text.toLowerCase().replace(/\s+/g,"-");

return(
<h2
id={id}
key={index}
className="mt-14 scroll-mt-24 text-2xl font-bold text-gray-900 dark:text-white"
>
{block.text}
</h2>
);
}

if(block.type==="list"){
return(
<ul key={index} className="list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
{block.items.map((item,i)=>(
<li key={i}>{item}</li>
))}
</ul>
);
}

if(block.type==="quote"){
return(
<blockquote key={index} className="rounded-xl border-l-4 border-black bg-gray-50 p-6 italic text-gray-600 dark:border-white dark:bg-gray-900 dark:text-gray-400">
{block.text}
</blockquote>
);
}

return null;

})}

{/* SHARE */}
<div className="mt-16 flex items-center justify-between border-t pt-8 dark:border-gray-800">

<button
onClick={()=>{

if(navigator.share){
navigator.share({
title:blog.title,
url:window.location.href
})
}

}}
className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800"
>
<Share2 size={16}/>
Share
</button>

<div className="flex gap-2">
{blog.tags.map((tag,index)=>(
<span key={index} className="rounded-md bg-gray-100 px-3 py-1 text-xs font-bold dark:bg-gray-800">
#{tag}
</span>
))}
</div>

</div>

</article>

{/* AUTHOR */}
<div className="mx-auto mt-20 max-w-3xl flex items-center gap-6 rounded-xl border p-6 dark:border-gray-800">

<img
src="/img/Veyil_Solutions.png"
className="h-16 w-16 rounded-full"
/>

<div>

<h4 className="font-semibold dark:text-white">
{blog.author}
</h4>

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
