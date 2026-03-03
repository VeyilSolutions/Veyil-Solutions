import { motion } from "framer-motion";

export default function HeroGeometric() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 }, // Reduced y for a smoother entrance
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for "premium" feel
      },
    },
  };

  return (
    <header className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden px-6">
      
      {/* ===== BACKGROUND DECORATION (Top Left) ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -top-[10%] -left-[10%] w-[50vw] max-w-[600px] aspect-square blur-[80px] rounded-full bg-gradient-to-br from-indigo-500/30 via-teal-400/20 to-blue-500/30 pointer-events-none"
      />

      {/* ===== BOTTOM WAVE SHAPE ===== */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute bottom-0 left-0 w-full leading-[0] pointer-events-none"
      >
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-auto opacity-40"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="50%" stopColor="#14B8A6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGrad)"
            d="M0,192L60,186.7C120,181,240,171,360,181.3C480,192,600,224,720,224C840,224,960,192,1080,176C1200,160,1320,160,1380,160L1440,160L1440,320L0,320Z"
          />
        </svg>
      </motion.div>

      {/* ===== CONTENT ===== */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          show: {
            transition: { staggerChildren: 0.1 },
          },
        }}
        className="relative z-10 max-w-5xl text-center"
      >
        <motion.div
          variants={fadeUp}
          className="text-[10px] sm:text-xs uppercase tracking-[0.6em] text-black/50 mb-8 font-bold"
        >
          Veyil Solutions — Shopify Experts
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-black leading-[1] tracking-tight mb-8"
        >
          We Build the Vision.
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-500">
            You Own the Results.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-base md:text-xl text-black/60 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          We engineer high-converting Shopify experiences for ambitious brands. 
          See your finished store before you commit to the project.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
        
          
          <div className="hidden sm:flex items-center gap-4">
            <div className="w-12 h-[1px] bg-black/20" />
            <span className="text-[12px] uppercase tracking-[0.3em] text-black/40 font-bold whitespace-nowrap">
              Build • Launch • Scale
            </span>
            <div className="w-12 h-[1px] bg-black/20" />
          </div>
        </motion.div>
      </motion.div>

    </header>
  );
}