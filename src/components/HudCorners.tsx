interface HudCornersProps {
  color?: string
  size?: number
}

export default function HudCorners({ color = "#00ffd2", size = 12 }: HudCornersProps) {
  const s = size
  const style = { color }

  return (
    <>
      {/* Top-left */}
      <svg
        className="absolute top-0 left-0"
        width={s}
        height={s}
        viewBox={`0 0 ${s} ${s}`}
        style={style}
      >
        <path
          d={`M${s} 0 L0 0 L0 ${s}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
      {/* Top-right */}
      <svg
        className="absolute top-0 right-0"
        width={s}
        height={s}
        viewBox={`0 0 ${s} ${s}`}
        style={style}
      >
        <path
          d={`M0 0 L${s} 0 L${s} ${s}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
      {/* Bottom-left */}
      <svg
        className="absolute bottom-0 left-0"
        width={s}
        height={s}
        viewBox={`0 0 ${s} ${s}`}
        style={style}
      >
        <path
          d={`M0 0 L0 ${s} L${s} ${s}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
      {/* Bottom-right */}
      <svg
        className="absolute bottom-0 right-0"
        width={s}
        height={s}
        viewBox={`0 0 ${s} ${s}`}
        style={style}
      >
        <path
          d={`M0 ${s} L${s} ${s} L${s} 0`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    </>
  )
}
