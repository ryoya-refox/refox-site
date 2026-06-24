"use client"

import { motion } from "framer-motion"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import HudCorners from "@/components/HudCorners"
import ScanLine from "@/components/ScanLine"
import { company } from "@/data/company"

const companyInfo = [
  { label: "社名", value: company.nameJa },
  { label: "英名", value: company.nameEn },
  { label: "代表者", value: company.ceo },
  { label: "設立", value: company.founded },
  { label: "事業内容", value: company.business },
  { label: "大阪本社", value: company.offices.osaka },
  { label: "東京支社", value: company.offices.tokyo },
  { label: "電話番号", value: company.tel },
  { label: "メール", value: company.email },
  { label: "URL", value: company.url },
]

export default function CompanyPage() {
  return (
    <div style={{ background: "#1a0d2e", minHeight: "100vh" }}>
      <Nav />

      {/* PAGE HEADER */}
      <section
        className="relative pt-32 pb-16 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(160,80,255,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 60%, rgba(255,45,120,0.08) 0%, transparent 50%), linear-gradient(180deg, #2a0d4a 0%, #1a0d2e 100%)",
        }}
      >
        <ScanLine color="rgba(0,255,210,0.04)" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="font-mono text-xs tracking-widest mb-3"
            style={{ color: "rgba(240,234,255,0.35)" }}
          >
            ABOUT RE-FOX INC.
          </div>
          <h1 className="font-zen font-black text-5xl sm:text-6xl mb-4" style={{ color: "#f0eaff" }}>
            会社案内
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 代表メッセージ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="font-mono text-xs tracking-widest mb-4"
              style={{ color: "#00ffd2", opacity: 0.7 }}
            >
              MESSAGE FROM CEO
            </div>
            <h2 className="font-zen font-black text-2xl sm:text-3xl mb-6" style={{ color: "#f0eaff" }}>
              代表メッセージ
            </h2>

            <div
              className="relative p-8 border"
              style={{
                background: "rgba(26,13,46,0.9)",
                borderColor: "rgba(0,255,210,0.2)",
              }}
            >
              <HudCorners color="#00ffd2" size={10} />
              <div
                className="font-mono text-3xl mb-6 animate-glow-pulse"
                style={{ color: "rgba(0,255,210,0.2)" }}
              >
                "
              </div>
              <p
                className="font-noto text-base leading-loose"
                style={{ color: "rgba(240,234,255,0.8)" }}
              >
                2014年の創業以来、日本と世界をイベントで繋いできました。
                私たちは単なる運営会社ではなく、クライアントのビジネスを
                世界に広げるパートナーです。
              </p>
              <p
                className="font-noto text-base leading-loose mt-4"
                style={{ color: "rgba(240,234,255,0.8)" }}>
                国内の展示会から海外の大型イベントまで、
                現場に立ち続けてきた経験と、グローバルなネットワークで、
                お客様のブランドを世界へ届けます。
              </p>
              <div className="mt-8 border-t pt-4" style={{ borderColor: "rgba(0,255,210,0.15)" }}>
                <div className="font-zen font-bold" style={{ color: "#f0eaff" }}>
                  山田 伶
                </div>
                <div className="font-mono text-xs" style={{ color: "rgba(240,234,255,0.4)" }}>
                  代表取締役 / CEO
                </div>
              </div>
            </div>
          </motion.div>

          {/* 会社概要テーブル */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div
              className="font-mono text-xs tracking-widest mb-4"
              style={{ color: "#ff2d78", opacity: 0.7 }}
            >
              COMPANY PROFILE
            </div>
            <h2 className="font-zen font-black text-2xl sm:text-3xl mb-6" style={{ color: "#f0eaff" }}>
              会社概要
            </h2>

            <div
              className="relative border overflow-hidden"
              style={{
                background: "rgba(26,13,46,0.9)",
                borderColor: "rgba(255,45,120,0.2)",
              }}
            >
              <HudCorners color="#ff2d78" size={10} />
              {companyInfo.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex border-b last:border-b-0"
                  style={{ borderColor: "rgba(160,80,255,0.1)" }}
                >
                  <div
                    className="font-mono text-xs px-4 py-4 w-28 flex-shrink-0 flex items-start"
                    style={{
                      color: "#00ffd2",
                      background: "rgba(0,255,210,0.03)",
                      borderRight: "1px solid rgba(0,255,210,0.08)",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    className="font-noto text-sm px-4 py-4 flex-1"
                    style={{ color: "rgba(240,234,255,0.8)" }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* アクセス */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div
            className="font-mono text-xs tracking-widest mb-4"
            style={{ color: "#a050ff", opacity: 0.7 }}
          >
            ACCESS
          </div>
          <h2 className="font-zen font-black text-2xl sm:text-3xl mb-8" style={{ color: "#f0eaff" }}>
            アクセス
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 大阪本社 */}
            <div
              className="relative border overflow-hidden"
              style={{
                background: "rgba(26,13,46,0.9)",
                borderColor: "rgba(160,80,255,0.2)",
              }}
            >
              <HudCorners color="#a050ff" size={10} />
              <ScanLine color="rgba(160,80,255,0.06)" duration={6} />

              <div className="p-6">
                <div
                  className="font-mono text-xs tracking-widest mb-2"
                  style={{ color: "#a050ff" }}
                >
                  HEADQUARTERS
                </div>
                <h3 className="font-zen font-bold text-lg mb-2" style={{ color: "#f0eaff" }}>
                  大阪本社
                </h3>
                <p className="font-noto text-sm mb-4" style={{ color: "rgba(240,234,255,0.6)" }}>
                  {company.offices.osaka}
                </p>
                {/* Google Maps プレースホルダー */}
                <div
                  className="relative h-48 flex items-center justify-center border"
                  style={{
                    borderColor: "rgba(160,80,255,0.2)",
                    background: "rgba(10,4,20,0.8)",
                  }}
                >
                  {/* iframeプレースホルダー：実際のURLが判明次第差し替え */}
                  {/* <iframe
                    src="https://www.google.com/maps/embed?pb=..."
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  /> */}
                  <div className="text-center">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mx-auto mb-2">
                      <circle cx="16" cy="14" r="5" stroke="#a050ff" strokeWidth="1.5" />
                      <path d="M16 4 C10 4 6 9 6 14 C6 22 16 28 16 28 C16 28 26 22 26 14 C26 9 22 4 16 4Z" stroke="#a050ff" strokeWidth="1.5" fill="none" opacity="0.5" />
                    </svg>
                    <p className="font-mono text-xs" style={{ color: "rgba(240,234,255,0.3)" }}>
                      MAP PLACEHOLDER
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 東京支社 */}
            <div
              className="relative border overflow-hidden"
              style={{
                background: "rgba(26,13,46,0.9)",
                borderColor: "rgba(0,255,210,0.2)",
              }}
            >
              <HudCorners color="#00ffd2" size={10} />
              <ScanLine color="rgba(0,255,210,0.06)" duration={7} />

              <div className="p-6">
                <div
                  className="font-mono text-xs tracking-widest mb-2"
                  style={{ color: "#00ffd2" }}
                >
                  BRANCH OFFICE
                </div>
                <h3 className="font-zen font-bold text-lg mb-2" style={{ color: "#f0eaff" }}>
                  東京支社
                </h3>
                <p className="font-noto text-sm mb-4" style={{ color: "rgba(240,234,255,0.6)" }}>
                  {company.offices.tokyo}
                </p>
                {/* Google Maps プレースホルダー */}
                <div
                  className="relative h-48 flex items-center justify-center border"
                  style={{
                    borderColor: "rgba(0,255,210,0.2)",
                    background: "rgba(10,4,20,0.8)",
                  }}
                >
                  {/* iframeプレースホルダー：実際のURLが判明次第差し替え */}
                  {/* <iframe
                    src="https://www.google.com/maps/embed?pb=..."
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  /> */}
                  <div className="text-center">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mx-auto mb-2">
                      <circle cx="16" cy="14" r="5" stroke="#00ffd2" strokeWidth="1.5" />
                      <path d="M16 4 C10 4 6 9 6 14 C6 22 16 28 16 28 C16 28 26 22 26 14 C26 9 22 4 16 4Z" stroke="#00ffd2" strokeWidth="1.5" fill="none" opacity="0.5" />
                    </svg>
                    <p className="font-mono text-xs" style={{ color: "rgba(240,234,255,0.3)" }}>
                      MAP PLACEHOLDER
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}
