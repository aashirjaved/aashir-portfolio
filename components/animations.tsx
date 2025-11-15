"use client"

import { motion, useInView, useScroll, useTransform, Variants } from "framer-motion"
import { useRef, ReactNode, useEffect, useState } from "react"

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
}

export function FadeIn({ children, delay = 0, direction = "up", className = "" }: FadeInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView) {
      setHasAnimated(true)
    }
  }, [isInView])

  const directionVariants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: 50, opacity: 0 },
    right: { x: -50, opacity: 0 },
  }

  // Show content immediately if it's already in view or has animated
  const shouldShow = isInView || hasAnimated

  return (
    <motion.div
      ref={ref}
      initial={directionVariants[direction]}
      animate={shouldShow ? { y: 0, x: 0, opacity: 1 } : directionVariants[direction]}
      transition={{ duration: 0.6, delay, ease: [0.21, 1.11, 0.81, 0.99] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggerContainer({ children, className = "", staggerDelay = 0.1 }: StaggerContainerProps) {
  const ref = useRef(null)
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    // Check if container is in viewport on mount
    const checkVisibility = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const isInViewport = rect.top < window.innerHeight + 200 && rect.bottom > -200
        if (isInViewport) {
          setHasTriggered(true)
        }
      }
    }

    checkVisibility()

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasTriggered(true)
        }
      },
      { threshold: 0, rootMargin: "200px" }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={hasTriggered ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.21, 1.11, 0.81, 0.99],
      },
    },
  }

  return (
    <motion.div 
      variants={itemVariants} 
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface ScaleOnHoverProps {
  children: ReactNode
  className?: string
  scale?: number
}

export function ScaleOnHover({ children, className = "", scale = 1.05 }: ScaleOnHoverProps) {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number
}

export function ParallaxSection({ children, className = "", speed = 0.5 }: ParallaxSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100])

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}

interface CardHoverProps {
  children: ReactNode
  className?: string
}

export function CardHover({ children, className = "" }: CardHoverProps) {
  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface RotateOnHoverProps {
  children: ReactNode
  className?: string
  rotation?: number
}

export function RotateOnHover({ children, className = "", rotation = 5 }: RotateOnHoverProps) {
  return (
    <motion.div
      whileHover={{ rotate: rotation, transition: { duration: 0.3 } }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

