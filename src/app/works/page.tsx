"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import WorkCard from "@/components/WorkCard"
import ScanLine from "@/components/ScanLine"
import { works } from "@/data/works"

type Filter = "all" | "domestic" | "overseas"

const filterLabels: Record<Filter, string> = {
  all: "全て",
  domestic: "国内",
  overseas: "海外",
}

export default function WorksPage() {
  const [filter, setFilter] = useState<Filter>("all")

  const sorted = [...works].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  const filtered =
    filter === "all" ? sorted : sorted.filter((w) => w.category === filter)

  return (
    <div style={{ background: "#1a0d2e", minHeight: "100vh" }}>
      <Nav />

      {/* PAGE HEADER */}
      <section
        className="relative pt-32 pb-16 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 30% 0%, rgba(160,80,255,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(255,45,120,0.1) 0%, transparent 50%), linear-gradient(180deg, #2a0d4a 0%, #1a0d2e 100%)",
        }}
      >
        <ScanLine color="rgba(0,255,210,0.04)" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="font-mono text-xs tracking-widest mb-3"
            style={{ color: "rgba(240,234,255,0.35)" }}
          >
            PROJECTS & EVENTS
          </div>
          <h1 className="font-zen font-black text-5xl sm:text-6xl mb-4" style={{ color: "#f0eaff" }}>
            実績一覧
          </h1>
          <p className="font-noto text-base" style={{ color: "rgba(240,234,255,0.5)" }}>
            {works.length}件のイベント・プロジェクト実績
          </p>
        </div>
      </section>

      {/* FILTER */}
      <div
        className="sticky top-16 z-30 border-b"
        style={{
          background: "rgba(6,6,15,0.95)",
          backdropFilter: "blur(12px)",
          borderColor: "rgba(160,80,255,0.15)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 py-3">
            {(["all", "domestic", "overseas"] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="font-mono text-xs px-4 py-2 border transition-all duration-200 relative overflow-hidden"
                style={{
                  borderColor: filter === f ? "#00ffd2" : "rgba(160,80,255,0.2)",
                  color: filter === f ? "#00ffd2" : "rgba(240,234,255,0.5)",
                  background: filter === f ? "rgba(0,255,210,0.08)" : "transparent",
                }}
              >
                {filterLabels[f]}
                {filter === f && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{ background: "#00ffd2" }}
                  />
                )}
              </button>
            ))}
            <span
              className="ml-auto font-mono text-xs"
              style={{ color: "rgba(240,234,255,0.3)" }}
            >
              {filtered.length} RESULTS
            </span>
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((work, i) => (
            <motion.div
              key={work.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              layout
            >
              <WorkCard {...work} index={i} />
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
