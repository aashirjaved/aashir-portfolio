"use client"

import { useEffect, useState } from "react"

const lines = [
  { text: "AASHIR.OS v8.4.2 — PHOSPHOR EDITION", delay: 60 },
  { text: "Copyright (C) 1990-2026 AASHIR JAVED SYSTEMS", delay: 80 },
  { text: "", delay: 100 },
  { text: "Initializing memory... 640K OK", delay: 200 },
  { text: "Loading kernel modules.................[ OK ]", delay: 300 },
  { text: "Mounting /experience.................[ OK ]", delay: 350 },
  { text: "Mounting /projects...................[ OK ]", delay: 400 },
  { text: "Detecting AI subsystem...............[ ONLINE ]", delay: 500 },
  { text: "Phosphor display calibrated..........[ 50Hz ]", delay: 600 },
  { text: "", delay: 700 },
  { text: "READY.", delay: 750 },
]

const SEEN_KEY = "aashir-boot-seen-v1"

export function BootSequence({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState<string[]>([])
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (sessionStorage.getItem(SEEN_KEY)) {
      setActive(false)
      onDone()
      return
    }

    const timers: ReturnType<typeof setTimeout>[] = []
    let acc = 0
    lines.forEach((l, i) => {
      acc += l.delay
      timers.push(
        setTimeout(() => {
          setVisible((v) => [...v, l.text])
        }, acc),
      )
    })
    timers.push(
      setTimeout(() => {
        sessionStorage.setItem(SEEN_KEY, "1")
        setActive(false)
        onDone()
      }, acc + 700),
    )

    return () => timers.forEach(clearTimeout)
  }, [onDone])

  if (!active) return null

  return (
    <div className="fixed inset-0 z-[200] bg-background flex items-start justify-start p-6 sm:p-12 overflow-hidden">
      <div className="font-mono text-sm sm:text-base phosphor-glow w-full max-w-3xl">
        {visible.map((line, i) => (
          <div key={i} className="leading-relaxed">
            {line === "" ? " " : line}
          </div>
        ))}
        <div className="mt-2 inline-flex items-center gap-1">
          <span>&gt;</span>
          <span className="typewriter-caret" aria-hidden />
        </div>
      </div>
    </div>
  )
}
