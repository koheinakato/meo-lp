import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "飲食店特化型Googleビジネスプロフィールの最適化コンサル | ぷらたなすきかく",
  description: "ダイニングバー・居酒屋・カフェなど飲食店専門のMEO対策サービス。Googleマップで地域検索の上位に表示され、口コミを集客資産に変える仕組みを構築。広告に頼らず新規来店を増やしたい飲食店オーナーへ。",
  keywords: "MEO, MEO対策, 飲食店, Googleマップ, 集客, 上位表示, 口コミ, ぷらたなすきかく",
  openGraph: {
    title: "飲食店特化型Googleビジネスプロフィールの最適化コンサル | ぷらたなすきかく",
    description: "ダイニングバー・居酒屋・カフェなど飲食店専門のMEO対策。Googleマップ上位表示で新規来店を増やす仕組みを構築します。",
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
