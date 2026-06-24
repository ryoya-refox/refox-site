"use client"

interface ScanLineProps {
  color?: string
  opacity?: number
  duration?: number
}

export default function ScanLine({
  color = "rgba(0,255,210,0.06)",
  opacity = 1,
  duration = 4,
}: ScanLineProps) {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ opacity }}
      aria-hidden
    >
      <div
        className="absolute left-0 right-0 h-16"
        style={{
          background: `linear-gradient(180deg, transparent, ${color}, transparent)`,
          animation: `scanline ${duration}s linear infinite`,
        }}
      />
    </div>
  )
}
