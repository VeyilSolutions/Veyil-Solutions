export default function ServiceHero({ title, subtitle, image }) {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      
      {/* subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800" />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-teal/10 hidden lg:block" />

      <div className="relative max-w-6xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-4 text-sm uppercase tracking-widest text-teal">
            Service Offering
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            {title}
          </h1>

          <p className="text-white/75 text-lg leading-relaxed max-w-xl">
            {subtitle}
          </p>
        </div>

        {/* RIGHT IMAGE */}
        {image && (
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              {/* soft glow behind image */}
              <div className="absolute -inset-6 bg-teal/20 rounded-3xl blur-2xl" />

              <img
                src={image}
                alt={title}
                className="relative w-80 xl:w-96 rounded-3xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
