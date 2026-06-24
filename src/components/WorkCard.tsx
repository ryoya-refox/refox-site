"use client"

import Link from "next/link"
import Image from "next/image"
import HudCorners from "./HudCorners"
import ScanLine from "./ScanLine"

interface WorkCardProps {
  title: string
  date: string
  slug: string
  location: string
  country: string
  neonColor: string
  imageUrl?: string
  index?: number
}

const countryFlags: Record<string, string> = {
  USA: "🇺🇸",
  JPN: "🇯🇵",
  PHL: "🇵🇭",
  HKG: "🇭🇰",
  CIV: "🇨🇮",
}

export default function WorkCard({
  title,
  date,
  slug,
  location,
  country,
  neonColor,
  imageUrl,
  index = 0,
}: WorkCardProps) {
  const flag = countryFlags[country] ?? "🌐"
  const year = date.split("-")[0]
  const monthDay = date.substring(5, 7)

  return (
    <Link
      href={`/works/${slug}`}
      className="relative block overflow-hidden group"
      style={{
        background: "rgba(26,13,46,0.9)",
        border: `1px solid rgba(160,80,255,0.2)`,
        animationDelay: `${index * 80}ms`,
      }}
    >
      {/* HUDコーナー */}
      <HudCorners color={neonColor} size={10} />

      {/* ネオン光源 pulse */}
      <div
        className="absolute inset-0 pointer-events-none animate-neon-pulse"
        style={{
          boxShadow: `inset 0 0 20px ${neonColor}18`,
        }}
      />

      {/* スキャンライン */}
      <ScanLine color={`${neonColor}12`} duration={3 + (index % 3)} />

      {/* ホバーオーバーレイ */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${neonColor}08, transparent)`,
          borderColor: neonColor,
        }}
      />

      {/* 画像エリア */}
      <div className="relative h-32 overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            style={{ filter: "brightness(0.7)" }}
          />
        ) : (
          /* ネオンSVGアイコン代替 */
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: "rgba(10,4,20,0.8)" }}
          >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect
                x="8"
                y="8"
                width="32"
                height="32"
                rx="2"
                stroke={neonColor}
                strokeWidth="1"
                strokeDasharray="4 2"
                opacity="0.6"
              />
              <circle cx="24" cy="24" r="8" stroke={neonColor} strokeWidth="1" opacity="0.8" />
              <line x1="24" y1="8" x2="24" y2="16" stroke={neonColor} strokeWidth="1" opacity="0.5" />
              <line x1="24" y1="32" x2="24" y2="40" stroke={neonColor} strokeWidth="1" opacity="0.5" />
              <line x1="8" y1="24" x2="16" y2="24" stroke={neonColor} strokeWidth="1" opacity="0.5" />
              <line x1="32" y1="24" x2="40" y2="24" stroke={neonColor} strokeWidth="1" opacity="0.5" />
              <circle cx="24" cy="24" r="2" fill={neonColor} opacity="0.9" />
            </svg>
          </div>
        )}

        {/* 国フラグバッジ */}
        <div
          className="absolute top-2 right-2 font-mono text-xs px-2 py-0.5 flex items-center gap-1"
          style={{
            background: "rgba(6,6,15,0.85)",
            border: `1px solid ${neonColor}40`,
            color: neonColor,
          }}
        >
          <span>{flag}</span>
          <span>{country}</span>
        </div>
      </div>

      {/* コンテンツ */}
      <div className="p-4">
        <div
          className="font-mono text-xs mb-1"
          style={{ color: neonColor, opacity: 0.7 }}
        >
          {year}.{monthDay}
        </div>
        <h3
          className="font-zen font-bold text-sm leading-snug mb-2 group-hover:text-white transition-colors line-clamp-2"
          style={{ color: "#f0eaff" }}
        >
          {title}
        </h3>
        <div
          className="font-mono text-xs tracking-wider"
          style={{ color: "rgba(240,234,255,0.35)" }}
        >
          {location}
        </div>

        {/* ホバーアロー */}
        <div
          className="mt-3 flex items-center gap-1 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ color: neonColor }}
        >
          <span>VIEW</span>
          <span>→</span>
        </div>
      </div>

      {/* ボトムライン */}
      <div
        className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
        style={{ background: neonColor }}
      />
    </Link>
  )
}
