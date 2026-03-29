import { motion } from "framer-motion";

export default function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const marquee = {
    animate: {
      x: [0, -1000],
      transition: {
        x: { repeat: Infinity, duration: 25, ease: "linear" }
      }
    }
  };

  const tickerItems = [
    "Fast-loading websites",
    "Mobile-first design",
    "Conversion-focused UI",
    "Clear brand identity",
    "Simple scalable systems",
    "Built for real businesses"
  ];

  return (
    <header className="relative min-h-screen bg-[#050505] text-white overflow-hidden flex items-center">

      {/* 🔥 Soft Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-teal-500/5 to-transparent blur-3xl" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-8">

          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-xs tracking-[0.4em] text-teal-400 uppercase"
          >
            Veyil Solutions
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-[11vw] lg:text-7xl font-black leading-[0.9] tracking-tight"
          >
            Ecommerce Websites <br />
            <span
              className="text-transparent italic"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}
            >
              That Actually Convert
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-white/60 max-w-md text-sm leading-relaxed"
          >
            I help businesses build fast, conversion-focused ecommerce websites
            designed to grow and scale.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex items-center gap-6"
          >
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest hover:invert transition"
            >
              Start Project
            </a>

            <span className="text-xs text-white/40">
              Currently accepting projects
            </span>
          </motion.div>
        </div>

        {/* RIGHT SIDE (HONEST TRUST BLOCK) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative"
        >
          <div className="border border-white/10 p-10 backdrop-blur-md bg-white/[0.02] space-y-6">

            <p className="text-xs text-white/40 uppercase tracking-widest">
              Currently
            </p>

            <h2 className="text-2xl font-bold leading-snug">
              Taking on first <br /> high-impact projects
            </h2>

            <p className="text-sm text-white/60 leading-relaxed">
              Focused on building strong case studies with performance-driven
              ecommerce websites.
            </p>

            <div className="pt-4 border-t border-white/10">
              <span className="text-xs text-white/40">Status</span>
              <p className="text-sm font-semibold mt-1 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Available for new projects
              </p>
            </div>

          </div>
        </motion.div>
      </div>

      {/* ✅ SINGLE CLEAN TICKER */}
      <div className="absolute bottom-0 w-full border-t border-white/10 bg-white text-black py-2 overflow-hidden">
        <motion.div
          variants={marquee}
          animate="animate"
          className="flex whitespace-nowrap gap-12"
        >
          {[...tickerItems, ...tickerItems].map((text, i) => (
            <span
              key={i}
              className="text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-6"
            >
              {text}
              <span className="w-1 h-1 bg-black rounded-full" />
            </span>
          ))}
        </motion.div>
      </div>
    </header>
  );
}