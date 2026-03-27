import React, { useState } from "react"
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion"
import { Globe } from "lucide-react"

import prasanaImg from "@/assets/C1.jpeg"
import leaderLogo from "@/assets/L1.png"

const testimonials = [
  {
    id: 1,
    name: "Prasana",
    company: "Leader Clothings",
    image: prasanaImg,
    logo: leaderLogo,
    link: "https://leaderclothings.in",
    description:
      "Excellent web development experience. The website design is clean, modern, and fully responsive across devices.",
  },
]

export default function CleanPhysicsTestimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState({ x: 0, y: 0 })

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotate = useTransform(x, [-300, 300], [-4, 4])
  const scale = useTransform(x, [-300, 0, 300], [0.98, 1, 0.98])

  const handleDragEnd = (_, info) => {
    const offsetX = info.offset.x
    const offsetY = info.offset.y
    const threshold = 100

    if (Math.abs(offsetX) > Math.abs(offsetY)) {
      if (offsetX < -threshold) {
        setDirection({ x: 80, y: 0 })
        setIndex((p) => (p + 1) % testimonials.length)
      } else if (offsetX > threshold) {
        setDirection({ x: -80, y: 0 })
        setIndex((p) => (p - 1 + testimonials.length) % testimonials.length)
      } else resetPosition()
    } else {
      if (offsetY < -threshold) {
        setDirection({ x: 0, y: 80 })
        setIndex((p) => (p + 1) % testimonials.length)
      } else if (offsetY > threshold) {
        setDirection({ x: 0, y: -80 })
        setIndex((p) => (p - 1 + testimonials.length) % testimonials.length)
      } else resetPosition()
    }

    x.set(0)
    y.set(0)
  }

  const resetPosition = () => {
    animate(x, 0, { type: "spring", stiffness: 400, damping: 30 })
    animate(y, 0, { type: "spring", stiffness: 400, damping: 30 })
  }

  const current = testimonials[index]

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">

        {/* Heading */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl font-bold text-black">
            What Our Clients Say
          </h2>

          <div className="w-16 h-[2px] bg-black mx-auto my-4 opacity-70" />

          <p className="text-black/60 text-sm sm:text-base">
            Swipe in any direction to explore testimonials.
          </p>
        </div>

        {/* Card Area */}
        <div className="relative flex justify-center items-center min-h-[320px] sm:min-h-[360px]">

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: direction.x, y: direction.y }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: -direction.x, y: -direction.y }}
              transition={{ duration: 0.3 }}
              drag
              dragElastic={0.2}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              onDragEnd={handleDragEnd}
              style={{ x, y, rotate, scale }}
              className="
                absolute
                w-full max-w-sm sm:max-w-md
                bg-white border border-black/10 rounded-2xl
                px-6 py-8 sm:px-8 sm:py-10
                flex flex-col items-center
                cursor-grab active:cursor-grabbing
                shadow-lg
              "
            >
              {/* Logo */}
              <div className="mb-5 bg-gray-100 px-3 py-1.5 rounded-full flex items-center gap-2">
                <img src={current.logo} className="w-4 h-4" />
                <span className="text-[10px] font-semibold text-gray-600 uppercase">
                  {current.company}
                </span>
              </div>

              {/* Profile */}
              <img
                src={current.image}
                alt={current.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-4"
              />

              {/* Name */}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                {current.name}
              </h3>

              {/* Description */}
              <p className="mt-4 text-gray-600 text-xs sm:text-sm text-center italic max-w-xs">
                "{current.description}"
              </p>

              {/* Link */}
              <a
                href={current.link}
                target="_blank"
                rel="noopener noreferrer"
                onPointerDown={(e) => e.stopPropagation()}
                className="mt-5 flex items-center gap-2 text-[11px] font-semibold text-gray-700 hover:opacity-60"
              >
                <Globe size={14} />
                VISIT WEBSITE
              </a>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  )
}