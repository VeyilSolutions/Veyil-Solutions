import React, { useState } from "react"
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion"
import { Globe } from "lucide-react"

import prasanaImg from "../assets/C1.jpeg"
import leaderLogo from "../assets/L1.png"

const testimonials = [
  {
    id: 1,
    name: "Prasana",
    company: "Leader Clothings",
    image: prasanaImg,
    logo: leaderLogo,
    link: "https://leaderclothings.in",
    description:
      "Excellent web development—clean, responsive, and professional.",
  },
  {
    id: 2,
    name: "Logu",
    company: "Veyil Solutions",
    image: prasanaImg,
    logo: leaderLogo,
    link: "https://leaderclothings.in",
    description:
      "Swipe in any direction — left, right, up, or down — to change testimonials.",
  },
]

export default function CleanPhysicsTestimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState({ x: 0, y: 0 })

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotate = useTransform(x, [-300, 300], [-5, 5])
  const scale = useTransform(x, [-300, 0, 300], [0.97, 1, 0.97])

  const handleDragEnd = (_, info) => {
    const offsetX = info.offset.x
    const offsetY = info.offset.y
    const threshold = 120

    // Determine dominant swipe direction
    if (Math.abs(offsetX) > Math.abs(offsetY)) {
      // Horizontal swipe
      if (offsetX < -threshold) {
        // LEFT → next
        setDirection({ x: 100, y: 0 })
        setIndex((prev) => (prev + 1) % testimonials.length)
      } else if (offsetX > threshold) {
        // RIGHT → previous
        setDirection({ x: -100, y: 0 })
        setIndex((prev) =>
          (prev - 1 + testimonials.length) % testimonials.length
        )
      } else {
        resetPosition()
      }
    } else {
      // Vertical swipe
      if (offsetY < -threshold) {
        // UP → next
        setDirection({ x: 0, y: 100 })
        setIndex((prev) => (prev + 1) % testimonials.length)
      } else if (offsetY > threshold) {
        // DOWN → previous
        setDirection({ x: 0, y: -100 })
        setIndex((prev) =>
          (prev - 1 + testimonials.length) % testimonials.length
        )
      } else {
        resetPosition()
      }
    }

    x.set(0)
    y.set(0)
  }

  const resetPosition = () => {
    animate(x, 0, { type: "spring", stiffness: 500, damping: 30 })
    animate(y, 0, { type: "spring", stiffness: 500, damping: 30 })
  }

  const current = testimonials[index]

  return (
    <section className="bg-white py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center px-6">

        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            What Our Clients Say
          </h2>

          <div className="w-20 h-[2px] bg-black mx-auto my-6 rounded-full opacity-80" />

          <p className="max-w-2xl mx-auto text-black/60 text-base leading-relaxed">
            Swipe in any direction to explore testimonials.
          </p>
        </div>

        {/* Card Area */}
        <div className="relative flex justify-center items-center h-[420px]">
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
                w-[420px] min-h-[360px]
                bg-white border border-black/10 rounded-3xl
                px-10 py-12 flex flex-col items-center justify-center
                cursor-grab active:cursor-grabbing
                shadow-[0_25px_60px_rgba(0,0,0,0.08)]
              "
            >
              {/* Company Logo */}
              <div className="mb-6 bg-gray-100 px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                <img
                  src={current.logo}
                  alt={current.company}
                  className="w-5 h-5 object-contain"
                />
                <span className="text-xs font-semibold text-gray-600 uppercase">
                  {current.company}
                </span>
              </div>

              {/* Profile Image */}
              <img
                src={current.image}
                alt={current.name}
                className="w-[100px] h-[100px] rounded-full object-cover mb-5 shadow-md"
              />

              {/* Name */}
              <h3 className="text-2xl font-semibold text-gray-800">
                {current.name}
              </h3>

              {/* Description */}
              <p className="mt-5 text-gray-600 text-sm leading-relaxed text-center italic max-w-[320px]">
                "{current.description}"
              </p>

              {/* Link */}
              <a
                href={current.link}
                target="_blank"
                rel="noopener noreferrer"
                onPointerDown={(e) => e.stopPropagation()}
                className="mt-6 flex items-center gap-2 text-xs font-semibold text-gray-700 hover:opacity-60 transition-opacity"
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