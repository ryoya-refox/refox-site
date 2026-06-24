export default function CityScape() {
  // ビル定義: [x, y, w, h, colorIndex]
  const buildings = [
    // 左側
    [0, 260, 60, 140, 0],
    [55, 280, 45, 120, 1],
    [95, 240, 55, 160, 0],
    [145, 270, 40, 130, 2],
    [180, 250, 70, 150, 1],
    [245, 290, 35, 110, 0],
    [275, 260, 50, 140, 2],
    // 中央左
    [320, 200, 65, 200, 1],
    [380, 230, 45, 170, 0],
    [420, 210, 75, 190, 2],
    [490, 250, 50, 150, 1],
    [535, 220, 60, 180, 0],
    // 中央右
    [590, 180, 80, 220, 2],
    [665, 220, 55, 180, 1],
    [715, 200, 70, 200, 0],
    [780, 240, 45, 160, 2],
    [820, 210, 65, 190, 1],
    // 右側
    [880, 250, 50, 150, 0],
    [925, 270, 40, 130, 2],
    [960, 240, 60, 160, 1],
    [1015, 260, 45, 140, 0],
    [1055, 280, 55, 120, 2],
    [1105, 250, 70, 150, 1],
    [1170, 270, 60, 130, 0],
    [1225, 260, 55, 140, 2],
  ]

  const buildingColors = ["#160828", "#1a0a30", "#1c0e34"]

  // 窓の光
  const windows: Array<[number, number]> = []
  buildings.forEach(([bx, by, bw, bh]) => {
    const cols = Math.floor((bw as number) / 12)
    const rows = Math.floor((bh as number) / 16)
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        if (Math.random() > 0.55) {
          windows.push([
            (bx as number) + 4 + c * 12 + Math.random() * 2,
            (by as number) + 6 + r * 16 + Math.random() * 2,
          ])
        }
      }
    }
  })

  // ネオン光源（ビル面・文字なし）
  const neonLights = [
    { x: 100, y: 255, w: 32, h: 4, color: "#ff2d78", rx: 2 },
    { x: 100, y: 255, w: 32, h: 4, color: "#ff2d78", rx: 2 },
    { x: 200, y: 255, w: 28, h: 3, color: "#00ffd2", rx: 1.5 },
    { x: 340, y: 215, w: 36, h: 4, color: "#a050ff", rx: 2 },
    { x: 450, y: 225, w: 24, h: 3, color: "#ffd200", rx: 1.5 },
    { x: 550, y: 230, w: 30, h: 4, color: "#ff2d78", rx: 2 },
    { x: 620, y: 190, w: 40, h: 4, color: "#00ffd2", rx: 2 },
    { x: 700, y: 210, w: 28, h: 3, color: "#a0ff00", rx: 1.5 },
    { x: 800, y: 245, w: 32, h: 4, color: "#ffd200", rx: 2 },
    { x: 880, y: 260, w: 24, h: 3, color: "#ff2d78", rx: 1.5 },
    { x: 970, y: 250, w: 36, h: 4, color: "#a050ff", rx: 2 },
    { x: 1080, y: 260, w: 28, h: 3, color: "#00ffd2", rx: 1.5 },
    { x: 1160, y: 265, w: 30, h: 4, color: "#ff2d78", rx: 2 },
  ]

  return (
    <svg
      className="absolute bottom-0 left-0 w-full pointer-events-none"
      viewBox="0 0 1280 400"
      preserveAspectRatio="xMidYMax slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <filter id="neon-glow-city">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="neon-glow-strong">
          <feGaussianBlur stdDeviation="5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* 地面の濡れた反射グラデ */}
        <linearGradient id="ground-reflect" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ff2d78" stopOpacity="0.5" />
          <stop offset="30%" stopColor="#a050ff" stopOpacity="0.5" />
          <stop offset="60%" stopColor="#00ffd2" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ffd200" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="ground-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ff2d78" stopOpacity="0.9" />
          <stop offset="30%" stopColor="#a050ff" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#00ffd2" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffd200" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* ビル本体 */}
      {buildings.map(([x, y, w, h, ci], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width={w}
          height={h}
          fill={buildingColors[ci as number]}
        />
      ))}

      {/* 窓の光 */}
      {windows.map(([wx, wy], i) => (
        <rect
          key={`w-${i}`}
          x={wx}
          y={wy}
          width={5}
          height={4}
          fill="#ffd89b"
          opacity={0.15 + Math.random() * 0.25}
          rx={0.5}
        />
      ))}

      {/* ネオン光源（色のみ、文字なし） */}
      {neonLights.map((n, i) => (
        <g key={`n-${i}`} filter="url(#neon-glow-city)">
          <rect
            x={n.x}
            y={n.y}
            width={n.w}
            height={n.h}
            fill={n.color}
            rx={n.rx}
            opacity={0.85}
            className="animate-neon-pulse"
          />
          {/* 縦方向の反射光 */}
          <rect
            x={n.x + n.w / 2 - 1}
            y={n.y + n.h}
            width={2}
            height={40}
            fill={n.color}
            opacity={0.07}
          />
        </g>
      ))}

      {/* 地面ライン */}
      <rect x="0" y="398" width="1280" height="2" fill="url(#ground-line)" />

      {/* 濡れた地面の反射 */}
      <ellipse cx="640" cy="400" rx="640" ry="12" fill="url(#ground-reflect)" opacity="0.15" />
      <ellipse cx="320" cy="400" rx="200" ry="8" fill="#ff2d78" opacity="0.06" />
      <ellipse cx="700" cy="400" rx="180" ry="7" fill="#00ffd2" opacity="0.06" />
      <ellipse cx="1050" cy="400" rx="200" ry="8" fill="#a050ff" opacity="0.06" />
    </svg>
  )
}
