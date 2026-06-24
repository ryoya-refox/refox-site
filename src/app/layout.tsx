import type { Metadata } from "next"
import { Zen_Kaku_Gothic_New, Share_Tech_Mono, Noto_Sans_JP } from "next/font/google"
import "@/styles/globals.css"

const zenKaku = Zen_Kaku_Gothic_New({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-zen",
  display: "swap",
})

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

const notoSansJP = Noto_Sans_JP({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "株式会社リフォックス | RE-FOX INC.",
    template: "%s | 株式会社リフォックス",
  },
  description:
    "株式会社リフォックスは、国内外のイベント企画・運営・設営、店舗施工、海外進出支援を手がける総合イベントプロデュース会社です。",
  keywords: ["イベント", "展示会", "海外進出", "リフォックス", "RE-FOX"],
  authors: [{ name: "RE-FOX INC." }],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://re-fox.net",
    siteName: "株式会社リフォックス",
    title: "株式会社リフォックス | RE-FOX INC.",
    description:
      "国内外のイベント企画・運営・設営、店舗施工、海外進出支援を手がける総合イベントプロデュース会社。",
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社リフォックス | RE-FOX INC.",
    description: "国内外のイベント企画・運営・設営を手がける総合イベントプロデュース会社。",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ja"
      className={`${zenKaku.variable} ${shareTechMono.variable} ${notoSansJP.variable}`}
    >
      <body className="font-noto antialiased" style={{ background: "#1a0d2e", color: "#f0eaff" }}>
        {children}
      </body>
    </html>
  )
}
