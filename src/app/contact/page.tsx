"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import HudCorners from "@/components/HudCorners"
import ScanLine from "@/components/ScanLine"
import { company } from "@/data/company"

type FormState = {
  companyName: string
  name: string
  email: string
  phone: string
  category: string
  message: string
}

const initialState: FormState = {
  companyName: "",
  name: "",
  email: "",
  phone: "",
  category: "",
  message: "",
}

const categories = [
  "展示会出展サポート",
  "イベント施工運営",
  "海外進出支援",
  "その他",
]

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialState)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormState>>({})

  const validate = () => {
    const e: Partial<FormState> = {}
    if (!form.name.trim()) e.name = "お名前は必須です"
    if (!form.email.trim()) e.email = "メールアドレスは必須です"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "正しいメールアドレスを入力してください"
    if (!form.message.trim()) e.message = "メッセージは必須です"
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const v = validate()
    if (Object.keys(v).length > 0) {
      setErrors(v)
      return
    }
    // TODO: API Route or Formspree 等に差し替え
    // fetch("/api/contact", { method: "POST", body: JSON.stringify(form) })
    setSubmitted(true)
  }

  const inputClass = "w-full bg-transparent font-noto text-sm py-3 px-4 border outline-none transition-all duration-200 focus:border-neon-cyan"
  const labelClass = "block font-mono text-xs mb-1.5 tracking-widest"

  return (
    <div style={{ background: "#1a0d2e", minHeight: "100vh" }}>
      <Nav />

      {/* PAGE HEADER */}
      <section
        className="relative pt-32 pb-16 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 40% 0%, rgba(255,45,120,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(0,255,210,0.08) 0%, transparent 50%), linear-gradient(180deg, #2a0d4a 0%, #1a0d2e 100%)",
        }}
      >
        <ScanLine color="rgba(255,45,120,0.04)" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="font-mono text-xs tracking-widest mb-3"
            style={{ color: "rgba(240,234,255,0.35)" }}
          >
            GET IN TOUCH
          </div>
          <h1 className="font-zen font-black text-5xl sm:text-6xl mb-4" style={{ color: "#f0eaff" }}>
            お問い合わせ
          </h1>
          <p className="font-noto text-base" style={{ color: "rgba(240,234,255,0.5)" }}>
            イベント・海外進出に関するご相談はこちらから
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* フォーム */}
          <div className="lg:col-span-2">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative border p-12 text-center"
                style={{
                  background: "rgba(26,13,46,0.9)",
                  borderColor: "rgba(0,255,210,0.3)",
                }}
              >
                <HudCorners color="#00ffd2" size={12} />
                <div
                  className="font-mono text-5xl mb-4 animate-glow-pulse"
                  style={{ color: "#00ffd2" }}
                >
                  ✓
                </div>
                <h2 className="font-zen font-black text-2xl mb-3" style={{ color: "#f0eaff" }}>
                  送信完了
                </h2>
                <p className="font-noto text-base" style={{ color: "rgba(240,234,255,0.6)" }}>
                  お問い合わせありがとうございます。<br />
                  内容を確認の上、担当者よりご連絡いたします。
                </p>
                <button
                  onClick={() => { setForm(initialState); setSubmitted(false) }}
                  className="mt-8 font-mono text-sm px-6 py-3 border transition-colors"
                  style={{ borderColor: "rgba(0,255,210,0.4)", color: "#00ffd2" }}
                >
                  新しいお問い合わせ
                </button>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleSubmit}
                className="relative border overflow-hidden"
                style={{
                  background: "rgba(26,13,46,0.9)",
                  borderColor: "rgba(160,80,255,0.2)",
                }}
              >
                <HudCorners color="#ff2d78" size={12} />
                <ScanLine color="rgba(255,45,120,0.05)" duration={5} />

                <div className="p-8 space-y-6">
                  {/* 会社名 */}
                  <div>
                    <label className={labelClass} style={{ color: "rgba(240,234,255,0.45)" }}>
                      COMPANY <span className="ml-1 opacity-50">任意</span>
                    </label>
                    <input
                      type="text"
                      value={form.companyName}
                      onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                      placeholder="株式会社〇〇"
                      className={inputClass}
                      style={{
                        borderColor: "rgba(160,80,255,0.2)",
                        color: "#f0eaff",
                      }}
                    />
                  </div>

                  {/* お名前 */}
                  <div>
                    <label className={labelClass} style={{ color: "rgba(240,234,255,0.45)" }}>
                      NAME <span className="ml-1" style={{ color: "#ff2d78" }}>*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => {
                        setForm({ ...form, name: e.target.value })
                        if (errors.name) setErrors({ ...errors, name: "" })
                      }}
                      placeholder="山田 太郎"
                      className={inputClass}
                      style={{
                        borderColor: errors.name ? "#ff2d78" : "rgba(160,80,255,0.2)",
                        color: "#f0eaff",
                      }}
                    />
                    {errors.name && (
                      <p className="font-mono text-xs mt-1" style={{ color: "#ff2d78" }}>
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* メール */}
                  <div>
                    <label className={labelClass} style={{ color: "rgba(240,234,255,0.45)" }}>
                      EMAIL <span className="ml-1" style={{ color: "#ff2d78" }}>*</span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => {
                        setForm({ ...form, email: e.target.value })
                        if (errors.email) setErrors({ ...errors, email: "" })
                      }}
                      placeholder="info@example.com"
                      className={inputClass}
                      style={{
                        borderColor: errors.email ? "#ff2d78" : "rgba(160,80,255,0.2)",
                        color: "#f0eaff",
                      }}
                    />
                    {errors.email && (
                      <p className="font-mono text-xs mt-1" style={{ color: "#ff2d78" }}>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* 電話 */}
                  <div>
                    <label className={labelClass} style={{ color: "rgba(240,234,255,0.45)" }}>
                      PHONE <span className="ml-1 opacity-50">任意</span>
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="06-0000-0000"
                      className={inputClass}
                      style={{
                        borderColor: "rgba(160,80,255,0.2)",
                        color: "#f0eaff",
                      }}
                    />
                  </div>

                  {/* お問い合わせ種別 */}
                  <div>
                    <label className={labelClass} style={{ color: "rgba(240,234,255,0.45)" }}>
                      CATEGORY
                    </label>
                    <div className="relative">
                      <select
                        value={form.category}
                        onChange={(e) => setForm({ ...form, category: e.target.value })}
                        className={inputClass + " appearance-none pr-8"}
                        style={{
                          borderColor: "rgba(160,80,255,0.2)",
                          color: form.category ? "#f0eaff" : "rgba(240,234,255,0.3)",
                          background: "rgba(26,13,46,0.9)",
                        }}
                      >
                        <option value="" style={{ background: "#1a0d2e" }}>
                          選択してください
                        </option>
                        {categories.map((c) => (
                          <option key={c} value={c} style={{ background: "#1a0d2e" }}>
                            {c}
                          </option>
                        ))}
                      </select>
                      <span
                        className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none font-mono text-xs"
                        style={{ color: "rgba(240,234,255,0.35)" }}
                      >
                        ▾
                      </span>
                    </div>
                  </div>

                  {/* メッセージ */}
                  <div>
                    <label className={labelClass} style={{ color: "rgba(240,234,255,0.45)" }}>
                      MESSAGE <span className="ml-1" style={{ color: "#ff2d78" }}>*</span>
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => {
                        setForm({ ...form, message: e.target.value })
                        if (errors.message) setErrors({ ...errors, message: "" })
                      }}
                      placeholder="お問い合わせ内容をご記入ください"
                      rows={6}
                      className={inputClass + " resize-y"}
                      style={{
                        borderColor: errors.message ? "#ff2d78" : "rgba(160,80,255,0.2)",
                        color: "#f0eaff",
                      }}
                    />
                    {errors.message && (
                      <p className="font-mono text-xs mt-1" style={{ color: "#ff2d78" }}>
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* 送信ボタン */}
                  <button
                    type="submit"
                    className="relative w-full overflow-hidden font-mono text-sm py-4 border transition-all duration-200 group"
                    style={{
                      borderColor: "#ff2d78",
                      color: "#ff2d78",
                      background: "rgba(255,45,120,0.08)",
                    }}
                  >
                    <span className="relative z-10">送信する</span>
                    <span
                      className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
                      style={{ background: "rgba(255,45,120,0.2)" }}
                    />
                    <span
                      className="absolute inset-0 -translate-x-full animate-shimmer"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,45,120,0.4), transparent)",
                      }}
                    />
                  </button>
                </div>
              </motion.form>
            )}
          </div>

          {/* サイドバー：連絡先情報 */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            {[
              {
                label: "TEL",
                value: company.tel,
                href: `tel:${company.tel}`,
                color: "#00ffd2",
              },
              {
                label: "EMAIL",
                value: company.email,
                href: `mailto:${company.email}`,
                color: "#ff2d78",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="relative border p-5 overflow-hidden"
                style={{
                  background: "rgba(26,13,46,0.9)",
                  borderColor: `${item.color}30`,
                }}
              >
                <HudCorners color={item.color} size={8} />
                <div
                  className="font-mono text-xs mb-2"
                  style={{ color: item.color, opacity: 0.7 }}
                >
                  {item.label}
                </div>
                <a
                  href={item.href}
                  className="font-mono text-sm break-all hover:opacity-80 transition-opacity"
                  style={{ color: "#f0eaff" }}
                >
                  {item.value}
                </a>
              </div>
            ))}

            {/* 営業時間 */}
            <div
              className="relative border p-5 overflow-hidden"
              style={{
                background: "rgba(26,13,46,0.9)",
                borderColor: "rgba(160,80,255,0.2)",
              }}
            >
              <HudCorners color="#a050ff" size={8} />
              <div
                className="font-mono text-xs mb-3"
                style={{ color: "#a050ff", opacity: 0.7 }}
              >
                BUSINESS HOURS
              </div>
              <p className="font-noto text-sm" style={{ color: "rgba(240,234,255,0.7)" }}>
                平日 10:00 — 18:00
              </p>
              <p className="font-noto text-xs mt-1" style={{ color: "rgba(240,234,255,0.4)" }}>
                土日祝はお休みをいただいております
              </p>
            </div>

            {/* 拠点 */}
            <div
              className="relative border p-5 overflow-hidden"
              style={{
                background: "rgba(26,13,46,0.9)",
                borderColor: "rgba(255,210,0,0.2)",
              }}
            >
              <HudCorners color="#ffd200" size={8} />
              <div
                className="font-mono text-xs mb-3"
                style={{ color: "#ffd200", opacity: 0.7 }}
              >
                OFFICES
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-mono text-xs mb-1" style={{ color: "rgba(240,234,255,0.45)" }}>
                    大阪本社
                  </p>
                  <p className="font-noto text-xs" style={{ color: "rgba(240,234,255,0.65)" }}>
                    {company.offices.osaka}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs mb-1" style={{ color: "rgba(240,234,255,0.45)" }}>
                    東京支社
                  </p>
                  <p className="font-noto text-xs" style={{ color: "rgba(240,234,255,0.65)" }}>
                    {company.offices.tokyo}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
