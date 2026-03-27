import { motion } from "framer-motion";

export default function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <header className="relative w-full overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">

      {/* Glow */}
      <div className="absolute top-[-10%] left-0 w-full h-[35vh] sm:h-[45vh] blur-[90px] sm:blur-[120px] bg-gradient-to-br from-indigo-500/20 via-teal-400/10 to-blue-500/20 pointer-events-none" />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-20 pb-16 sm:pt-28 sm:pb-24 text-center">

        {/* Label */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-black/50 mb-4 font-bold"
        >
          Veyil Solutions — Ecommerce & Business Websites
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-black leading-tight mb-4"
        >
          Websites That
          <span className="block bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent">
            Convert Visitors Into Customers
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-sm sm:text-base text-black/60 max-w-md sm:max-w-xl mx-auto mb-8"
        >
          We build Shopify stores, business websites, and powerful web solutions
          designed to increase sales, build trust, and grow your brand online.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8"
        >
          <a
            href="/contact"
            className="w-full sm:w-auto px-6 py-3 bg-black text-white rounded-full font-semibold active:scale-95 transition"
          >
            Get Free Demo
          </a>

          <a
            href="/portfolio"
            className="w-full sm:w-auto px-6 py-3 border border-black/20 rounded-full font-semibold active:scale-95 transition"
          >
            View Portfolio
          </a>
        </motion.div>

        {/* Trust */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-black/40 font-bold"
        >
          Shopify • Business Websites • WhatsApp Integration
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <svg viewBox="0 0 1440 320" className="w-full opacity-20">
          <path
            fill="url(#heroWaveGrad)"
            d="M0,192L60,186.7C120,181,240,171,360,181.3C480,192,600,224,720,224C840,224,960,192,1080,176C1200,160,1320,160,1380,160L1440,160L1440,320L0,320Z"
          />
          <defs>
            <linearGradient id="heroWaveGrad">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="50%" stopColor="#14B8A6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </header>
  );
}