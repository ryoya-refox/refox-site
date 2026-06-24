"use client"

import { useEffect, useRef, useState } from "react"

interface StatCounterProps {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
  label: string
  color?: string
}

export default function StatCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2000,
  label,
  color = "#00ffd2",
}: StatCounterProps) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const start = performance.now()
    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // easeOut
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [started, target, duration])

  return (
    <div ref={ref} className="text-center">
      <div
        className="font-mono text-4xl font-bold mb-1 animate-glow-pulse"
        style={{ color }}
      >
        {prefix}{count}{suffix}
      </div>
      <div
        className="font-noto text-xs tracking-widest uppercase"
        style={{ color: "rgba(240,234,255,0.5)" }}
      >
        {label}
      </div>
    </div>
  )
}
