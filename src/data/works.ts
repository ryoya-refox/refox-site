export type Work = {
  slug: string
  title: string
  date: string
  location: string
  country: string
  category: "domestic" | "overseas"
  neonColor: string
  imageUrl?: string
  description?: string
}

export const works: Work[] = [
  { slug: "anime-expo-2022", title: "Anime Expo 2022", date: "2022-07-01", location: "LOS ANGELES, CA", country: "USA", category: "overseas", neonColor: "#00ffd2" },
  { slug: "company-event-las-vegas-2023", title: "企業発表会", date: "2023-01-01", location: "LAS VEGAS, NV", country: "USA", category: "overseas", neonColor: "#ff2d78" },
  { slug: "jaepo-2023", title: "JAEPO 2023", date: "2023-02-01", location: "幕張メッセ, 千葉", country: "JPN", category: "domestic", neonColor: "#a050ff" },
  { slug: "fancy-food-show-2023", title: "Fancy Food Show 2023", date: "2023-03-01", location: "LAS VEGAS, NV", country: "USA", category: "overseas", neonColor: "#ffa000" },
  { slug: "sweets-snacks-expo-2023", title: "Sweets & Snacks Expo 2023", date: "2023-05-01", location: "CHICAGO, IL", country: "USA", category: "overseas", neonColor: "#00ffd2" },
  { slug: "tokyo-toy-show-2023", title: "東京おもちゃショー 2023", date: "2023-06-01", location: "東京ビッグサイト", country: "JPN", category: "domestic", neonColor: "#ff2d78" },
  { slug: "anime-expo-2023", title: "Anime Expo 2023", date: "2023-06-15", location: "LOS ANGELES, CA", country: "USA", category: "overseas", neonColor: "#a0ff00" },
  { slug: "sdcc-2023", title: "SDCC 2023", date: "2023-07-01", location: "SAN DIEGO, CA", country: "USA", category: "overseas", neonColor: "#00ffd2" },
  { slug: "nycc-2023", title: "NYCC 2023", date: "2023-10-01", location: "NEW YORK, NY", country: "USA", category: "overseas", neonColor: "#ff2d78" },
  { slug: "jump-festa-2023", title: "ジャンプフェスタ '23", date: "2023-12-01", location: "幕張メッセ, 千葉", country: "JPN", category: "domestic", neonColor: "#ffa000" },
  { slug: "tcg-event-la-2024", title: "トレーディングカードゲーム大会単独イベント", date: "2024-01-01", location: "LOS ANGELES, CA", country: "USA", category: "overseas", neonColor: "#a050ff" },
  { slug: "sweets-snacks-expo-2024", title: "Sweets & Snacks Expo 2024", date: "2024-05-01", location: "INDIANAPOLIS, IN", country: "USA", category: "overseas", neonColor: "#00ffd2" },
  { slug: "sdcc-2024", title: "SDCC 2024", date: "2024-07-01", location: "SAN DIEGO, CA", country: "USA", category: "overseas", neonColor: "#ff2d78" },
  { slug: "nycc-2024", title: "NYCC 2024", date: "2024-10-01", location: "NEW YORK, NY", country: "USA", category: "overseas", neonColor: "#a0ff00" },
  { slug: "tcg-event-florida-2025", title: "トレーディングカードゲーム大会単独イベント", date: "2025-01-01", location: "FLORIDA", country: "USA", category: "overseas", neonColor: "#00ffd2" },
  { slug: "comics-event-dallas-2025", title: "大人気コミックス複合単独イベント", date: "2025-03-01", location: "DALLAS, TX", country: "USA", category: "overseas", neonColor: "#ffa000" },
  { slug: "sweets-snacks-expo-may-2025", title: "Sweets & Snacks Expo 2025", date: "2025-05-01", location: "INDIANAPOLIS, IN", country: "USA", category: "overseas", neonColor: "#ff2d78" },
  { slug: "capsule-toy-manila-2025", title: "カプセルトイイベント", date: "2025-05-15", location: "MANILA", country: "PHL", category: "overseas", neonColor: "#a050ff" },
  { slug: "tokyo-toy-show-2025", title: "東京おもちゃショー 2025", date: "2025-08-01", location: "東京ビッグサイト", country: "JPN", category: "domestic", neonColor: "#00ffd2" },
  { slug: "tgs-2025", title: "TOKYO GAME SHOW 2025", date: "2025-09-01", location: "東京ビッグサイト", country: "JPN", category: "domestic", neonColor: "#a0ff00" },
  { slug: "cosmoprof-asia-2025", title: "Cosmoprof Asia 2025", date: "2025-11-01", location: "HONG KONG", country: "HKG", category: "overseas", neonColor: "#ffa000" },
  { slug: "jump-festa-2025", title: "ジャンプフェスタ 2026", date: "2025-12-01", location: "幕張メッセ, 千葉", country: "JPN", category: "domestic", neonColor: "#ff2d78" },
  { slug: "christmas-bazaar-manila-2025", title: "Christmas Bazaar", date: "2025-12-15", location: "OKADA MANILA", country: "PHL", category: "overseas", neonColor: "#a050ff" },
  { slug: "tcg-event-vegas-2026", title: "トレーディングカード単独イベント", date: "2026-01-01", location: "LAS VEGAS, NV", country: "USA", category: "overseas", neonColor: "#00ffd2" },
  { slug: "hololive-expo-2026", title: "ホロライブエキスポ 2026", date: "2026-03-01", location: "幕張メッセ, 千葉", country: "JPN", category: "domestic", neonColor: "#ff2d78" },
  { slug: "masa-ivory-coast-2026", title: "MASA 2026", date: "2026-04-01", location: "CÔTE D'IVOIRE", country: "CIV", category: "overseas", neonColor: "#ffa000" },
  { slug: "game-event-la-2026", title: "北米単独ゲームイベント", date: "2026-04-10", location: "LOS ANGELES, CA", country: "USA", category: "overseas", neonColor: "#a0ff00" },
  { slug: "otaku-pop-fest-manila-2026", title: "Otaku Pop Fest 2026", date: "2026-04-20", location: "OKADA MANILA", country: "PHL", category: "overseas", neonColor: "#a050ff" },
]
