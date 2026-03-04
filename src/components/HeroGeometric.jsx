import { motion } from "framer-motion";

export default function HeroGeometric() {
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
    /* STRICT FIXES:
       - overflow-x-hidden: Prevents the horizontal swipe.
       - max-w-full: Ensures the section never grows wider than the phone screen.
       - pt-28: Fixed space for your Navbar.
    */
    <header className="relative min-h-screen w-full max-w-full flex items-center justify-center bg-white overflow-x-hidden px-4 pt-28 sm:pt-0">
      
      {/* ===== BACKGROUND DECORATION ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5 }}
        /* FIX: Using left-0 and w-full ensures the blur stays inside the container 
           without pushing the right edge.
        */
        className="absolute -top-[5%] left-0 w-full h-[50vh] blur-[60px] sm:blur-[100px] rounded-full bg-gradient-to-br from-indigo-500/20 via-teal-400/10 to-blue-500/20 pointer-events-none z-0"
      />

      {/* ===== BOTTOM WAVE SHAPE ===== */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        /* FIX: w-[100%] + absolute left-0 prevents the SVG from overshooting */
        className="absolute bottom-0 left-0 w-full leading-[0] pointer-events-none z-0"
      >
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-[80px] sm:h-auto opacity-30"
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

      {/* ===== CONTENT ===== */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          show: { transition: { staggerChildren: 0.1 } },
        }}
        /* FIX: w-full and max-w-full here is critical */
        className="relative z-10 w-full max-w-full text-center mx-auto"
      >
        <motion.div
          variants={fadeUp}
          className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.6em] text-black/50 mb-6 font-bold"
        >
          Veyil Solutions — Shopify Experts
        </motion.div>

        <motion.h1
          variants={fadeUp}
          /* FIX: Leading tight prevents extra vertical space that can sometimes bug out mobile layout */
          className="text-4xl sm:text-7xl md:text-8xl font-extrabold text-black leading-tight sm:leading-[1] tracking-tight mb-6"
        >
          We Build the Vision.
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-500">
            You Own the Results.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-sm sm:text-lg md:text-xl text-black/60 max-w-2xl mx-auto leading-relaxed mb-10 px-4"
        >
          We engineer high-converting Shopify experiences for ambitious brands. 
          See your finished store before you commit to the project.
        </motion.p>

        {/* FIX: Completely removed the horizontal lines on mobile 
           as they are the #1 cause of horizontal scroll bugs. 
        */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center w-full"
        >
          <div className="flex items-center gap-4">
            <div className="hidden sm:block w-12 h-[1px] bg-black/20" />
            <span className="text-[10px] sm:text-[12px] uppercase tracking-[0.15em] sm:tracking-[0.3em] text-black/40 font-bold whitespace-nowrap">
              Build • Launch • Scale
            </span>
            <div className="hidden sm:block w-12 h-[1px] bg-black/20" />
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
}