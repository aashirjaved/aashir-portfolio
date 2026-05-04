"use client"

import { useEffect, useState } from "react"

interface TypewriterProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  caret?: boolean
  onDone?: () => void
}

export function Typewriter({
  text,
  speed = 35,
  delay = 0,
  className = "",
  caret = true,
  onDone,
}: TypewriterProps) {
  const [out, setOut] = useState("")
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    let timer: ReturnType<typeof setTimeout>
    const start = setTimeout(() => {
      const tick = () => {
        i++
        setOut(text.slice(0, i))
        if (i < text.length) {
          timer = setTimeout(tick, speed)
        } else {
          setDone(true)
          onDone?.()
        }
      }
      tick()
    }, delay)
    return () => {
      clearTimeout(start)
      clearTimeout(timer!)
    }
  }, [text, speed, delay, onDone])

  return (
    <span className={className}>
      {out}
      {caret && !done && <span className="typewriter-caret" aria-hidden />}
    </span>
  )
}
