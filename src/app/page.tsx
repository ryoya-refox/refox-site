"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import WorkCard from "@/components/WorkCard"
import StatCounter from "@/components/StatCounter"
import NeonGrid from "@/components/NeonGrid"
import CityScape from "@/components/CityScape"
import ScanLine from "@/components/ScanLine"
import { works } from "@/data/works"

const services = [
  {
    id: "01",
    title: "国内イベント",
    sub: "DOMESTIC EVENT",
    desc: "展示会・販促・プロモーションの企画から当日運営まで一貫サポート",
    color: "#00ffd2",
  },
  {
    id: "02",
    title: "国内店舗施工",
    sub: "STORE CONSTRUCTION",
    desc: "小売店舗・ショールーム・ポップアップの内装設計・施工・ディスプレイ",
    color: "#ff2d78",
  },
  {
    id: "03",
    title: "海外イベント",
    sub: "OVERSEAS EVENT",
    desc: "海外展示会への出展から現地施工・運営まで完全サポート",
    color: "#a050ff",
  },
  {
    id: "04",
    title: "海外貿易支援",
    sub: "TRADE SUPPORT",
    desc: "輸出入手続き支援・現地バイヤー連携・商流構築・契約サポート",
    color: "#ffd200",
  },
  {
    id: "05",
    title: "海外進出支援",
    sub: "GLOBAL EXPANSION",
    desc: "市場調査・競合分析・現地ブランディング戦略から実行支援まで",
    color: "#a0ff00",
  },
]

const recentWorks = [...works]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 6)

export default function HomePage() {
  return (
    <div style={{ background: "#1a0d2e", minHeight: "100vh" }}>
      <Nav />

      {/* ───── HERO ───── */}
      <section
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 70% 0%, rgba(255,45,120,0.18) 0%, transparent 50%), radial-gradient(ellipse at 20% 0%, rgba(160,80,255,0.15) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(0,200,255,0.08) 0%, transparent 50%), linear-gradient(180deg, #3d1260 0%, #2a0d4a 40%, #1a0d2e 100%)",
        }}
      >
        {/* 回路グリッド */}
        <NeonGrid />

        {/* スキャンライン */}
        <ScanLine color="rgba(0,255,210,0.04)" />

        {/* 夜景シルエット */}
        <CityScape />

        {/* Hero コンテンツ */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-center">
            {/* 左カラム */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div
                className="font-mono text-xs mb-4 tracking-widest"
                style={{ color: "rgba(240,234,255,0.4)" }}
              >
                RE-FOX INC. — EST.2014
              </div>

              <h1 className="font-zen font-black leading-none mb-6">
                <span
                  className="block whitespace-nowrap text-5xl sm:text-6xl lg:text-6xl xl:text-7xl animate-flicker"
                  style={{ color: "#f0eaff" }}
                >
                  日本と世界を
                </span>
                <span
                  className="block whitespace-nowrap text-5xl sm:text-6xl lg:text-6xl xl:text-7xl animate-glow-pulse"
                  style={{ color: "#00ffd2" }}
                >
                  イベントで繋ぐ
                </span>
              </h1>

              <p
                className="font-noto text-base sm:text-lg max-w-xl leading-relaxed mt-6 mb-10"
                style={{ color: "rgba(240,234,255,0.65)" }}
              >
                国内外のイベント企画・運営・設営から<br />
                海外進出支援まで、ビジネスを世界へ。
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  href="/works"
                  className="relative overflow-hidden font-mono text-sm px-8 py-3 border transition-all duration-200 group"
                  style={{
                    borderColor: "#00ffd2",
                    color: "#00ffd2",
                    background: "rgba(0,255,210,0.08)",
                  }}
                >
                  <span className="relative z-10">実績を見る</span>
                  <span
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
                    style={{ background: "rgba(0,255,210,0.15)" }}
                  />
                  <span
                    className="absolute inset-0 -translate-x-full animate-shimmer"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(0,255,210,0.3), transparent)",
                    }}
                  />
                </Link>
                <Link
                  href="/contact"
                  className="font-mono text-sm px-8 py-3 border transition-colors duration-200"
                  style={{
                    borderColor: "rgba(240,234,255,0.3)",
                    color: "rgba(240,234,255,0.7)",
                  }}
                >
                  お問い合わせ
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <StatCounter target={28} suffix="+" label="TOTAL WORKS" color="#00ffd2" />
                <StatCounter target={5} label="COUNTRIES" color="#ff2d78" />
                <StatCounter target={12} label="YEARS" color="#a050ff" />
                <StatCounter target={2014} label="FOUNDED" color="#ffd200" duration={1500} />
              </div>
            </motion.div>

            {/* 右カラム：ネオン看板ロゴ */}
            <motion.div
              className="hidden lg:flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.png"
                alt="RE-FOX"
                className="animate-float"
                style={{
                  maxWidth: "300px",
                  width: "100%",
                  filter:
                    "brightness(0) invert(1) drop-shadow(0 0 20px #00ffd2) drop-shadow(0 0 40px #00ffd2)",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── RECENT WORKS ───── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div
              className="font-mono text-xs tracking-widest mb-2"
              style={{ color: "rgba(240,234,255,0.35)" }}
            >
              LATEST PROJECTS
            </div>
            <h2 className="font-zen font-black text-3xl sm:text-4xl" style={{ color: "#f0eaff" }}>
              最新実績
            </h2>
          </div>
          <Link
            href="/works"
            className="font-mono text-xs flex items-center gap-2 transition-colors"
            style={{ color: "#00ffd2" }}
          >
            全件表示 →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentWorks.map((work, i) => (
            <motion.div
              key={work.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <WorkCard {...work} index={i} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───── SERVICES ───── */}
      <section
        className="py-20"
        style={{ background: "rgba(20,8,40,0.75)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div
              className="font-mono text-xs tracking-widest mb-2"
              style={{ color: "rgba(240,234,255,0.35)" }}
            >
              WHAT WE DO
            </div>
            <h2 className="font-zen font-black text-3xl sm:text-4xl" style={{ color: "#f0eaff" }}>
              サービス
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {services.map((svc, i) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative group p-6 border overflow-hidden cursor-default"
                style={{
                  background: "rgba(26,13,46,0.9)",
                  borderColor: "rgba(160,80,255,0.2)",
                }}
              >
                {/* ホバーで下からラインが伸びる */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-0.5 transition-all duration-500"
                  style={{ background: svc.color }}
                />
                {/* ホバー発光 */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: `inset 0 0 30px ${svc.color}15` }}
                />

                <div
                  className="font-mono text-2xl font-bold mb-3 opacity-60"
                  style={{ color: svc.color }}
                >
                  {svc.id}
                </div>
                <h3
                  className="font-zen font-bold text-base mb-1"
                  style={{ color: "#f0eaff" }}
                >
                  {svc.title}
                </h3>
                <div
                  className="font-mono text-xs mb-3"
                  style={{ color: svc.color, opacity: 0.6 }}
                >
                  {svc.sub}
                </div>
                <p
                  className="font-noto text-xs leading-relaxed"
                  style={{ color: "rgba(240,234,255,0.5)" }}
                >
                  {svc.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="font-mono text-sm inline-flex items-center gap-2 px-6 py-3 border transition-colors duration-200"
              style={{
                borderColor: "rgba(160,80,255,0.4)",
                color: "rgba(240,234,255,0.6)",
              }}
            >
              サービス詳細を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ───── COMPANY OVERVIEW ───── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="font-mono text-xs tracking-widest mb-2"
              style={{ color: "rgba(240,234,255,0.35)" }}
            >
              ABOUT US
            </div>
            <h2 className="font-zen font-black text-3xl sm:text-4xl mb-6" style={{ color: "#f0eaff" }}>
              会社概要
            </h2>
            <p
              className="font-noto text-base leading-relaxed mb-6"
              style={{ color: "rgba(240,234,255,0.7)" }}
            >
              2014年の創業以来、日本と世界をイベントで繋いできました。
              私たちは単なる運営会社ではなく、クライアントのビジネスを
              世界に広げるパートナーです。
            </p>
            <Link
              href="/company"
              className="font-mono text-sm inline-flex items-center gap-2 px-6 py-3 border transition-colors duration-200"
              style={{
                borderColor: "#00ffd2",
                color: "#00ffd2",
                background: "rgba(0,255,210,0.06)",
              }}
            >
              会社案内を見る →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-6 border"
            style={{
              background: "rgba(26,13,46,0.9)",
              borderColor: "rgba(160,80,255,0.2)",
            }}
          >
            {[
              ["社名", "株式会社リフォックス"],
              ["代表者", "代表取締役 山田伶"],
              ["設立", "2014年9月"],
              ["事業内容", "イベントの企画、プロデュース、運営、設営"],
              ["本社", "大阪市北区梅田"],
              ["支社", "東京都墨田区両国"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex gap-4 py-3 border-b"
                style={{ borderColor: "rgba(160,80,255,0.1)" }}
              >
                <div
                  className="font-mono text-xs w-20 flex-shrink-0 pt-0.5"
                  style={{ color: "#00ffd2" }}
                >
                  {label}
                </div>
                <div
                  className="font-noto text-sm"
                  style={{ color: "rgba(240,234,255,0.8)" }}
                >
                  {value}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
