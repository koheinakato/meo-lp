import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "飲食店MEO対策サービス | ぷらたなすきかく",
  description: "Googleマップで飲食店の集客を最大化。地域検索での上位表示を実現し、来店客数を増やすMEO対策サービス。ぷらたなすきかく株式会社が提供する飲食店専門のMEOコンサルティング。",
  keywords: "MEO, MEO対策, 飲食店, Googleマップ, 集客, 上位表示, ぷらたなすきかく",
  openGraph: {
    title: "飲食店MEO対策サービス | ぷらたなすきかく",
    description: "Googleマップで飲食店の集客を最大化。地域検索での上位表示を実現します。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
