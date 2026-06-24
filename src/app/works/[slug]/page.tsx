import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import HudCorners from "@/components/HudCorners"
import ScanLine from "@/components/ScanLine"
import { works } from "@/data/works"

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const work = works.find((w) => w.slug === params.slug)
  if (!work) return {}
  return {
    title: work.title,
    description: `${work.title} — ${work.location} (${work.date})`,
  }
}

const countryFlags: Record<string, string> = {
  USA: "🇺🇸",
  JPN: "🇯🇵",
  PHL: "🇵🇭",
  HKG: "🇭🇰",
  CIV: "🇨🇮",
}

export default function WorkDetailPage({ params }: Props) {
  const work = works.find((w) => w.slug === params.slug)
  if (!work) notFound()

  const flag = countryFlags[work.country] ?? "🌐"
  const categoryLabel = work.category === "domestic" ? "国内" : "海外"

  // 前後のwork（ソート済み）
  const sorted = [...works].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  const idx = sorted.findIndex((w) => w.slug === work.slug)
  const prev = sorted[idx + 1]
  const next = sorted[idx - 1]

  return (
    <div style={{ background: "#1a0d2e", minHeight: "100vh" }}>
      <Nav />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* パンくず */}
        <div className="flex items-center gap-2 font-mono text-xs mb-8" style={{ color: "rgba(240,234,255,0.35)" }}>
          <Link href="/" className="hover:text-white transition-colors">HOME</Link>
          <span>/</span>
          <Link href="/works" className="hover:text-white transition-colors">WORKS</Link>
          <span>/</span>
          <span style={{ color: "#00ffd2" }}>{work.slug.toUpperCase()}</span>
        </div>

        {/* メインカード */}
        <div
          className="relative border overflow-hidden"
          style={{
            background: "rgba(26,13,46,0.9)",
            borderColor: "rgba(160,80,255,0.2)",
          }}
        >
          <HudCorners color={work.neonColor} size={14} />
          <ScanLine color={`${work.neonColor}10`} duration={5} />

          {/* 画像 or ネオンアイコン */}
          <div className="relative h-56 sm:h-72 overflow-hidden">
            {work.imageUrl ? (
              <Image
                src={work.imageUrl}
                alt={work.title}
                fill
                className="object-cover"
                style={{ filter: "brightness(0.65)" }}
                priority
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, rgba(10,4,20,0.95), rgba(26,13,46,0.9))`,
                }}
              >
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <rect
                    x="10"
                    y="10"
                    width="60"
                    height="60"
                    rx="3"
                    stroke={work.neonColor}
                    strokeWidth="1"
                    strokeDasharray="6 3"
                    opacity="0.5"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="18"
                    stroke={work.neonColor}
                    strokeWidth="1"
                    opacity="0.7"
                  />
                  <circle cx="40" cy="40" r="4" fill={work.neonColor} opacity="0.9" />
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
                    const rad = (deg * Math.PI) / 180
                    const x1 = 40 + 18 * Math.cos(rad)
                    const y1 = 40 + 18 * Math.sin(rad)
                    const x2 = 40 + 26 * Math.cos(rad)
                    const y2 = 40 + 26 * Math.sin(rad)
                    return (
                      <line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke={work.neonColor}
                        strokeWidth="1"
                        opacity="0.4"
                      />
                    )
                  })}
                </svg>
              </div>
            )}

            {/* バッジ */}
            <div className="absolute top-4 left-4 flex gap-2">
              <span
                className="font-mono text-xs px-3 py-1"
                style={{
                  background: "rgba(6,6,15,0.85)",
                  border: `1px solid ${work.neonColor}50`,
                  color: work.neonColor,
                }}
              >
                {flag} {work.country}
              </span>
              <span
                className="font-mono text-xs px-3 py-1"
                style={{
                  background: "rgba(6,6,15,0.85)",
                  border: "1px solid rgba(160,80,255,0.3)",
                  color: "rgba(240,234,255,0.6)",
                }}
              >
                {categoryLabel}
              </span>
            </div>
          </div>

          {/* 詳細 */}
          <div className="p-8">
            <div
              className="font-mono text-sm mb-2"
              style={{ color: work.neonColor }}
            >
              {work.date}
            </div>
            <h1
              className="font-zen font-black text-3xl sm:text-4xl mb-4"
              style={{ color: "#f0eaff" }}
            >
              {work.title}
            </h1>
            <div
              className="font-mono text-sm tracking-widest mb-6"
              style={{ color: "rgba(240,234,255,0.4)" }}
            >
              {work.location}
            </div>

            {work.description && (
              <p
                className="font-noto text-base leading-relaxed"
                style={{ color: "rgba(240,234,255,0.7)" }}
              >
                {work.description}
              </p>
            )}
          </div>
        </div>

        {/* ナビゲーション */}
        <div className="mt-10 flex flex-col sm:flex-row items-start justify-between gap-4">
          <Link
            href="/works"
            className="font-mono text-sm flex items-center gap-2 px-5 py-3 border transition-colors"
            style={{
              borderColor: "rgba(160,80,255,0.3)",
              color: "rgba(240,234,255,0.6)",
            }}
          >
            ← 実績一覧に戻る
          </Link>

          <div className="flex gap-3">
            {prev && (
              <Link
                href={`/works/${prev.slug}`}
                className="font-mono text-xs px-4 py-3 border transition-colors"
                style={{
                  borderColor: "rgba(160,80,255,0.2)",
                  color: "rgba(240,234,255,0.45)",
                }}
              >
                ← PREV
              </Link>
            )}
            {next && (
              <Link
                href={`/works/${next.slug}`}
                className="font-mono text-xs px-4 py-3 border transition-colors"
                style={{
                  borderColor: "rgba(160,80,255,0.2)",
                  color: "rgba(240,234,255,0.45)",
                }}
              >
                NEXT →
              </Link>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
