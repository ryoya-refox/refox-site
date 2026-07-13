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
    neonColor: "#00ffd2",
    detail:
      "展示会・販促イベント・プロモーションイベントの企画立案から当日の運営・設営まで一貫してサポート。会場選定・ブース設計・人員手配・備品調達まで幅広く対応しています。",
    tags: ["展示会", "販促イベント", "プロモーション", "会場選定", "設営・運営"],
  },
  {
    id: "02",
    title: "国内店舗施工",
    sub: "STORE CONSTRUCTION",
    neonColor: "#ff2d78",
    detail:
      "小売店舗・ショールーム・ポップアップストアの内装デザイン・施工・ディスプレイ制作をトータルコーディネート。ブランドの世界観を空間で表現し、来客体験を高めます。",
    tags: ["内装設計", "施工", "ショールーム", "ポップアップ", "ディスプレイ"],
  },
  {
    id: "03",
    title: "海外イベント",
    sub: "OVERSEAS EVENT",
    neonColor: "#a0ff00",
    detail:
      "海外展示会への出展サポートから現地での会場施工・運営まで、言語対応・現地規制対応・パートナー連携を含む完全サポートを提供。対応実績はUSA・Philippines・Hong Kong・フランスほか多数。",
    tags: ["USA", "Philippines", "Hong Kong", "現地運営", "海外展示会"],
  },
  {
    id: "04",
    title: "海外貿易支援",
    sub: "TRADE SUPPORT",
    neonColor: "#ffa000",
    detail:
      "日本製品の海外展開における輸出入手続き支援から、現地バイヤー・ディストリビューターとの連携、商流構築・契約サポートまで一貫して対応。初めての海外取引もスムーズに進めます。",
    tags: ["輸出入支援", "バイヤー連携", "商流構築", "契約サポート"],
  },
  {
    id: "05",
    title: "海外進出支援",
    sub: "GLOBAL EXPANSION",
    neonColor: "#d070ff",
    detail:
      "市場調査・競合分析・現地ブランディング戦略の立案から実行支援まで一貫して担当。初めての海外展開も安心してお任せいただけるよう、丁寧に伴走します。",
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
              <HudCorners color={svc.neonColor} size={8} />
              <div
                className="font-mono text-xl font-bold mb-2"
                style={{ color: svc.neonColor, opacity: 0.7 }}
              >
                {svc.id}
              </div>
              <div className="font-zen font-bold text-sm" style={{ color: "#f0eaff" }}>
                {svc.title}
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-0.5 transition-all duration-500"
                style={{ background: svc.neonColor }}
              />
            </motion.a>
          ))}
        </div>

        {/* 各サービス詳細 — 左右交互レイアウト */}
        <div>
          {services.map((svc, i) => {
            const isImageLeft = i % 2 === 0 // 01・03・05 = 画像左、02・04 = 画像右
            return (
              <div key={svc.id}>
                <motion.div
                  id={`service-${svc.id}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col lg:flex-row gap-0 py-16 ${
                    isImageLeft ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* 画像エリア */}
                  <div className="w-full lg:w-1/2 flex-shrink-0">
                    <div
                      className="relative overflow-hidden"
                      style={{
                        height: "240px",
                        background: `radial-gradient(ellipse at center, ${svc.neonColor}22 0%, ${svc.neonColor}08 55%, transparent 100%)`,
                        border: `1px solid ${svc.neonColor}30`,
                      }}
                    >
                      {/* HUD コーナー装飾 */}
                      <div
                        className="absolute top-0 left-0 w-8 h-8"
                        style={{
                          borderTop: `2px solid ${svc.neonColor}`,
                          borderLeft: `2px solid ${svc.neonColor}`,
                        }}
                      />
                      <div
                        className="absolute top-0 right-0 w-8 h-8"
                        style={{
                          borderTop: `2px solid ${svc.neonColor}`,
                          borderRight: `2px solid ${svc.neonColor}`,
                        }}
                      />
                      <div
                        className="absolute bottom-0 left-0 w-8 h-8"
                        style={{
                          borderBottom: `2px solid ${svc.neonColor}`,
                          borderLeft: `2px solid ${svc.neonColor}`,
                        }}
                      />
                      <div
                        className="absolute bottom-0 right-0 w-8 h-8"
                        style={{
                          borderBottom: `2px solid ${svc.neonColor}`,
                          borderRight: `2px solid ${svc.neonColor}`,
                        }}
                      />
                      {/* プレースホルダーラベル */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                        <div
                          className="font-mono text-xs tracking-widest"
                          style={{ color: `${svc.neonColor}60` }}
                        >
                          IMAGE PLACEHOLDER
                        </div>
                        <div
                          className="w-16 h-px"
                          style={{ background: `${svc.neonColor}35` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* テキストエリア */}
                  <div
                    className={`w-full lg:w-1/2 flex flex-col justify-center pt-8 lg:pt-0 ${
                      isImageLeft ? "lg:pl-12" : "lg:pr-12"
                    }`}
                  >
                    {/* サービス番号 */}
                    <div
                      className="font-mono text-sm tracking-widest mb-3"
                      style={{ color: svc.neonColor }}
                    >
                      [ {svc.id} ]
                    </div>
                    {/* タイトル */}
                    <h2
                      className="font-zen mb-1"
                      style={{ fontSize: "28px", fontWeight: 900, color: "#f0eaff" }}
                    >
                      {svc.title}
                    </h2>
                    {/* 英語サブタイトル */}
                    <div
                      className="font-mono text-xs tracking-widest mb-5"
                      style={{ color: svc.neonColor, opacity: 0.45 }}
                    >
                      {svc.sub}
                    </div>
                    {/* 説明文 */}
                    <p
                      className="font-noto mb-6"
                      style={{
                        fontSize: "14px",
                        lineHeight: 1.9,
                        color: "rgba(240,234,255,0.72)",
                      }}
                    >
                      {svc.detail}
                    </p>
                    {/* タグ */}
                    <div className="flex flex-wrap gap-2">
                      {svc.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs px-3 py-1 border"
                          style={{
                            borderColor: `${svc.neonColor}40`,
                            color: svc.neonColor,
                            background: `${svc.neonColor}08`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* 区切り線（最後のサービス以外） */}
                {i < services.length - 1 && (
                  <div
                    className="w-full h-px"
                    style={{ background: "rgba(160,80,255,0.15)" }}
                  />
                )}
              </div>
            )
          })}
        </div>
      </section>

      <Footer />
    </div>
  )
}
