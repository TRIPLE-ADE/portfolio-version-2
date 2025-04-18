"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation, type Variant } from "framer-motion"

interface RevealProps {
  children: React.ReactNode
  width?: "fit-content" | "100%"
  variants?: {
    hidden: Variant
    visible: Variant
  }
}

export function Reveal({
  children,
  width = "fit-content",
  variants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  },
}: RevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <div ref={ref} style={{ width }}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  )
}

