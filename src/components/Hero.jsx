import { motion } from "framer-motion";

export default function Hero() {

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <header className="relative h-auto sm:h-screen w-full flex items-center justify-center bg-white overflow-hidden px-6 pt-32 pb-24 sm:py-0">

      {/* Background Gradient */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute -top-[10%] left-0 w-full h-[40vh] sm:h-[50vh] blur-[60px] sm:blur-[100px] rounded-full bg-gradient-to-br from-indigo-500/20 via-teal-400/10 to-blue-500/20 pointer-events-none z-0"
      />

      {/* Bottom Wave */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute bottom-0 left-0 w-full leading-[0] pointer-events-none z-0"
      >
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-[120px] sm:h-auto opacity-30"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#heroWaveGrad)"
            d="M0,192L60,186.7C120,181,240,171,360,181.3C480,192,600,224,720,224C840,224,960,192,1080,176C1200,160,1320,160,1380,160L1440,160L1440,320L0,320Z"
          />
          <defs>
            <linearGradient id="heroWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="50%" stopColor="#14B8A6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Hero Content */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          show: { transition: { staggerChildren: 0.12 } },
        }}
        className="relative z-10 w-full max-w-6xl text-center mx-auto"
      >

        {/* Small Label */}
        <motion.div
          variants={fadeUp}
          className="text-[10px] sm:text-xs uppercase tracking-[0.35em] sm:tracking-[0.6em] text-black/50 mb-4 sm:mb-6 font-bold"
        >
          Veyil Solutions — Shopify Experts
        </motion.div>

        {/* SEO Optimized Heading */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-black leading-[1.1] sm:leading-[1] tracking-tight mb-4 sm:mb-6"
        >
          Shopify Website Development
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-500">
            for Ecommerce Brands
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="text-base sm:text-lg md:text-xl text-black/60 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          We design high-converting Shopify and ecommerce websites for product
          brands. Our goal is to help businesses launch, grow, and scale their
          online stores with powerful Shopify development.
        </motion.p>

        {/* Bottom Tagline */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center w-full"
        >
          <div className="flex items-center gap-4">
            <div className="hidden sm:block w-12 h-[1px] bg-black/20" />
            <span className="text-[10px] sm:text-[12px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-black/40 font-bold whitespace-nowrap">
              Shopify Development • Ecommerce Websites • Branding
            </span>
            <div className="hidden sm:block w-12 h-[1px] bg-black/20" />
          </div>
        </motion.div>

      </motion.div>
    </header>
  );
}

