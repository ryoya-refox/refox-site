import Link from "next/link"
import { company } from "@/data/company"

export default function Footer() {
  return (
    <footer
      className="relative border-t"
      style={{
        borderColor: "rgba(160,80,255,0.2)",
        background: "rgba(6,6,15,0.98)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ブランド */}
          <div>
            <div className="font-mono text-xl font-bold mb-2" style={{ color: "#00ffd2" }}>
              RE-FOX INC.
            </div>
            <div className="font-zen font-bold text-sm mb-4" style={{ color: "#f0eaff" }}>
              株式会社リフォックス
            </div>
            <p className="font-noto text-xs leading-relaxed" style={{ color: "rgba(240,234,255,0.5)" }}>
              イベントの企画・プロデュース・運営・設営
            </p>
          </div>

          {/* リンク */}
          <div>
            <div className="font-mono text-xs mb-4" style={{ color: "rgba(240,234,255,0.35)" }}>
              NAVIGATION
            </div>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/works", label: "実績一覧" },
                { href: "/services", label: "サービス・強み" },
                { href: "/company", label: "会社案内" },
                { href: "/contact", label: "お問い合わせ" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-noto text-sm hover:text-neon-cyan transition-colors duration-200"
                  style={{ color: "rgba(240,234,255,0.6)" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* コンタクト */}
          <div>
            <div className="font-mono text-xs mb-4" style={{ color: "rgba(240,234,255,0.35)" }}>
              CONTACT
            </div>
            <div className="flex flex-col gap-2">
              <a
                href={`tel:${company.tel}`}
                className="font-mono text-sm"
                style={{ color: "rgba(240,234,255,0.6)" }}
              >
                {company.tel}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="font-mono text-sm hover:text-neon-cyan transition-colors"
                style={{ color: "rgba(240,234,255,0.6)" }}
              >
                {company.email}
              </a>
              <div className="font-noto text-xs mt-2" style={{ color: "rgba(240,234,255,0.4)" }}>
                大阪本社 / 東京支社
              </div>
            </div>
          </div>
        </div>

        {/* ボトムライン */}
        <div
          className="mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderColor: "rgba(160,80,255,0.15)" }}
        >
          <p className="font-mono text-xs" style={{ color: "rgba(240,234,255,0.25)" }}>
            © 2026 Re-Fox Inc. All rights reserved.
          </p>
          <p className="font-mono text-xs" style={{ color: "rgba(240,234,255,0.2)" }}>
            — 株式会社リフォックス
          </p>
        </div>
      </div>
    </footer>
  )
}
