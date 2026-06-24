"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const navLinks = [
  { href: "/works", label: "実績" },
  { href: "/services", label: "サービス" },
  { href: "/company", label: "会社概要" },
]

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [today, setToday] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const d = new Date()
    setToday(
      `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`
    )
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(6,6,15,0.98)"
          : "rgba(6,6,15,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0,255,210,0.12)",
      }}
    >
      {/* シアンパルスライン */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px animate-border-pulse"
        style={{
          background: "linear-gradient(90deg, transparent, #00ffd2, rgba(160,80,255,0.8), #00ffd2, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="animate-flicker">
              <span
                className="font-zen font-black text-lg tracking-wider"
                style={{ color: "#f0eaff" }}
              >
                株式会社リフォックス
              </span>
            </div>
          </Link>

          {/* デスクトップ：ステータス＋ナビ */}
          <div className="hidden md:flex items-center gap-6">
            {/* SYS STATUS */}
            <div
              className="font-mono text-xs flex items-center gap-2"
              style={{ color: "rgba(240,234,255,0.35)" }}
            >
              <span>SYS:ONLINE</span>
              <span style={{ color: "#00ffd2" }} className="animate-neon-pulse">◉</span>
              <span>{today}</span>
            </div>

            {/* ナビリンク */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-noto text-sm transition-colors duration-200 relative group"
                style={{
                  color: pathname.startsWith(link.href) ? "#00ffd2" : "#f0eaff",
                }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 right-0 h-px transition-all duration-300"
                  style={{
                    background: "#00ffd2",
                    opacity: pathname.startsWith(link.href) ? 1 : 0,
                    transform: pathname.startsWith(link.href) ? "scaleX(1)" : "scaleX(0)",
                  }}
                />
              </Link>
            ))}

            {/* お問い合わせCTA */}
            <Link
              href="/contact"
              className="relative overflow-hidden font-mono text-xs px-4 py-2 border transition-all duration-200"
              style={{
                borderColor: "#ff2d78",
                color: "#ff2d78",
                background: "rgba(255,45,120,0.08)",
              }}
            >
              <span className="relative z-10">お問い合わせ</span>
              <span
                className="absolute inset-0 -translate-x-full animate-shimmer"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,45,120,0.3), transparent)",
                }}
              />
            </Link>
          </div>

          {/* モバイルハンバーガー */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-6 h-px transition-all duration-300"
                style={{
                  background: "#00ffd2",
                  transformOrigin: "center",
                  transform:
                    menuOpen
                      ? i === 0
                        ? "rotate(45deg) translate(3px, 3px)"
                        : i === 2
                        ? "rotate(-45deg) translate(3px, -3px)"
                        : "scaleX(0)"
                      : "none",
                }}
              />
            ))}
          </button>
        </div>

        {/* モバイルメニュー */}
        {menuOpen && (
          <div
            className="md:hidden py-4 border-t flex flex-col gap-4"
            style={{ borderColor: "rgba(160,80,255,0.2)" }}
          >
            <div
              className="font-mono text-xs flex items-center gap-2"
              style={{ color: "rgba(240,234,255,0.35)" }}
            >
              <span>SYS:ONLINE</span>
              <span style={{ color: "#00ffd2" }}>◉</span>
              <span>{today}</span>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-noto text-sm py-1"
                style={{
                  color: pathname.startsWith(link.href) ? "#00ffd2" : "#f0eaff",
                }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="font-mono text-xs px-4 py-2 border text-center"
              style={{ borderColor: "#ff2d78", color: "#ff2d78" }}
              onClick={() => setMenuOpen(false)}
            >
              お問い合わせ
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
