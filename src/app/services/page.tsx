"use client"

import { motion } from "framer-motion"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import HudCorners from "@/components/HudCorners"
import ScanLine from "@/components/ScanLine"

const services = [
  {
    id: "01",
    title: "国内イベント",
    sub: "DOMESTIC EVENT",
    color: "#00ffd2",
    details: [
      "展示会・販促イベント・プロモーションイベントの企画立案から当日の運営・設営まで一貫してサポート。",
      "会場選定・ブース設計・人員手配・備品調達まで対応。",
    ],
    tags: ["展示会", "販促イベント", "プロモーション", "会場選定", "設営・運営"],
  },
  {
    id: "02",
    title: "国内店舗施工",
    sub: "STORE CONSTRUCTION",
    color: "#ff2d78",
    details: [
      "小売店舗・ショールーム・ポップアップストアの内装デザイン・施工・ディスプレイ制作。",
      "ブランドの世界観を空間で表現します。",
    ],
    tags: ["内装設計", "施工", "ショールーム", "ポップアップ", "ディスプレイ"],
  },
  {
    id: "03",
    title: "海外イベント",
    sub: "OVERSEAS EVENT",
    color: "#a050ff",
    details: [
      "海外展示会への出展サポートから、現地での会場施工・運営まで。",
      "言語対応・現地規制対応・パートナー連携含む完全サポート。",
      "対応実績: USA / Philippines / Hong Kong / フランス / 他",
    ],
    tags: ["USA", "Philippines", "Hong Kong", "現地運営", "海外展示会"],
  },
  {
    id: "04",
    title: "海外貿易支援",
    sub: "TRADE SUPPORT",
    color: "#ffd200",
    details: [
      "日本製品の海外展開における輸出入手続き支援、現地バイヤー・ディストリビューターとの連携、商流構築・契約サポート。",
    ],
    tags: ["輸出入支援", "バイヤー連携", "商流構築", "契約サポート"],
  },
  {
    id: "05",
    title: "海外進出支援",
    sub: "GLOBAL EXPANSION",
    color: "#a0ff00",
    details: [
      "市場調査・競合分析・現地ブランディング戦略立案から実行支援まで。",
      "初めての海外展開も安心してお任せください。",
    ],
    tags: ["市場調査", "競合分析", "ブランディング", "戦略立案", "実行支援"],
  },
]

export default function ServicesPage() {
  return (
    <div style={{ background: "#1a0d2e", minHeight: "100vh" }}>
      <Nav />

      {/* PAGE HEADER */}
      <section
        className="relative pt-32 pb-16 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 60% 0%, rgba(0,255,210,0.12) 0%, transparent 50%), radial-gradient(ellipse at 20% 50%, rgba(160,80,255,0.1) 0%, transparent 50%), linear-gradient(180deg, #2a0d4a 0%, #1a0d2e 100%)",
        }}
      >
        <ScanLine color="rgba(0,255,210,0.04)" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="font-mono text-xs tracking-widest mb-3"
            style={{ color: "rgba(240,234,255,0.35)" }}
          >
            OUR CAPABILITIES
          </div>
          <h1 className="font-zen font-black text-5xl sm:text-6xl mb-4" style={{ color: "#f0eaff" }}>
            サービス・強み
          </h1>
          <p className="font-noto text-base max-w-xl" style={{ color: "rgba(240,234,255,0.5)" }}>
            国内から海外まで、イベント・施工・進出支援の5つの専門領域
          </p>
        </div>
      </section>

      {/* サービス概要グリッド */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-20">
          {services.map((svc, i) => (
            <motion.a
              key={svc.id}
              href={`#service-${svc.id}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative block p-4 border group transition-all duration-300"
              style={{
                background: "rgba(26,13,46,0.9)",
                borderColor: "rgba(160,80,255,0.2)",
                textDecoration: "none",
              }}
            >
              <HudCorners color={svc.color} size={8} />
              <div
                className="font-mono text-xl font-bold mb-2"
                style={{ color: svc.color, opacity: 0.7 }}
              >
                {svc.id}
              </div>
              <div className="font-zen font-bold text-sm" style={{ color: "#f0eaff" }}>
                {svc.title}
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-0.5 transition-all duration-500"
                style={{ background: svc.color }}
              />
            </motion.a>
          ))}
        </div>

        {/* 各サービス詳細 */}
        <div className="space-y-12">
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              id={`service-${svc.id}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative border overflow-hidden"
              style={{
                background: "rgba(26,13,46,0.9)",
                borderColor: `${svc.color}30`,
              }}
            >
              <HudCorners color={svc.color} size={12} />
              <ScanLine color={`${svc.color}08`} duration={4 + i} />

              {/* 左のカラーバー */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1"
                style={{ background: `linear-gradient(180deg, ${svc.color}, transparent)` }}
              />

              <div className="p-8 pl-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* 左：タイトル */}
                <div>
                  <div
                    className="font-mono text-4xl font-bold mb-3 animate-glow-pulse"
                    style={{ color: svc.color, opacity: 0.5 }}
                  >
                    {svc.id}
                  </div>
                  <h2
                    className="font-zen font-black text-2xl sm:text-3xl mb-2"
                    style={{ color: "#f0eaff" }}
                  >
                    {svc.title}
                  </h2>
                  <div
                    className="font-mono text-xs tracking-widest"
                    style={{ color: svc.color, opacity: 0.7 }}
                  >
                    {svc.sub}
                  </div>
                </div>

                {/* 右：説明 + タグ */}
                <div className="lg:col-span-2">
                  <div className="space-y-3 mb-6">
                    {svc.details.map((d, j) => (
                      <p
                        key={j}
                        className="font-noto text-base leading-relaxed"
                        style={{ color: "rgba(240,234,255,0.75)" }}
                      >
                        {d}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-3 py-1 border"
                        style={{
                          borderColor: `${svc.color}40`,
                          color: svc.color,
                          background: `${svc.color}08`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
