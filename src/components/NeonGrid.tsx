export default function NeonGrid() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <pattern id="grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(160,80,255,0.06)" strokeWidth="0.5" />
        </pattern>
        <filter id="glow-cyan">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glow-magenta">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* グリッドベース */}
      <rect width="100%" height="100%" fill="url(#grid)" />

      {/* 回路ライン – シアン */}
      <g filter="url(#glow-cyan)" stroke="#00ffd2" strokeWidth="1" fill="none" opacity="0.5">
        <path d="M 120 0 L 120 160 L 320 160 L 320 240" />
        <path d="M 640 80 L 640 200 L 480 200 L 480 320" />
        <path d="M 200 320 L 360 320 L 360 400" />
        <path d="M 800 0 L 800 120 L 960 120" />
      </g>

      {/* 回路ライン – マゼンタ */}
      <g filter="url(#glow-magenta)" stroke="#ff2d78" strokeWidth="0.8" fill="none" opacity="0.4">
        <path d="M 0 200 L 160 200 L 160 360 L 280 360" />
        <path d="M 560 400 L 560 280 L 720 280" />
        <path d="M 880 200 L 1000 200 L 1000 320" />
      </g>

      {/* ノード（交差点の円）– シアン */}
      <g fill="#00ffd2" opacity="0.7" filter="url(#glow-cyan)">
        <circle cx="120" cy="160" r="3" />
        <circle cx="320" cy="160" r="2.5" />
        <circle cx="640" cy="200" r="3" />
        <circle cx="480" cy="200" r="2.5" />
        <circle cx="360" cy="320" r="3" />
        <circle cx="800" cy="120" r="2.5" />
      </g>

      {/* ノード（交差点の円）– マゼンタ */}
      <g fill="#ff2d78" opacity="0.6" filter="url(#glow-magenta)">
        <circle cx="160" cy="200" r="3" />
        <circle cx="160" cy="360" r="2.5" />
        <circle cx="560" cy="280" r="3" />
        <circle cx="1000" cy="200" r="2.5" />
      </g>

      {/* 小さなドット – パープル */}
      <g fill="#d070ff" opacity="0.3">
        <circle cx="240" cy="80" r="1.5" />
        <circle cx="400" cy="240" r="1.5" />
        <circle cx="720" cy="160" r="1.5" />
        <circle cx="880" cy="320" r="1.5" />
        <circle cx="60" cy="280" r="1.5" />
        <circle cx="1050" cy="100" r="1.5" />
      </g>
    </svg>
  )
}
